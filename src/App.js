import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Wallet from "./Components/Wallet";
import { Row, Col } from "react-bootstrap";
import MealCurry from "./Components/MealCurry";
import ScrollPanel from "./Components/ScrollPanel";
import MainMeal from "./Components/MainMeal";
import BakeryFoods from "./Components/BakeryFoods";

function App() {
  const test = 10;
  return (
    <div>
      <Row>
        <Col>
          <Wallet />
        </Col>

        <Col>
          <BakeryFoods />
        </Col>
      </Row>
      <Row>
        <BakeryFoods />
      </Row>
    </div>
  );
}

export default App;
