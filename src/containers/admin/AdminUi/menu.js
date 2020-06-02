import React, { Component } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
class Navadmin extends Component {

  onLogOut = (isLoginAdmin) =>{
    this.props.LogOut(isLoginAdmin)
  }


  render() {
    const {isLoginAdmin} = this.props
    return (
      <nav
        className="navbar navbar-expand-sm fixed-top navbar-light rounded"
        style={{ backgroundColor: "white" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarSupportedContent"
          style={{ fontSize: "18px" }}
        >
          <ul className="navbar-nav">
            <Link className="nav-link" to="/admin/quanlyuser">
              Quản lý User
            </Link>
            <Link className="nav-link" to="/admin/quanlysanpham">
              Quản lý sản phẩm
            </Link>
            <Link className="nav-link" to="/admin/quanlydonhang">
              Quản lý đơn hàng
            </Link>
            <Link className="nav-link" to="/admin/quanlymenu">
              Quản lý menu
            </Link>
            <Link className="nav-link" to="/admin/login">
              Đăng nhập
            </Link>
            <Link className="nav-link" to="/admin/register">
              Đăng ki
            </Link>
            <Link className="nav-link" to="/">
              Client
            </Link>
          </ul>
        </div>
        {isLoginAdmin ? <div className="mr-2">
        <i className="fas fa-sign-out-alt"></i>
      <button className="login" style={{border: 'none',backgroundColor: 'white'}} onClick={() => this.onLogOut(isLoginAdmin)}>LogOut</button>
      </div> : null}
      </nav>
    );
  }
}

const mapStatetoProps = (state) =>{
  return {
    isLoginAdmin: state.loginAdmin.isLoginAdmin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    LogOut: (isLoginAdmin) => dispatch({type: "LOGOUT_ADMIN", isLoginAdmin: isLoginAdmin})
  };
};

export default connect(mapStatetoProps,mapDispatchToProps)(Navadmin);
