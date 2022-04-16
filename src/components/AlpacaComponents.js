import React from "react";

function CategoryBtn(props) {
  const [activeCategory, name, generateStylesWithOptions] = [
    props.activeCategory,
    props.name,
    props.generateStylesWithOptions,
  ];
  return (
    <button
      className={activeCategory === name ? "active" : ""}
      onClick={generateStylesWithOptions}
    >
      {name}
    </button>
  );
}

function Alpaca(props) {
  return <img className="alpaca" src={props.pic} alt="Your created alpaca" />;
}

function StyleBtn(props) {
  const [activeStyle, name, generateAlpacaImg] = [
    props.activeStyle,
    props.name,
    props.generateAlpacaImg,
  ];
  return (
    <button
      className={activeStyle === name ? "active" : ""}
      onClick={generateAlpacaImg}
    >
      {name}
    </button>
  );
}
export { Alpaca, StyleBtn, CategoryBtn };

