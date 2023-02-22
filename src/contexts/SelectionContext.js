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

export const Selection = {
  backgrounds: Backgrounds,
  ears: Ears,
  eyes: Eyes,
  hairstyles: HairStyles,
  legs: Legs,
  mouths: Mouths,
  necks: Necks,
  noses: Noses,
  accessories: Accessories,
};

export const CATEGORIES = Object.keys(Selection);

const SelectionContext = createContext(Selection);

export default SelectionContext;
