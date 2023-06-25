import React from "react";
export default function Alpaca({ imageArray }) {
  return (
    <div className="first:relative first:w-full max-w-xl top-0 left-0 ">
      {imageArray.map((source, index) => (
        <img
          key={index}
          className="absolute w-full max-w-xl top-0 left-0"
          src={source.img}
          alt="Your created alpaca"
        ></img>
      ))}
    </div>
  );
}
