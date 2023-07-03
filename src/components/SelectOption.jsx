import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { getAvailableOptions } from "../data/helpers";
import toast from "react-hot-toast";

export default function Selectoption({ currentCategory, setOption }) {
  const [availableOptions, setAvailableOptions] = useState(
    getAvailableOptions(currentCategory)
  );
  const [currentOption, setCurrentOption] = useState(availableOptions[0].name);

  const handleOptionSelect = (option) => {
    // todo set the value to a state held in App
    // todo set the name of the option to the current option.
    if (typeof setOption === "function") {
      setOption(option.src);
    }
    setCurrentOption(option.name);
    toast.success(`set ${currentCategory} to ${option.name}`);
  };
  useEffect(() => {
    let options = getAvailableOptions(currentCategory);

    setAvailableOptions(options);
    setCurrentOption(options[0].name);
    return () => {};
  }, [currentCategory, availableOptions]);

  return (
    <div className="flex flex-col space-y-1  text-gray-600 text-center">
      <h1 className="text-rose-600 uppercase text-center font-bold underline p-4 m-auto">
        Make a selection
      </h1>

      <Listbox value={currentOption} onChange={handleOptionSelect}>
        <Listbox.Button>{currentOption ?? "No Option selected"}</Listbox.Button>

        <Listbox.Options>
          {availableOptions.map((option, index) => (
            <Listbox.Option
              key={index}
              value={option}
              className=" p-2 m-2 w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
