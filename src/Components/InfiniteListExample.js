import React, { Component } from "react";
import "./InfiniteListExample.css";
import MealCurry from "./MealCurry";
import { Col, Row } from "react-bootstrap";
import { Affix, Button } from "antd";

class InfiniteListExample extends Component {
  render() {
    return (
      <div
        className="scrollable-container"
        ref={node => {
          this.container = node;
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
    );
  }
}

export default InfiniteListExample;
