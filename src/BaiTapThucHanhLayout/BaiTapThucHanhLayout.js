import React, { Component } from "react";
import BT3Carousel from "./BT3Carousel";
import BT3Content from "./BT3Content";
import BT3Footer from "./BT3Footer";
import BT3header from "./BT3Header";
import BT3ProductList from "./BT3ProductList";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <>
        <BT3header />
        <BT3Content />
        <BT3Footer />
      </>
    );
  }
}
