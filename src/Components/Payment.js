import React, { Component } from "react";
import { Form } from "antd";
import { Row, Col } from "react-bootstrap";

class Payment extends Component {
  render() {
    return (
      <div id="paymentPanel">
        <Form>
          <Form.Item label="Wallet Payment">
            <label> Rs.40/=</label>
          </Form.Item>

          <Form.Item label="Available balance Wallet">
            <label> Rs.50/=</label>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Payment;
