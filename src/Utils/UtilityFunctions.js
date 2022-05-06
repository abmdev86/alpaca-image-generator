import { v4 as uuidv4 } from "uuid";
import Styles from "../data";

const data = Styles;

/**
 * returns a randomly generated UUID
 */
export function getGeneratedUUID() {
  return uuidv4();
}

export function setObjectsId() {
  try {
    Object.values(data).forEach((val,i) => {
      const style= getStyleObjectFromCategory(val);
    console.log(style[i].name);
      val.id = getGeneratedUUID();

    });


    return true;
  } catch (e) {
    console.error("seedIDs() " + e.message);
    console.error(e.lineNumber);
    return false;
  }
}
/**
 * sets Category ids of Styles.Category objects and returns.
 */
export function getCategoryObjects() {
  const source = Styles;

  try {
    const values = Object.values(source);

    return values;
  } catch (e) {
    console.error("Utility:GetCategoryObjects(): " + e.message);
    return;
  }
}

export function getCategoryObject(categoryName) {
  try {
    const name = categoryName.toUpperCase().trim();
    const categories = getCategoryObjects();
    const category = {};
    const categoryArr = categories.map((key) => {
      if (key.name.toUpperCase().trim() === name) {
        Object.assign(category, key);
      }
      return key;
    });

    if (Object.entries(category).length === 0) {
      throw new Error(`Cannot find ${name}`);
    }
    return category;
  } catch (e) {
    console.error("Utility:GetCategoryObject(): " + e.message);
    //TODO: Create utility class to handle errors and log.
    return {
      id: e.lineNumber,
      name: e.name,
      message: e.message,
      stack: e.stack,
    };
  }
}
/**
 * Returns an Object containing ALL the available styles from each Category
 */
export function getStyleObjects() {
  const styleObjs = [];
  try {
    const catObjects = getCategoryObjects();
    catObjects.forEach((cat) => {
      styleObjs.push(cat.styles);
    });

    return styleObjs;
  } catch (e) {
    console.error("Utility:GetStyleObjects(): " + e.message);
    return;
  }
}

export function getStyleObjectFromCategory(category) {

  try {
    return Object.values(category.styles);
  } catch (e) {
    console.error("Utility:GetStyleObjects(): " + e.message);
    return;
  }
}
