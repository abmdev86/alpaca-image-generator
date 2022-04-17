import React from "react";
import { useEffect, useState } from "react";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { GetGeneratedUUID } from "../Utils/UtilityFunctions";
/**
 * @param  {props.category} props
 * Generates a dropdown that lists the styles available for the category
 * provided.
 * expected props:
 *
 */
function CategoryDropDown(props) {
  const [styles, setStyles] = useState([props.category.styles]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    try {
      if (styles.length !== 0) return;
      setStyles(props.category.styles);
    } catch (error) {
      //TODO: add a logger
      console.error(error);
    }
  }, [props.category]);

  useEffect(() => {
    if (!isActive) return;
    if (styles.length === 0) return;
    setIsActive(false);
  }, [isActive]);

  function Activate() {
    setIsActive(true);
  }
  const dropDownItems = styles[0].map((style) => {
    style.id = GetGeneratedUUID();
    return (
      <DropdownItem className="style-button" key={style.id} eventKey={style.id}>
        {style.name}
      </DropdownItem>
    );
  });
  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={props.category.name.toUpperCase()}
        id="bg-nested-dropdown"
        onClick={Activate}
        className={props.className}
        variant="info"
      >
        {dropDownItems}
      </DropdownButton>
    </ButtonGroup>
  );
}

export default CategoryDropDown;
