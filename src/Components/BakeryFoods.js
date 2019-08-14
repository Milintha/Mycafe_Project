import React, { Component } from "react";
import { List, Avatar } from "antd";
import { Row, Col, PageHeader } from "antd";

const data = [
  {
    title: "Fish Bun",
    price: "Rs.25.00"
  },
  {
    title: "Sasuege Bun",
    price: "Rs.30.00"
  },
  {
    title: "Egg Bun",
    price: "Rs.30.00"
  },
  {
    title: "Pastry",
    price: "Rs.30.00"
  }
];

class BakeryFoods extends Component {
  render() {
    return (
      <div id="bakeryMain">
        <Row>
          <PageHeader title="Bakery Foods" subTitle="Sweet foods, Buy now" />
        </Row>
        <Row>
          <List
            itemLayout="horizontal"
            size="small"
            xs={0}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src=".Components/image/bakery.png" />}
                  title={item.title}
                  description={item.price}
                />
              </List.Item>
            )}
          />
        </Row>
      </div>
    );
  }
}

export default BakeryFoods;
