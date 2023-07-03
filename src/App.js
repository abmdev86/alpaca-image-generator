import React from "react";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import mergeImages from "merge-images";

import SelectCategory from "./components/SelectCategory";

import CategoryOptionList from "./components/CategoryOptionList";
import Alpaca from "./components/Alpaca";
import Categories from "./data";
import { getAllCategories } from "./data/helpers";
import Selectoption from "./components/SelectOption";

const defaultAlpaca = {
  background: Categories.Backgrounds[0].src,
  accessory: Categories.Accessories[0].src,
  ears: Categories.Ears[0].src,
  eyes: Categories.Eyes[0].src,
  hair: Categories.Hair[0].src,
  legs: Categories.Legs[0].src,
  mouth: Categories.Mouths[0].src,
  neck: Categories.Necks[0].src,
  nose: Categories.Noses[0].src,
};
function App() {
  const [currentCateogory, setCurrentCategory] = useState(
    getAllCategories()[0]
  );
  // const [alpcaImage, setAlpacaImage] = useState([]);
  const [alpaca, setAlpaca] = useState(defaultAlpaca);

  function randomAlpaca() {
    const options = { ...Categories };
    const newImageArray = [];
    Object.values(options).forEach((value) => {
      const randomValue = value.length;
      const randomIndex = Math.floor(Math.random() * randomValue);
      newImageArray.push(value[randomIndex].img);
    });

    // setAlpacaImage(newImageArray);
  }
  function downloadAlpaca() {
    const alpacaArray = [
      alpaca.background,
      alpaca.ears,
      alpaca.neck,
      alpaca.hair,
      alpaca.accessory,
      alpaca.nose,
      alpaca.eyes,
      alpaca.mouth,
      alpaca.legs,
    ];
    mergeImages(alpacaArray).then((b64) => {
      var a = document.createElement("a");
      a.href = b64;
      a.download = "NewAlpaca.png";
      a.click();
    });
  }

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
            <Selectoption currentCategory={currentCateogory} />
          </div>

          <div className="alpaca-container">
            <Alpaca
              imageArray={[
                alpaca.background,
                alpaca.ears,
                alpaca.neck,
                alpaca.hair,
                alpaca.accessory,
                alpaca.nose,
                alpaca.eyes,
                alpaca.mouth,
                alpaca.legs,
              ]}
            />
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
    </main>
  );
}

export default App;
