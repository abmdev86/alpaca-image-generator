import React from "react";

export default function StyleBtn(props) {
  const [activeStyle, name, generateAlpacaImg] = [props.activeStyle, props.name, props.generateAlpacaImg];
  return (
    <button className={activeStyle === name ? 'active' : ''} onClick={generateAlpacaImg}>{name}</button>
  );

}