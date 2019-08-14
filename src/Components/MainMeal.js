import React, { Component } from "react";
import "./MainMeal.css";
import ScrollPanel from "./ScrollPanel";
import { Row, Col } from "antd";

class MainMeal extends Component {
  render() {
    return (
      <div id="mainMealContent">
        <Row>
          <Col>
            <Row>
              <div id="mealTime">
                <h4>Breakfast Menu</h4>
              </div>
              <div>
                <ScrollPanel />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainMeal;
