
import React from 'react';
import { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import DropdownButton from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {styleData} from '../data/style';


function CategoryButton(props) {
    const [categoryIndex, setCategoryIndex] = useState(0);


  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={props.categoryName}
        id="bg-nested-dropdown"
      >
        <DropdownItem>
          <button active>Blue</button>
        </DropdownItem>
        <DropdownItem>
          <button active>Red</button>
        </DropdownItem>
        <DropdownItem>
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