import { useEffect, useState } from 'react';
import Alpaca from './components/Alpaca';
import CategoryBtn from './components/CategoryBtn';
import { styleData } from './data/style';


function App() {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("background");
  const [activeStyle, setActiveStyle] = useState([]);
  const [alpacaImg, setAlpacaImg] = useState([]);
  const [styleOptions, setStyleOptions] = useState([]);

  const [categoryIndex, setCategoryIndex] = useState(0);


  //hooks
  useEffect(() => {
    const alpacaImageArray = [];
    const defaultStylesArray = [];

    Object.values(styleData).forEach(val => {
      alpacaImageArray.push(val[0].img);
      defaultStylesArray.push(val[0].name);
    });
    setAlpacaImg(alpacaImageArray);
    setActiveStyle(defaultStylesArray);
    setData(styleData);
  }, []);

  useEffect(() => {
    const optionsArray = [];
    styleData[activeCategory].map(item => {
      return optionsArray.push(item);
    });
    setStyleOptions(optionsArray);
  }, [activeCategory]);

  // custom functions
  function generateStylesWithOptions(category, index) {
    // btn is set to active when selected
    const currentName = category;
    setActiveCategory(currentName);
    setCategoryIndex(index);

    // sets the state
    const optionsArray = [];
    styleData[category].map(item => {
      return optionsArray.push(item);
    });
    setStyleOptions(optionsArray);
  }

  // const styleButtons = styleOptions.map((item, index) => {

  // });

  const alpacaAvatar = alpacaImg.map((item, index) => {
    return (
      <Alpaca pic={item} key={index} />
    );
  });
  return (
    <div className="App">
      <h1>Alpaca Generator</h1>
    </div>
  );
}

export default App;
