import { v4 as uuidv4 } from "uuid";
import Styles from "../data";
/**
 * returns a randomly generated UUID
 */
export function GetGeneratedUUID() {
  return uuidv4();
}

export function seedIDs(data){
 
  Object.values(this.data).forEach(val =>{
   val.id = GetGeneratedUUID();
    console.log(val.id);
  });
  return;
 
}
/**
 * sets Category ids of Styles.Category objects and returns.
 */
export function GetCategoryObjects() {
  const source = Styles;

  try {
    const values = Object.values(source);
    

    return values;
  } catch (e) {
    console.error("Utility:GetCategoryObjects(): " + e.message);
    return;
  }
}

export function GetCategoryObject(categoryName) {
  try {
    const name = categoryName.toUpperCase().trim();
    const categories = GetCategoryObjects();
    const category = { };
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
export function GetStyleObjects() {
  const styleObjs = [];
  try {
    const catObjects = GetCategoryObjects();
    catObjects.forEach((cat) => {
      styleObjs.push(cat.styles);
    });

    return styleObjs;
  } catch (e) {
    console.error("Utility:GetStyleObjects(): " + e.message);
    return;
  }
}

export function GetStyleObjectsFromCategory(category) {
  try {
    return category.styles;
  } catch (e) {
    console.error("Utility:GetStyleObjects(): " + e.message);
    return;
  }
}
