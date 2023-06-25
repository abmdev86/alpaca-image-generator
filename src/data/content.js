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
} from ".";

const Categories = [
  {
    name: "Backgrounds",
    options: [...Backgrounds],
  },
  { name: "Accessories", options: [...Accessories] },
  {
    name: "Ears",
    options: [...Ears],
  },

  {
    name: "Eyes",
    options: [...Eyes],
  },
  {
    name: "Hairstyles",
    options: [...HairStyles],
  },
  {
    name: "Legs",
    options: [...Legs],
  },
  {
    name: "Mouths",
    options: [...Mouths],
  },
  {
    name: "Necks",
    options: [...Necks],
  },
  {
    name: "Noses",
    options: [...Noses],
  },
];

export default Categories;
