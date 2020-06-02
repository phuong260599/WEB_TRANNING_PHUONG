import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LoginMember extends Component {
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
    console.log(this.state);
    this.props.loginMember({
      email: this.state.txtUser,
      password: this.state.txtPass,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.isLoginMember) {
      this.props.history.goBack();
    }
  }
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#efefef",
          paddingBottom: "20px",
          paddingTop: "50px",
        }}
      >
        <div
          className="container"
          style={{ backgroundColor: "#ffffff", borderRadius: "5px",paddingBottom: '10px' }}
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
            <div className="row"  style={{ textAlign: "center", justifyContent: "center" }}>
              <div className="col">
              <Link to="/dangky" style={{ textAlign: "center",alignItems: 'center' }}>
              <u>Tạo tài khoản mới</u>
            </Link>
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
    isLoginMember: state.loginMember.isLoginMember,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginMember: ({ email, password }) =>
      dispatch({
        type: "LOGIN_MEMBER_REQUEST",
        email: email,
        password: password,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginMember);
