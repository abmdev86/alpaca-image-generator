import Categories from ".";

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
