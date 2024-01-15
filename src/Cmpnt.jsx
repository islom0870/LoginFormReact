import React, { Component } from "react";

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
    );
  }
}
