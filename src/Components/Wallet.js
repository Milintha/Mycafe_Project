import React, { Component } from "react";
import "./Wallet.css";

class Wallet extends Component {
  render() {
    return (
      <div id="walletMain">
        <div id="walletTopic">
          <h2>Your Wallet </h2>
        </div>
        <div id="walletBalance">
          <h4>Rs: 50/=</h4>
        </div>
        <div id="walletRecharge">
          <p>Notice</p>
        </div>
      </div>
    );
  }
}

export default Wallet;
