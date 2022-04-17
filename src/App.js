import React from "react";
import { useEffect } from "react";
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import CategoryDropDown from "./components/CategoryDropDown";
import Styles from "./data";
import {
  GetCategoryObjects,
  GetCategoryObject,
  GetStyleObjects,
  GetStyleObjectsFromCategory,
  seedIDs,
} from "./Utils/UtilityFunctions";

function App() {
  const categories = GetCategoryObjects();
  const categoryButtons = categories.map((cat) => {
    return <CategoryDropDown category={cat} />;
  });

  return (
    <Container fluid>
      {categoryButtons}
      <Container fluid>{/* {TODO: insert image component} */}</Container>
    </Container>
  );
}

export default App;
