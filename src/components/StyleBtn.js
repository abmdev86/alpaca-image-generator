import React from "react";

export default function StyleBtn({ activeStyle, name, generateAplacaImg }) {
  return (
    <button
      className={activeStyle === name ? "active" : ""}
      onClick={generateAplacaImg}
    >
      {name}
    </button>
  );
}
