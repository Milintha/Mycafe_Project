import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import OrderMeal from "./OrderMeal";
import "./MealCurry.css";

class MealCurry extends Component {
  render() {
    return (
      <div id="mealCurryMain">
        <Row>
          <Col id="imageCol">
            <div id="image">image</div>
          </Col>
          <Col xs={6} id="content">
            <Row>
              <div id="topic">
                <h4>01.Rice</h4>
              </div>
            </Row>
            <Row>
              <div id="curries">
                <h6>Dhal curry,Fish Curry,Carrot</h6>
              </div>
            </Row>
          </Col>
          <Col id="price">
            <Row>
              <h3>Rs.40/=</h3>
            </Row>
            <Row id="order">
              <OrderMeal />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MealCurry;
