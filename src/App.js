import { useEffect, useState } from 'react';
import Alpaca from './components/Alpaca';
import CategoryBtn from './components/CategoryBtn';
import StyleBtn from './components/StyleBtn';
import { styleData } from './data/style';
import mergeImages from 'merge-images';

function App() {
  const [allAlpacaData, setAllAlpacaData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Background");
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
    setAllAlpacaData(styleData);
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

  // (method) Generates Alpaca using the name and image provided from the active
  function generateAlpacaImg(name, img) {
    // set to active
    const newActiveArray = [...activeStyle];
    newActiveArray.splice(categoryIndex, 1, name);
    setActiveStyle(newActiveArray);

    // replaces image in the array and generates img
    const newAlpacaImg = [...alpacaImg];
    newAlpacaImg.splice(categoryIndex, 1, img);
    setAlpacaImg(newAlpacaImg);

  }

  function randomAlpaca() {
    const randomAlpaca = [];
    const randomActiveStyle = [];

    Object.values(allAlpacaData).forEach(val => {
      const randomValue = val.length;
      const randomArrayIndex = Math.floor(Math.random() * randomValue);
      randomAlpaca.push(val[randomArrayIndex].img);
      randomActiveStyle.push(val[randomArrayIndex].name);

    });
    setAlpacaImg(randomAlpaca);
    setActiveStyle(randomActiveStyle);
  }
  function downloadAlpaca() {
    mergeImages(alpacaImg)
      .then((b64) => {
        var a = document.createElement("a");
        a.href = b64;
        a.download = "NewAlpaca.png";
        a.click();
      });

  }
  // For each style button iterate over them adding the index and item. Store in a var and return in App
  const styleButtons = styleOptions.map((item, index) => {
    return (<StyleBtn className='btn btn-primary' name={item.name} key={index} activeStyle={activeStyle[categoryIndex]} generateAlpacaImg={() => generateAlpacaImg(item.name, item.img, index)} />);
  });
  const categoryBtns = Object.keys(styleData).map((item, index) => {
    return (
      <CategoryBtn key={index} name={item} activeCategory={activeCategory} generateStylesWithOptions={() => generateStylesWithOptions(item, index)} />
    );
  });

  const alpacaAvatar = alpacaImg.map((item, index) => {
    return (
      <Alpaca pic={item} key={index} />
    );
  });


  return (
    <div className="flex-wrapper">
      <h1>Alpaca Generator</h1>
      <div className='main-content'>
        <div className='alpaca-container'>
          {alpacaAvatar}
        </div>
      </div>
      <div className='random-download-container'>
        <button className='button' onClick={() => randomAlpaca()}> Random</button>
        <button className='button' onClick={() => downloadAlpaca()}>Download</button>
      </div>
      {/* style containter */}
      <div className='styling-container'>
        <div className='category-container'>

          <h2>Alpaca Accessories</h2>
          <div className='category-btns'>
            {categoryBtns}
          </div>
          {/* styles */}
          <div>
            <h2>Alpaca Styles</h2>
            <div className='style-btns'>
              {styleButtons}
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
