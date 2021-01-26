// Find out which filter is selected
const getSelectedFilterClass = () => {
  let selectedFilterClass;
  filters.forEach((filter) => {
    const hasClassSelected = filter.classList.contains("selected");
    if (hasClassSelected) {
      if (filter.classList[0] !== "selected") {
        selectedFilterClass = filter.classList[0];
      } else {
        selectedFilterClass = filter.classList[1];
      }
    }
  });
  return selectedFilterClass;
};

// get all items from a specific category
const getAllFromThisCategory = (category) => {
  const temp = [];
  DATASET.forEach((item) => {
    const c = item.categoryLabels.map((item) => item.category);
    if (c.includes(category) === true) {
      temp.push(item);
    }
  });
  return temp;
};

// get items above a certain buyCount
const getTopProducts = (lowerLimit) => {
  const temp = [];
  DATASET.forEach((item) => {
    if (item.buyCount >= lowerLimit) {
      temp.push(item);
    }
  });
  return temp;
};

// Set filteredList
const getFilteredList = (selectedFilter) => {
  let filteredList = [];
  switch (selectedFilter) {
    case "all": {
      filteredList = DATASET;
      break;
    }
    case "farmAnimals": {
      filteredList = getAllFromThisCategory("farmAnimals");
      break;
    }
    case "companionAnimals": {
      filteredList = getAllFromThisCategory("companionAnimals");
      break;
    }
    case "sanitation": {
      filteredList = getAllFromThisCategory("sanitation");
      break;
    }
    case "top": {
      filteredList = getTopProducts(50);
      break;
    }
  }

  return filteredList;
};

const updateList = (filterClass) => {
  const filteredList = getFilteredList(filterClass);
  renderProducts(filteredList);
};
const onFilterClickHandler = (evt) => {
  filters.forEach((item) => item.classList.remove("selected"));
  updateList(evt.target.classList[0]);
  evt.target.classList.add("selected");
};
const onMenuClickHandler = (evt) => {
  dropdown.classList.toggle("menuDropdownOpen");
};

//  ===============================================================================================================================
const selectedFilterClass = getSelectedFilterClass();
const filteredList = getFilteredList(selectedFilterClass);
renderProducts(filteredList);

filters.forEach((filter) => {
  filter.addEventListener("click", onFilterClickHandler);
});

// add event listener for click on mobile hamburger menu
const menu = dom(".hamburgerMenu");
const dropdown = dom(".menuDropdown");

menu.addEventListener("click", onMenuClickHandler);
