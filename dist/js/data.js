const LABEL_FARM_ANIMAL = {
  src: "./static/svg/labelFarmAnimal.svg",
  alt: "Farm Animal category",
  category: "farmAnimals",
};
const LABEL_COMPANION_ANIMAL = {
  src: "./static/svg/labelCompanionAnimals.svg",
  alt: "Companion Animal category",
  category: "companionAnimals",
};
const LABEL_SANITATION = {
  src: "./static/svg/labelSanitation.svg",
  alt: "Sanitation category",
  category: "sanitation",
};
const DATASET = [
  {
    categoryLabels: [LABEL_FARM_ANIMAL],
    title: "copper sulfate",
    imgSrc: "./static/images/product-copper-sulfate.png",
    imgAlt: "copper sulfate",
    description: `Antifungal and Antiprotozoal for use in chickens and turkeys...`,
    descriptionIncomplete: true,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL],
    title: "Ivermectin Pour-On",
    imgSrc: "./static/images/product-Ivermectin-5L-small@1X.png",
    imgAlt: "Ivermectin 5L small",
    description: `Water-based product – easy administration with no wasted...`,
    descriptionIncomplete: true,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_COMPANION_ANIMAL],
    title: "Ivermectin Liquid",
    imgSrc:
      "./static/images/product-Ivermectin-Liquid-for-Horses-All-Vol.-small@1X.png",
    imgAlt: "Ivermectin Liquid for Horses",
    description: `Water-based product – easy administration with no wasted...`,
    descriptionIncomplete: true,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL],
    title: "Sulfaquinoxaline",
    imgSrc: "./static/images/product-Sulfaquinoxaline-4L-small@1X.png",
    imgAlt: "Sulfaquinoxaline 4l small",
    description: `Antifungal and Antiprotozoal for use in chickens and turkeys...`,
    descriptionIncomplete: true,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_SANITATION],
    title: "HemaPeroxy , USP",
    imgSrc: "./static/images/product-Hemaperoxy-4L@1X.png",
    imgAlt: "HemaPeroxy 4l",
    description: `Water-based product – easy administration with no wasted ...`,
    descriptionIncomplete: true,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL, LABEL_COMPANION_ANIMAL],
    title: "Copper Hoof Treatment",
    imgSrc: "./static/images/product-cooper-hoof-tx-475ml@1X.png",
    imgAlt: "Copper Hoof 475ml",
    description: `Water-based product – easy administration with no wasted ...`,
    descriptionIncomplete: true,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL],
    title: "Bloat-Lax",
    imgSrc: "./static/images/product-Bloat-Lax-4L-small@1X.png",
    imgAlt: "Bloat Lax 4L small",
    description: `Antifungal and Antiprotozoal for use in chickens and turkeys`,
    descriptionIncomplete: false,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL],
    title: "Electrolyte Powder",
    imgSrc: "./static/images/product-Electrolyte-Powder-small@1X.png",
    imgAlt: "Electrolyte Powder small",
    description: `Water-based product – easy administration with no wasted product! Made in Canada`,
    descriptionIncomplete: false,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_COMPANION_ANIMAL],
    title: "Hemo-Stat Powder",
    imgSrc: "./static/images/product-Hemostat-25g-small@1X.png",
    imgAlt: "Hemostat Powder 25g small",
    description: `Water-based product – easy administration with no wasted product! Made in Canada`,
    descriptionIncomplete: false,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL],
    title: "Electrolyte Concentrate",
    imgSrc: "./static/images/product-Electrolyte-Concentrate-4L-small@1X.png",
    imgAlt: "Electrolyte Concentrate 4L small",
    description: `Antifungal and Antiprotozoal for use in chickens and turkeys`,
    descriptionIncomplete: false,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_SANITATION],
    title: "Isopropyl Alcohol 99%, USP",
    imgSrc: "./static/images/product-IPA-250ml-small@1X.png",
    imgAlt: "Isopropyl Alcohol 250ml small",
    description: `Water-based product – easy administration with no wasted product! Made in Canada`,
    descriptionIncomplete: false,
    buyCount: Math.ceil(Math.random() * 100),
  },
  {
    categoryLabels: [LABEL_FARM_ANIMAL, LABEL_COMPANION_ANIMAL],
    title: "Light Mineral Oil, NF",
    imgSrc: "./static/images/Light-Mineral-Oil-250mL-small@1X.png",
    imgAlt: "Light Mineral Oil 250ml small",
    description: `Water-based product – easy administration with no wasted product! Made in Canada`,
    descriptionIncomplete: false,
    buyCount: Math.ceil(Math.random() * 100),
  },
];
