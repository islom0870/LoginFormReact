import React, { Component } from "react";
import { act } from "react-dom/test-utils";

export default class Secondtask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raqam: 0,
      active: "",
      active1: "",
    };
  }

  Minus = () => {
    if (this.state.raqam > 0) {
      this.setState({ raqam: this.state.raqam - 1 });
      this.setState({ active: "" });
      this.setState({ active1: "" });
    } else {
      this.setState({ raqam: 0 });
      this.setState({ active: "active" });
    }
  };
  Plus = () => {
    if (this.state.raqam < 10) {
      this.setState({ raqam: this.state.raqam + 1 });
      this.setState({ active1: "" });
      this.setState({ active: "" });
    } else if (this.state.raqam === 10) {
      this.setState({ raqam: 10 });
      this.setState({ active1: "active1" });
    }
  };
  render() {
    return (
      <div className="secondTask">
        <div className="plusMinus">
          <button className={`mp ${this.state.active}`} onClick={this.Minus}>
            -
          </button>

          <div className="number">{this.state.raqam}</div>
          <button className={`mp ${this.state.active1}`} onClick={this.Plus}>
            +
          </button>
        </div>
      </div>
    );
  }
}
