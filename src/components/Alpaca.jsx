import React from "react";
export default function Alpaca({ imageArray }) {
  console.log(imageArray)
  return imageArray.map((source, index) => (
    <img
      key={index}
      className="alpaca"
      src={source}
      alt="Your created alpaca"
    ></img>
  ));
}
