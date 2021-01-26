const renderProducts = (list) => {
  productsList.innerHTML = "";

  list.forEach((product) => {
    const categoryLabelsDiv = document.createElement("div");
    categoryLabelsDiv.classList.add("categoryLabels");

    product.categoryLabels.forEach((item) => {
      const imgElem = document.createElement("img");
      imgElem.src = item.src;
      imgElem.alt = item.alt;
      categoryLabelsDiv.appendChild(imgElem);
    });

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.appendChild(categoryLabelsDiv);

    const h1Elem = document.createElement("h1");
    h1Elem.classList.add("name");
    h1Elem.appendChild(document.createTextNode(`${product.title}`));

    productDiv.appendChild(h1Elem);

    const imgContainerDiv = document.createElement("div");
    imgContainerDiv.classList.add("imgContainer");
    const imgEl = document.createElement("img");
    imgEl.src = product.imgSrc;
    imgEl.alt = product.imgAlt;

    imgContainerDiv.appendChild(imgEl);
    productDiv.appendChild(imgContainerDiv);

    const descriptionEl = document.createElement("div");
    descriptionEl.classList.add("description");

    const textNode = document.createTextNode(product.description);

    if (product.descriptionIncomplete) {
      const spanEl = document.createElement("span");
      const textNodeSpan = document.createTextNode("Details");
      spanEl.appendChild(textNodeSpan);

      descriptionEl.appendChild(textNode);
      descriptionEl.appendChild(spanEl);
    } else {
      descriptionEl.appendChild(textNode);
    }

    productDiv.appendChild(descriptionEl);

    const ctaButtonsDiv = document.createElement("div");
    ctaButtonsDiv.classList.add("ctaButtons");

    const btn1 = document.createElement("button");
    btn1.classList.add("buy");
    btn1.appendChild(document.createTextNode("Buy"));

    const btn2 = document.createElement("button");
    btn2.classList.add("addToCart");
    btn2.appendChild(document.createTextNode("Add to Cart"));

    ctaButtonsDiv.appendChild(btn1);
    ctaButtonsDiv.appendChild(btn2);

    productDiv.appendChild(ctaButtonsDiv);
    productsList.appendChild(productDiv);
  });
};
