import React, { Component } from "react";
import "../../../../App.css";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUser: "",
      txtPass: "",
    };
  }

  _onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.getDataLogin({
      email: this.state.txtUser,
      password: this.state.txtPass,
    });
  };

  componentDidMount() {
    if (this.props.isLoginAdmin) {
      this.props.history.push("/admin/quanlymenu");
    } else {
      this.props.history.push("/admin/login");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.isLoginAdmin) {
      this.props.history.push("/admin/quanlymenu");
    }
  }
  render() {
    return (
      <div
        className="container-fluid pt-1"
        style={{ backgroundColor: "#efefef" }}
      >
        <div
          className="container"
          style={{ backgroundColor: "#ffffff", borderRadius: "5px" }}
        >
          <form className="form-DK" onSubmit={this._onSubmit}>
            <h1>ĐĂNG NHẬP </h1>
            <div className="form-row" style={{ justifyContent: "center" }}>
              <div className="form-group col-md-4">
                <label className="leble-Dn1">
                  {" "}
                  Email/Số thẻ <span>(*)</span>
                </label>
                <input
                  name="txtUser"
                  onChange={this._onChange}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Nhập Email/Số thẻ"
                  required
                />
                <label className="mr-sm-2 pt-5 leble-Dn1">
                  Mật khẩu<span>(*)</span>
                </label>
                <input
                  name="txtPass"
                  onChange={this._onChange}
                  type="password"
                  className="form-control mb-2 mr-sm-2"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
            </div>
            <div
              className="form-row"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div className="form-group col-md-4 ">
                <button
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: "#0d713d", color: "White" }}
                >
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginAdmin: state.loginAdmin.isLoginAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataLogin: ({ email, password }) => dispatch({ type: "LOGIN_ADMIN_REQUEST", email: email, password: password, }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
