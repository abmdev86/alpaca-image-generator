import React from 'react';
import { useEffect, useState } from "react";
import { Alpaca, CategoryBtn, StyleBtn } from "./components/AlpacaComponents";
import { styleData } from "./data/style";
import mergeImages from "merge-images";
import Container from "react-bootstrap/Container";
import {CategoryButton} from "./components/ButtonComponents";


function App() {
  return (
    <Container fluid>
      <CategoryButton />
    </Container>
  );
}

export default App;
