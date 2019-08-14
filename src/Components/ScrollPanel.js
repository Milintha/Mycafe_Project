import React, { Component } from "react";
import "./ScrollPanel.css";
import MealCurry from "./MealCurry";
import "react-virtualized/styles.css";
import List from "react-virtualized/dist/commonjs/List";

const list = [
  <MealCurry />,
  <MealCurry />,
  <MealCurry />,
  <MealCurry />,
  <MealCurry />,
  <MealCurry />
];
function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style // Style object to be applied to row (to position it)
}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}
class ScrollPanel extends Component {
  render() {
    return (
      <div>
        <List
          width={700}
          height={550}
          rowCount={list.length}
          rowHeight={130}
          rowRenderer={rowRenderer}
        />
      </div>
    );
  }
}

export default ScrollPanel;
