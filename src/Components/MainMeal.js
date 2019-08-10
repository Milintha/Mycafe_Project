import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import MealCurry from "./MealCurry";
import { Row, Col } from "react-bootstrap";
import "./MainMeal.css";
import Scrollspy from "react-scrollspy";

class MainMeal extends Component {
  render() {
    return (
      <div id="mainMealContent">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Main Meals</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Other Foods</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>Lakshan</div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default MainMeal;
