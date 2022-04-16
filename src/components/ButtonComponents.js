
import React from 'react';
import { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {styleData} from '../data/style';


function CategoryButton(props) {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [styles, setStyles] = useState([]);


  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={props.categoryName}
        id="bg-nested-dropdown"
      >
        <DropdownItem eventKey="1">
          <button active>Blue</button>
        </DropdownItem>
        <DropdownItem eventKey="2">
          <button active>Red</button>
        </DropdownItem>
        <DropdownItem eventKey="3">
          <button active>Green</button>
        </DropdownItem>
      </DropdownButton>
    </ButtonGroup>
  );
}

function CategoryBtn(props) {
  const [activeCategory, name, generateStylesWithOptions] = [
    props.activeCategory,
    props.name,
    props.generateStylesWithOptions,
  ];
  return (
    <DropdownButton
      id="dropdown-basic-button"
      className={activeCategory === name ? "active" : ""}
    >
 <StyleBtn/>
    </DropdownButton>
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
export{
  CategoryButton
}