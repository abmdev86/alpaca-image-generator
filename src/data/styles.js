//TODO: look at lazy load or something. probably DB it.
//backgrounds
import blue50 from "../img/alpaca/backgrounds/blue50.png";
import blue60 from "../img/alpaca/backgrounds/blue60.png";
import blue70 from "../img/alpaca/backgrounds/blue70.png";
// Ears
import defaultEars from "../img/alpaca/ears/default.png";
import tiltedBackwards from "../img/alpaca/ears/tilt-backward.png";
import tiltedForward from "../img/alpaca/ears/tilt-forward.png";
import darkBlue30 from "../img/alpaca/backgrounds/darkblue30.png";
import darkBlue50 from "../img/alpaca/backgrounds/darkblue50.png";
import darkBlue70 from "../img/alpaca/backgrounds/darkblue70.png";
import green50 from "../img/alpaca/backgrounds/green50.png";
import green60 from "../img/alpaca/backgrounds/green60.png";
import green70 from "../img/alpaca/backgrounds/green70.png";
import grey40 from "../img/alpaca/backgrounds/grey40.png";
import grey70 from "../img/alpaca/backgrounds/grey70.png";
import grey80 from "../img/alpaca/backgrounds/grey80.png";
import red50 from "../img/alpaca/backgrounds/red50.png";
import red60 from "../img/alpaca/backgrounds/red60.png";
import red70 from "../img/alpaca/backgrounds/red70.png";
import yellow50 from "../img/alpaca/backgrounds/yellow50.png";
import yellow60 from "../img/alpaca/backgrounds/yellow60.png";
import yellow70 from "../img/alpaca/backgrounds/yellow70.png";

// Eyes
import defaultEyes from "../img/alpaca/eyes/default.png";
import angryEyes from "../img/alpaca/eyes/angry.png";
import naughtyEyes from "../img/alpaca/eyes/naughty.png";
import pandaEyes from "../img/alpaca/eyes/panda.png";
import smartEyes from "../img/alpaca/eyes/smart.png";
import starEyes from "../img/alpaca/eyes/star.png";

// Hair
import bangHair from "../img/alpaca/hair/bang.png";
import curls from "../img/alpaca/hair/curls.png";
import defaultHair from "../img/alpaca/hair/default.png";
import elegant from "../img/alpaca/hair/elegant.png";
import fancy from "../img/alpaca/hair/fancy.png";
import quiff from "../img/alpaca/hair/quiff.png";
import short from "../img/alpaca/hair/short.png";

// Mouth
import astonished from "../img/alpaca/mouth/astonished.png";
import defaultMouth from "../img/alpaca/mouth/default.png";
import eating from "../img/alpaca/mouth/eating.png";
import laugh from "../img/alpaca/mouth/laugh.png";
import tongue from "../img/alpaca/mouth/tongue.png";

// Nose
import nose from "../img/alpaca/nose/nose.png";

// Neck
import bendBackward from "../img/alpaca/neck/bend-backward.png";
import bendForward from "../img/alpaca/neck/bend-forward.png";
import defaultNeck from "../img/alpaca/neck/default.png";
import thick from "../img/alpaca/neck/thick.png";

// Leg
import defaultLeg from "../img/alpaca/leg/default.png";
import bubbleTea from "../img/alpaca/leg/bubble-tea.png";
import cookie from "../img/alpaca/leg/cookie.png";
import gameConsole from "../img/alpaca/leg/game-console.png";
import tiltBackwardLeg from "../img/alpaca/leg/tilt-backward.png";
import tiltForwardLeg from "../img/alpaca/leg/tilt-forward.png";


// Accessories
import earings from "../img/alpaca/accessories/earings.png";
import flower from "../img/alpaca/accessories/flower.png";
import glasses from "../img/alpaca/accessories/glasses.png";
import headphone from "../img/alpaca/accessories/headphone.png";



//EXPORT Background category object
export const Background = {
  id: 1,
  name: "backgrounds",
  styles: [
    {
      name: "Blue50",
      img: blue50,
      id: 1,
    },
    {
      name: "Blue60",
      img: blue60,
      id: 1,
    },
    {
      name: "Blue70",
      img: blue70,
      id: 1,
    },
    {
      name: "DarkBlue30",
      img: darkBlue30,
      id: 1,
    },
    {
      name: "DarkBlue50",
      img: darkBlue50,
      id: 1,
    },
    {
      name: "DarkBlue70",
      img: darkBlue70,
      id: 1,
    },
    {
      name: "Green50",
      img: green50,
      id: 1,
    },
    {
      name: "Green60",
      img: green60,
      id: 1,
    },
    {
      name: "Green70",
      img: green70,
      id: 1,
    },
    {
      name: "Grey40",
      img: grey40,
      id: 1,
    },
    {
      name: "Grey70",
      img: grey70,
      id: 1,
    },
    {
      name: "Grey80",
      img: grey80,
      id: 1,
    },
    {
      name: "Red50",
      img: red50,
      id: 1,
    },
    {
      name: "Red60",
      img: red60,
      id: 1,
    },
    {
      name: "Red70",
      img: red70,
      id: 1,
    },
    {
      name: "Yellow50",
      img: yellow50,
      id: 1,
    },
    {
      name: "Yellow60",
      img: yellow60,
      id: 1,
    },
    {
      name: "Yellow70",
      img: yellow70,
      id: 1,
    },
  ],
};

// EXPORT Ears Category Object
export const Ears = {
  id: 2,
  name: "Ears",
  styles: [
    {
      id: 1,
      name: "Default",
      img: defaultEars,
    },
    {
      id: 1,
      name: "tiltForwards",
      img: tiltedForward,
    },
    {
      id: 1,
      name: "tiltBackwards",
      img: tiltedBackwards,
    },
  ],
};

// EXPORT Eyes Category Object
export const Eyes = {
  id: 3,
  name: "Eyes",
  styles: [
    {
      id: 1,
      name: "Default",
      img: defaultEyes,
    },
    {
      id: 1,
      name: "Angty",
      img: angryEyes,
    },
    {
      id: 1,
      name: "Naughty",
      img: naughtyEyes,
    },
    {
      id: 1,
      name: "Panda",
      img: pandaEyes,
    },
    {
      id: 1,
      name: "Smart",
      img: smartEyes,
    },
    {
      id: 1,
      name: "Star",
      img: starEyes,
    },
  ],
};

// EXPORT Hair Category Object
export const Hair = {
  id: 1,
  name: "Hair",
  styles: [
    {
      name: "Default",
      img: defaultHair,
    },
    {
      name: "Bangs",
      img: bangHair,
    },
    {
      name: "Curls",
      img: curls,
    },
    {
      name: "Elegant",
      img: elegant,
    },
    {
      name: "Fancy",
      img: fancy,
    },
    {
      name: "Quiff",
      img: quiff,
    },
    {
      name: "Short",
      img: short,
    },
  ],
};

// EXPORT Mouth Category Object
export const Mouth = {
  id: 1,
  name: "Mouth",
  styles: [
    {
      name: "Astonished",
      img: astonished,
    },
    {
      name: "Default",
      img: defaultMouth,
    },
    {
      name: "Eating",
      img: eating,
    },
    {
      name: "Laugh",
      img: laugh,
    },
    {
      name: "Tongue",
      img: tongue,
    },
  ],
};

// EXPORT Nose Category Object
export const Nose = {
  id: 1,
  name: "Nose",
  styles: [
    {
      name: "Default",
      img: nose,
    },
  ],
};

// EXPORT Neck Category Object
export const Neck = {
  id: 1,
  name: "Neck",
  styles: [
    {
      name: "Bend-Backward",
      img: bendBackward,
    },
    {
      name: "Bend-Forward",
      img: bendForward,
    },
    {
      name: "Default",
      img: defaultNeck,
    },
    {
      name: "Thick",
      img: thick,
    },
  ],
};

// EXPORT Leg Category Object
export const Leg = {
  id: 1,
  name: "Leg",
  styles: [
    {
      name: "BubbleTea",
      img: bubbleTea,
    },
    {
      name: "Cookie",
      img: cookie,
    },
    {
      name: "DefaultLeg",
      img: defaultLeg,
    },
    {
      name: "GameConsole",
      img: gameConsole,
    },
    {
      name: "TiltForward",
      img: tiltForwardLeg,
    },
    {
      name: "tiltBackwards",
      img: tiltBackwardLeg,
    },
  ],
};

// EXPORT Accessories Category Object
export const Accessories = {
  id: 1,
  name: "Accessories",
  styles: [
    {
      name: "Headphone",
      img: headphone,
    },
    {
      name: "Glasses",
      img: glasses,
    },
    {
      name: "Flower",
      img: flower,
    },
    {
      name: "Earings",
      img: earings,
    },
  ],
};