import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Wallet from "./Components/Wallet";
import { Row, Col } from "react-bootstrap";
import MealCurry from "./Components/MealCurry";
import InfiniteListExample from "./Components/InfiniteListExample";
import OrderMeal from "./Components/OrderMeal";

function App() {
  const test = 10;
  return (
    <div className="Container">
      <Row>
        <InfiniteListExample />
      </Row>
    </div>
  );
}

export default App;
