import React from 'react';
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import  CategoryDropDown from "./components/CategoryDropDown";
import Styles from "./data";

function App() {
  return (
    <Container fluid>
      <CategoryDropDown category={Styles.Background}/>
    </Container>
  );
}

export default App;
