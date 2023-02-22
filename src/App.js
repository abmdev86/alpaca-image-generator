import { useEffect, useState } from "react";
import Alpaca from "./components/Alpaca";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import mergeImages from "merge-images";
import React from "react";
import CategorySelect from "./components/CategorySelect";

import UserSelectionContext, {
  UserSelections,
} from "./contexts/UserSelectionContext";
import OptionsList from "./components/OptionsList";
import OptionsContext from "./contexts/OptionsContext";
import AvailableOptions from "./data";
import { Container } from "@mui/material";

function App() {
  const [userSelections, setUserSelections] = useState(UserSelections);
  const [options, setOptions] = useState({
    value: AvailableOptions[userSelections.currentCategoryName],
    currentCategory: userSelections.currentCategoryName,
  });
  const [alpacaImageArray, setAlpacaImageArray] = useState([]);

  const getCurrentImageSources = () => {
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

    return values;
  };
  useEffect(() => {
    console.log(userSelections);
  }, [userSelections]);
  useEffect(() => {
    console.log(alpacaImageArray);
  }, [alpacaImageArray]);

  function randomAlpaca() {}
  // function downloadAlpaca() {
  //   mergeImages(alpacaImg).then((b64) => {
  //     var a = document.createElement("a");
  //     a.href = b64;
  //     a.download = "NewAlpaca.png";
  //     a.click();
  //   });
  // }

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
        <Container maxWidth="sm">
          <h1>Alpaca Generator</h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={8}>
                <div className="alpaca-container">
                  <Alpaca imageArray={getCurrentImageSources()} />
                </div>
              </Grid>
              <Grid item xs={4}>
                <CategorySelect />
                <OptionsList
                  currentOptions={options.value}
                  categoryName={options.currentCategory}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </UserSelectionContext.Provider>
    </OptionsContext.Provider>
  );
}

export default App;
