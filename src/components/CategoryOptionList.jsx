import React from "react";
import { Popover } from "@headlessui/react";
export default function CategoryOptionList({
  categoryName,
  values = [],
  setCurrentAlpacaSelection,
  alpaca,
}) {
  const handleSelection = (e) => {
    if (typeof setCurrentAlpacaSelection === "function") {
      switch (categoryName) {
        case "Backgrounds":
          setCurrentAlpacaSelection({
            ...alpaca,
            background: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Accessories":
          setCurrentAlpacaSelection({
            ...alpaca,
            accessory: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Ears":
          setCurrentAlpacaSelection({
            ...alpaca,
            ears: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Eyes":
          setCurrentAlpacaSelection({
            ...alpaca,
            eyes: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Hairstyles":
          setCurrentAlpacaSelection({
            ...alpaca,
            hair: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Legs":
          setCurrentAlpacaSelection({
            ...alpaca,
            legs: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Mouths":
          setCurrentAlpacaSelection({
            ...alpaca,
            mouth: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Necks":
          setCurrentAlpacaSelection({
            ...alpaca,
            neck: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        case "Noses":
          setCurrentAlpacaSelection({
            ...alpaca,
            nose: {
              name: e.target.name,
              img: e.target.value,
            },
          });
          break;
        default:
          setCurrentAlpacaSelection({
            ...alpaca,
          });
      }
    }
  };
  return (
    <Popover className="relative">
      <Popover.Button>{categoryName ?? "No Category Selected"}</Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          {values.map((value, index) => (
            <button
              onClick={handleSelection}
              key={index}
              value={value.img}
              name={value.name}
            >
              {value.name}
            </button>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}
