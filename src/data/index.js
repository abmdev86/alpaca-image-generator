import { earings, flower, glasses, headphone } from "./accessories";
import { blue50, blue60, blue70 } from "./backgrounds";
import { defaultEars, tiltedBackwards, tiltedForward } from "./ears";
import {
  angryEyes,
  defaultEyes,
  naughtyEyes,
  pandaEyes,
  smartEyes,
  starEyes,
} from "./eyes";
import {
  bangHair,
  curls,
  defaultHair,
  elegant,
  fancy,
  quiff,
  short,
} from "./hair";
import {
  bubbleTea,
  cookie,
  defaultLeg,
  gameConsole,
  tiltBackwardLeg,
  tiltForwardLeg,
} from "./legs";
import { bendBackward, bendForward, defaultNeck, thick } from "./necks";
import { astonished, defaultMouth, eating, laugh, tongue } from "./mouths";
import { nose } from "./noses";

const Accessories = [
  {
    name: "Earrings",
    src: earings,
  },

  {
    name: "Flowers",
    src: flower,
  },
  {
    name: "Glasses",
    src: glasses,
  },
  {
    name: "Headphones",
    src: headphone,
  },
];

const Backgrounds = [
  {
    name: "Blue 50",
    src: blue50,
  },
  {
    name: "Blue 60",
    src: blue60,
  },
  {
    name: "Blue 70",
    src: blue70,
  },
];

const Ears = [
  {
    name: "Default",
    src: defaultEars,
  },
  {
    name: "Tilted Forwards",
    src: tiltedForward,
  },
  {
    name: "Tilted Backwards",
    src: tiltedBackwards,
  },
];

const Eyes = [
  {
    name: "Default",
    src: defaultEyes,
  },
  {
    name: "Angty",
    src: angryEyes,
  },
  {
    name: "Naughty",
    src: naughtyEyes,
  },
  {
    name: "Panda",
    src: pandaEyes,
  },
  {
    name: "Smart",
    src: smartEyes,
  },
  {
    name: "Star",
    src: starEyes,
  },
];

const Hair = [
  {
    name: "Default",
    src: defaultHair,
  },
  {
    name: "Bangs",
    src: bangHair,
  },
  {
    name: "Curls",
    src: curls,
  },
  {
    name: "Elegant",
    src: elegant,
  },
  {
    name: "Fancy",
    src: fancy,
  },
  {
    name: "Quiff",
    src: quiff,
  },
  {
    name: "Short",
    src: short,
  },
];

const Legs = [
  {
    name: "BubbleTea",
    src: bubbleTea,
  },
  {
    name: "Cookie",
    src: cookie,
  },
  {
    name: "DefaultLeg",
    src: defaultLeg,
  },
  {
    name: "GameConsole",
    src: gameConsole,
  },
  {
    name: "TiltForward",
    src: tiltForwardLeg,
  },
  {
    name: "tiltBackwards",
    src: tiltBackwardLeg,
  },
];
const Mouths = [
  {
    name: "Astonished",
    src: astonished,
  },
  {
    name: "Default",
    src: defaultMouth,
  },
  {
    name: "Eating",
    src: eating,
  },
  {
    name: "Laugh",
    src: laugh,
  },
  {
    name: "Tongue",
    src: tongue,
  },
];
const Necks = [
  {
    name: "Bend Backward",
    src: bendBackward,
  },
  {
    name: "Bend Forward",
    src: bendForward,
  },
  {
    name: "Default",
    src: defaultNeck,
  },
  {
    name: "Thick",
    src: thick,
  },
];

const Noses = [
  {
    name: "Nose",
    src: nose,
  },
];

const Categories = {
  Accessories: Accessories,
  Backgrounds: Backgrounds,
  Ears: Ears,
  Eyes: Eyes,
  Hair: Hair,
  Legs: Legs,
  Mouths: Mouths,
  Necks: Necks,
  Noses: Noses,
};
export default Categories;
