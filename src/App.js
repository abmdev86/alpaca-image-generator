import React from 'react';
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import {CategoryButton} from "./components/ButtonComponents";


function App() {
  return (
    <Container fluid>
      <CategoryButton categoryName="Background"/>
    </Container>
  );
}

export default App;
