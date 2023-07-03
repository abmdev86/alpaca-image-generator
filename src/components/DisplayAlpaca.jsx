import React from "react";

export default function DisplayAlpaca({ alpaca }) {
  return (
    <div className="first:relative first:w-full max-w-xl top-0 left-0 ">
      {alpaca.getImage().map((source, index) => (
        <img
          key={index}
          className="alpaca"
          src={source}
          alt="Your generated alpaca"
        ></img>
      ))}
    </div>
  );
}
