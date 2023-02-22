import React, { useContext, useEffect, useState } from "react";
export default function Alpaca({ imageArray }) {

  return imageArray.map((source, index) => (
    <img
      key={index}
      className="alpaca"
      src={source}
      alt="Your created alpaca"
    ></img>
  ));
}
