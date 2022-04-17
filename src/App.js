import React from 'react';
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import  CategoryDropDown from "./components/CategoryDropDown";
import Styles from "./data";

function App() {
  return (
    <Container fluid>
      <CategoryDropDown category={Styles.Background} />
      <CategoryDropDown category={Styles.Ears} />
      <CategoryDropDown category={Styles.Eyes} />
      <CategoryDropDown category={Styles.Hair} />
      <CategoryDropDown category={Styles.Mouth} />
      <CategoryDropDown category={Styles.Nose} />
      <CategoryDropDown category={Styles.Neck} />
      <CategoryDropDown category={Styles.Leg} />
      <CategoryDropDown category={Styles.Accessories} />
    </Container>
  );
}

export default App;
