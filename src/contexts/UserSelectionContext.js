import { createContext } from "react";
import {
  Accessories,
  Backgrounds,
  Ears,
  Eyes,
  HairStyles,
  Legs,
  Mouths,
  Necks,
  Noses,
} from "../data";

export const UserSelections = {
  backgrounds: Backgrounds[1].img,
  ears: Ears[0].img,
  legs: Legs[0].img,
  necks: Necks[0].img,
  noses: Noses[0].img,
  hairstyles: HairStyles[0].img,
  mouths: Mouths[0].img,
  eyes: Eyes[0].img,
  accessories: Accessories[0].img,
  currentCategoryName: "backgrounds",
};

const UserSelectionContext = createContext(UserSelections);
export default UserSelectionContext;
