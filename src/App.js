import React from 'react';
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import {CategoryButton} from "./components/ButtonComponents";
import Styles from "./data";

function App() {
  return (
    <Container fluid>
      <CategoryButton category={Styles.Background}/>
    </Container>
  );
}

export default App;
