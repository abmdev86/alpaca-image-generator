import React from "react";
import { Listbox } from "@headlessui/react";
import { getAllCategories } from "../data/helpers";

const categories = getAllCategories();
export default function SelectCategory({ currentCategory, setCategory }) {
  const handleSetCategory = (category) => {
    if (typeof setCategory === "function") {
      setCategory(category);
    }
  };

  return (
    <div className="flex flex-col space-y-1  text-gray-600 text-center">
      <h1 className="text-rose-600 uppercase text-center font-bold underline p-4 m-auto">
        Select a Category
      </h1>
      <Listbox value={currentCategory} onChange={handleSetCategory}>
        <Listbox.Button className="shadow-lg rounded-lg uppercase decoration-4 font-semibold">
          {currentCategory ?? "No Category Selected"}
        </Listbox.Button>
        <Listbox.Options>
          {categories.map((category, index) => (
            <Listbox.Option
              key={index}
              value={category}
              className=" p-2 m-2 w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {category}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
