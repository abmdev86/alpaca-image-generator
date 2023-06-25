import React from "react";
import { Listbox } from "@headlessui/react";
import Categories from "../data/content";

const categories = Categories;
export default function SelectCategory({ currentCategory, setCategory }) {
  const handleSetCategory = (category) => {
    if (typeof setCategory === "function") {
      setCategory(category);
    }
  };
  return (
    <Listbox value={currentCategory} onChange={handleSetCategory}>
      <Listbox.Button>
        {currentCategory.name ?? "No Category Selected"}
      </Listbox.Button>
      <Listbox.Options>
        {categories.map((category) => (
          <Listbox.Option
            key={category.name}
            value={category}
            className=" ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {category.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
