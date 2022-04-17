import React, { useEffect, useState } from "react";
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import CategoryDropDown from "./components/CategoryDropDown";
import {
  getCategoryObjects,
  setObjectsId,
  getGeneratedUUID,
  getStyleObjectFromCategory,
} from "./Utils/UtilityFunctions";

function App() {
  // const [idSet, setIdSet] = useState(false);
  const categories = getCategoryObjects();

  useEffect(() => {
    setObjectsId();

    console.log(getStyleObjectFromCategory(categories[2]));

    console.log(getStyleObjectFromCategory(categories[1]));
  }, []);

  const categoryButtons = categories.map((cat) => {
    return <CategoryDropDown key={getGeneratedUUID()} category={cat} />;
  });

  return (
    <Container fluid>
      {categoryButtons}
      <Container fluid>{/* {TODO: insert image component} */}</Container>
    </Container>
  );
}

export default App;
