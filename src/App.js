import React from "react";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import mergeImages from "merge-images";

import SelectCategory from "./components/SelectCategory";
import Categories from "./data/content";
import CategoryOptionList from "./components/CategoryOptionList";
import Alpaca from "./components/Alpaca";

const defaultAlpaca = {
  background: Categories[0].options[0],
  accessory: Categories[1].options[0],
  ears: Categories[2].options[0],
  eyes: Categories[3].options[0],
  hair: Categories[4].options[0],
  legs: Categories[5].options[0],
  mouth: Categories[6].options[0],
  neck: Categories[7].options[0],
  nose: Categories[8].options[0],
};
function App() {
  const [currentCateogory, setCurrentCategory] = useState(Categories[0]);
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
            <CategoryOptionList
              categoryName={currentCateogory.name}
              values={currentCateogory.options}
              alpaca={alpaca}
              setCurrentAlpacaSelection={setAlpaca}
            />
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
