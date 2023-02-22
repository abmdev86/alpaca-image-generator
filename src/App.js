import { useEffect, useState } from "react";
import Alpaca from "./components/Alpaca";
import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import mergeImages from "merge-images";
import React from "react";
import CategorySelect from "./components/CategorySelect";

import UserSelectionContext, {
  UserSelections,
} from "./contexts/UserSelectionContext";
import OptionsList from "./components/OptionsList";
import OptionsContext from "./contexts/OptionsContext";
import AvailableOptions from "./data";
import { Container, Typography } from "@mui/material";

function App() {
  const [userSelections, setUserSelections] = useState(UserSelections);
  const [options, setOptions] = useState({
    value: AvailableOptions[userSelections.currentCategoryName],
    currentCategory: userSelections.currentCategoryName,
  });

  const [alpcaImage, setAlpacaImage] = useState([userSelections]);

  useEffect(() => {
    function getCurrentImageSources() {
      let values = [
        userSelections.backgrounds,
        userSelections.ears,
        userSelections.legs,
        userSelections.necks,
        userSelections.noses,
        userSelections.hairstyles,
        userSelections.mouths,
        userSelections.eyes,
        userSelections.accessories,
      ];
      if (alpcaImage === values) return;
      // setAlpacaImage(values);
      return values;
    }

    const images = getCurrentImageSources();
    setAlpacaImage(images);
  }, [userSelections]);

  function randomAlpaca() {
    const options = { ...AvailableOptions };
    const newImageArray = [];
    Object.values(options).forEach((value) => {
      const randomValue = value.length;
      const randomIndex = Math.floor(Math.random() * randomValue);
      newImageArray.push(value[randomIndex].img);
    });

    setAlpacaImage(newImageArray);
  }
  function downloadAlpaca() {
    mergeImages(alpcaImage).then((b64) => {
      var a = document.createElement("a");
      a.href = b64;
      a.download = "NewAlpaca.png";
      a.click();
    });
  }

  return (
    <OptionsContext.Provider
      value={{
        value: options,
        currentCategory: "backgrounds",
        setOptions,
      }}
    >
      <UserSelectionContext.Provider
        value={{ ...userSelections, setUserSelections }}
      >
        <Container maxWidth="xl">
          <Typography variant="h1" textAlign="center">
            Alpaca Generator
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={4}>
              <CategorySelect />
            </Grid>
            <Grid item xs={8}>
              <div className="alpaca-container">
                <Alpaca imageArray={alpcaImage} />
              </div>
            </Grid>

            <Grid item xs={12} sx={{ p: 2 }}>
              <OptionsList
                currentOptions={options.value}
                categoryName={options.currentCategory}
              />
            </Grid>
          </Grid>
        </Container>
      </UserSelectionContext.Provider>
    </OptionsContext.Provider>
  );
}

export default App;
