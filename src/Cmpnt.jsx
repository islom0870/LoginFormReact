import React, { Component } from "react";
import { useState } from "react";

export default class Cmpnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  Login = () => {
    this.setState({
      login: true,
    });
  };
  Reg = () => {
    this.setState({
      login: false,
    });
  };
  render() {
    return (
      <>
        <div className="card">
          {this.state.login ? <p>LOGIN</p> : <p>SIGN UP</p>}
          <div className="form">
            <form action="">
              <label htmlFor="e">Email</label> <br />
              <input type="text" name="" id="e" /> <br />
              <label htmlFor="p">Password</label> <br />
              <input type="password" name="" id="p" />
            </form>
          </div>
          {this.state.login ? (
            <div className="check">
              <input type="checkbox" name="  " id="check" />
              <label htmlFor="check">Remember me?</label>
            </div>
          ) : (
            <></>
          )}

          {this.state.login ? <button>LOGIN</button> : <button>SIGN UP</button>}
          {this.state.login ? <span>Forgot Password?</span> : <></>}

          <div className="OR">
            <div className="line1"></div>
            <div className="or">OR</div>
            <div className="line2"></div>
          </div>
          <div className="social">
            <i className="bi bi-google"></i>
            <i className="bi bi-facebook"></i>

            <i className="bi bi-linkedin"></i>
          </div>
          {this.state.login ? (
            <p className="bottom">
              Need an account? <u onClick={this.Reg}>SIGN UP</u>
            </p>
          ) : (
            <p className="bottom">
              Are you already a user? <u onClick={this.Login}>LOGIN</u>
            </p>
          )}
        </div>

        <PlusMinus />
      </>
    );
  }
}
function PlusMinus() {
  let [count, setCount] = useState(0);
  var active = ``;
  var active1 = "";
  if (count <= 0) {
    count = 0;
    active = "active";
  } else if (count >= 10) {
    count = 10;
    active1 = "active1";
  }
  var Minus = () => {
    setCount(count - 1);
  };
  var Plus = () => {
    setCount(count + 1);
  };
  return (
    <div className="secondTask">
      <div className="plusMinus">
        <button className={`mp ${active}`} onClick={Minus}>
          -
        </button>

        <div className="number">{count}</div>
        <button className={`mp ${active1}`} onClick={Plus}>
          +
        </button>
      </div>
    </div>
  );
}
