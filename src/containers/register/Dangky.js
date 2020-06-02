/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class RegisterMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFullName: "",
      txtEmail: "",
      txtPhone: "",
      txtBirthDate: "",
      txtPass: "",
      txtUserName: "",
    };
  }

  _onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  _onSubmit = (e) => {
    e.preventDefault();
    var dataMember = {
      user: {
        email: this.state.txtEmail,
        phone: this.state.txtPhone,
        user_name: this.state.txtUserName,
        full_name: this.state.txtFullName,
        birthday: this.state.txtBirthDate,
        password: this.state.txtPass,
      },
    };

    this.props.addMember(dataMember);
    this.props.history.goBack();
  };

  render() {
    const {
      txtPhone,
      txtFullName,
      txtEmail,
      txtBirthDate,
      txtPass,
      txtUserName,
    } = this.state;
    return (
      <div
        className="container-fluid pt-1"
        style={{
          backgroundColor: "#efefef",
          marginTop: "70px",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            marginTop: "20px",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
        >
          <form className="form-DK" onSubmit={this._onSubmit}>
            <h1>Thông tin khách hàng</h1>
            <div className="form-row" style={{ justifyContent: "center" }}>
              <div className="form-group col-md-4">
                <label className="la">
                  Email <span>(*)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtEmail"
                  value={txtEmail}
                  onChange={this._onChange}
                />
              </div>

              <div className="form-group col-md-4">
                <label className="la">
                  Họ và Tên<span>(*)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtFullName"
                  value={txtFullName}
                  onChange={this._onChange}
                />
              </div>
            </div>
            <div className="form-row" style={{ justifyContent: "center" }}>
              <div className="form-group col-md-4">
                <label className="la">
                  Ngày Sinh<span>(*)</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="txtBirthDate"
                  value={txtBirthDate}
                  onChange={this._onChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label className="la">
                  Tên người dùng<span>(*)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtUserName"
                  value={txtUserName}
                  onChange={this._onChange}
                />
              </div>
            </div>
            <div className="form-row" style={{ justifyContent: "center" }}>
              <div className="form-group col-md-4">
                <label className="la">
                  Số điện thoại <span>(*)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtPhone"
                  value={txtPhone}
                  onChange={this._onChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label className="la">
                  Mật khẩu<span>(*)</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPass"
                  value={txtPass}
                  onChange={this._onChange}
                />
              </div>
            </div>
            <div className="form-row" style={{ justifyContent: "center" }}>
              <button
                className="btn mr-2"
                role="button"
                style={{ backgroundColor: "#FF9900", color: "white" }}
                type="submit"
              >
                Đăng kí
              </button>
              <Link to="/danhnhap/login" className="btn btn-danger">
                Hủy bỏ
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {};
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addMember: (dataMember) =>
      dispatch({ type: "REGISTER_MEMBER_REQUEST", dataMember: dataMember }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterMember);
