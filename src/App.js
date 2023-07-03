import React from "react";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import mergeImages from "merge-images";

import SelectCategory from "./components/SelectCategory";
import { Toaster } from "react-hot-toast";
import Categories from "./data";
import { getAllCategories, getRandomAlpaca } from "./data/helpers";
import Selectoption from "./components/SelectOption";
import Alpaca from "./data/alpaca";
import DisplayAlpaca from "./components/DisplayAlpaca";

const defaultAlpaca = new Alpaca(
  "My Alpaca",
  Categories.Accessories[0].src,
  Categories.Backgrounds[0].src,
  Categories.Ears[0].src,
  Categories.Eyes[0].src,
  Categories.Hair[0].src,
  Categories.Legs[0].src,
  Categories.Mouths[0].src,
  Categories.Necks[0].src,
  Categories.Noses[0].src
);
function App() {
  const [currentCateogory, setCurrentCategory] = useState(
    getAllCategories()[0]
  );

  const [option, setOption] = useState("");
  const [alpaca, setAlpaca] = useState(defaultAlpaca);

  function randomAlpaca() {
    const randomAlpaca = getRandomAlpaca();
    setAlpaca(randomAlpaca);
  }
  function downloadAlpaca() {
    mergeImages(alpaca.getImage()).then((b64) => {
      var a = document.createElement("a");
      a.href = b64;
      a.download = alpaca.name;
      a.click();
    });
  }

  const handleUpdateAlpaca = (value) => {
    let newAlpaca = Alpaca.updateAlpaca(alpaca, currentCateogory, value);
    setOption(value);

    setAlpaca(newAlpaca);
  };

  return (
    <main className="flex-grow container mx-auto">
      <div className="px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <SelectCategory
              currentCategory={currentCateogory}
              setCategory={setCurrentCategory}
            />
          </div>

          <div>
            <Selectoption
              currentCategory={currentCateogory}
              setOption={handleUpdateAlpaca}
            />
          </div>

          <div className="alpaca-container">
            <DisplayAlpaca alpaca={alpaca} />
          </div>

          <div>
            {" "}
            <IconButton
              sx={{ m: { xs: 0.5, md: 1 } }}
              variant="contained"
              aria-label="Generate Random Alpaca"
              onClick={randomAlpaca}
            >
              <ShuffleOnIcon />
            </IconButton>
            <IconButton
              sx={{ m: { xs: 0.5, md: 1 } }}
              variant="contained"
              aria-label="Download Alpaca Image"
              onClick={downloadAlpaca}
            >
              <DownloadIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
}

export default App;
