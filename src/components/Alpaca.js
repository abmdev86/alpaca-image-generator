import React from 'react';


export default Alpaca = (props) => {
const [alpacaImageArr, setAlpacaImageArr] = useState([]);
const cache = [];
const AlpacaImage = Object.values(props.styles).map((style, index)=>{
cache.push(style);
    return (<Image key={index} src={style.img}/>);
});

  return AlpacaImage;
};
