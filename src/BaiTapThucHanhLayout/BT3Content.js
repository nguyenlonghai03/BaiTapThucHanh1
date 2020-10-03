import React, { Component } from "react";
import BT3Carousel from "./BT3Carousel";
import BT3ProductList from "./BT3ProductList";
import BT3Sidebar from "./BT3Sidebar";

export default class BT3Content extends Component {
  render() {
    return (
      <div className="row p-4 m-4">
        <div className="col-3 my-4">
          <BT3Sidebar />
        </div>
        <div className="col-9 my-4">
          <BT3Carousel />
          <BT3ProductList />
        </div>
      </div>
    );
  }
}
