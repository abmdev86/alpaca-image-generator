import { useEffect, useState } from 'react';
import Alpaca from './components/Alpaca';
import CategoryBtn from './components/CategoryBtn';
import StyleBtn from './components/StyleBtn';
import { styleData } from './data/style';


function App() {
  const [imgData, setImgData] = useState([]);
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
    setImgData(styleData);
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
    //TODO add logic
  }
  function downloadAlpaca() {
    //TODO add logic

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
    <div className="container">
      <h1>Alpaca Generator</h1>
      <div className='container'>
        {alpacaAvatar}

      </div>
      <div className='container-sm'>
        <button className='button' onClick={() => randomAlpaca()}> Random</button>
        <button className='button' onClick={() => downloadAlpaca()}>Download</button>
      </div>
      {/* style containter */}
      <div>
        <div>
          {/* category */}
          <h2>Alpaca Accessories</h2>
          <div>
            {categoryBtns}
          </div>
          {/* styles */}
          <div>
            <h2>Alpaca Styles</h2>
            <div>
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
