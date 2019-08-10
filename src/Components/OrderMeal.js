import React, { Component } from "react";
import "./OrderMeal.css";
import { Form, Modal, InputNumber, Radio, Button, Col, Row } from "antd";

class OrderMeal extends Component {
  state = {
    modal2Visible: false
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 }
    };

    return (
      <div>
        <Button
          type="primary"
          icon="shopping-cart"
          onClick={() => this.setModal2Visible(true)}
        >
          Order Now
        </Button>

        <Modal
          title="Order Rice"
          okText="Order"
          okButtonProps={{ icon: "like" }}
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <Row>
            <Col span={8}>
              <div id="imagePanel">image</div>
            </Col>

            <Col span={8} offset={8}>
              <div id="pricePanel">
                <h3>Rs.40/=</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Form {...formItemLayout}>
              <Form.Item label="Number of Qty">
                <InputNumber min={1} max={10} defaultValue={1} />
              </Form.Item>

              <Form.Item label="Type">
                <Radio.Group defaultValue={"a"}>
                  <Radio value="a">Parcel</Radio>
                  <Radio value="b">Plate</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Food Preference">
                <Radio.Group defaultValue={"a"}>
                  <Radio value="a">Non Veg</Radio>
                  <Radio value="b">Veg</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Payment">
                <Radio.Group defaultValue={"a"}>
                  <Radio value="a" defaultChecked>
                    Wallet
                  </Radio>
                  <Radio value="b">Card Payment</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <div id="walletpay" style={{ border: "solid 1px" }}>
                  <Row gutter={0}>
                    <Form.Item label="Total Amount:" labelCol={{ span: "14" }}>
                      40.00
                    </Form.Item>
                  </Row>
                  <Row gutter={0}>
                    <Form.Item
                      label="Available Balance:"
                      labelCol={{ span: "14" }}
                    >
                      70.00
                    </Form.Item>
                  </Row>
                </div>
              </Form.Item>
            </Form>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default OrderMeal;
