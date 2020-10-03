import React, { Component } from "react";

export default class BT3Sidebar extends Component {
  render() {
    return (
      <div>
        <h1>Shop Name</h1>
        <ul style={{ listStyle: "none", cursor: "pointer" }}>
          <li className="p-2 border border-primary">Category 1</li>
          <li className="p-2 border border-primary">Category 2</li>
          <li className="p-2 border border-primary">Category 3</li>
        </ul>
      </div>
    );
  }
}
