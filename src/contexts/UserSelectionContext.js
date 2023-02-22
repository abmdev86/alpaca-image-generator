import { createContext } from "react";
import AvailableOptions from "../data";

export const UserSelections = {
  backgrounds: AvailableOptions["backgrounds"][0].img,
  ears: AvailableOptions["ears"][0].img,
  legs: AvailableOptions["legs"][0].img,
  necks: AvailableOptions["necks"][0].img,
  noses: AvailableOptions["noses"][0].img,
  hairstyles: AvailableOptions["hairstyles"][0].img,
  mouths: AvailableOptions["mouths"][0].img,
  eyes: AvailableOptions["eyes"][0].img,
  accessories: AvailableOptions["accessories"][0].img,
  currentCategoryName: "backgrounds",
};

const UserSelectionContext = createContext(UserSelections);
export default UserSelectionContext;
