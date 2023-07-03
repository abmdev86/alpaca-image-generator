import Categories from ".";
import Alpaca from "./alpaca";

export const getAllCategories = () => {
  let categories = [];
  Object.entries(Categories).forEach(([key, value]) => {
    const k = key;

    categories.push(k);
  });

  if (categories.length === 0) {
    categories.push("No categories");
  }
  return categories;
};

export const getAvailableOptions = (categoryName) => {
  return Categories[categoryName];
};

export const getDefaultAlpaca = () => {
  return new Alpaca(
    "Default Alpaca",
    Categories.Accessories[0].src,
    Categories.Backgrounds[0].src,
    Categories.Ears[0].src,
    Categories.Eyes[0].src,
    Categories.Hair[0].src,
    Categories.Legs[0].src,
    Categories.Mouths[0].src,
    Categories.Necks[0].src,
    Categories.Noses[0].src
  );
};
