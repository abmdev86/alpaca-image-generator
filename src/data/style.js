// import the images from the image folder
import earings from '../img/alpaca/accessories/earings.png';
import flower from '../img/alpaca/accessories/flower.png';
import glasses from '../img/alpaca/accessories/glasses.png';
import headphone from '../img/alpaca/accessories/headphone.png';

//  export the styleData object. It contains arrays for each category of style. Each array holds objects that represent each image. Each obj
// has a name and an image source.
export const styleData = {
  accessories: [
    {
      name: 'Headphone',
      img: headphone
    }, {
      name: 'Glasses',
      img: glasses
    },
    {
      name: 'Flower',
      img: flower
    },
    {
      name: 'Earings',
      img: earings
    }
  ]
}
