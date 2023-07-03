export default class Alpaca {
  constructor(
    name,
    accessory,
    background,
    ear,
    eye,
    hair,
    leg,
    mouth,
    neck,
    nose
  ) {
    this.name = name;
    this.accessories = accessory;
    this.backgrounds = background;
    this.ears = ear;
    this.eyes = eye;
    this.hair = hair;
    this.legs = leg;
    this.mouths = mouth;
    this.necks = neck;
    this.noses = nose;
  }

  static updateAlpaca(alpaca, categoryName, value) {
    alpaca[categoryName.toLowerCase()] = value;

    return alpaca;
  }

  getImage = () => {
    return [
      this.backgrounds,
      this.ears,
      this.hair,
      this.necks,
      this.noses,
      this.mouths,
      this.accessories,
      this.eyes,
      this.legs,
    ];
  };
}
