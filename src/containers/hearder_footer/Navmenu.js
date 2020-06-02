/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navmenu extends Component {

  componentDidMount() {
    this.props.getData();
    this.props.onGetCartData();
  }

  logIn(){
    var logIn = null;
    if(this.props.isLoginMember)
    {
      logIn=true;
    }else
    {
      logIn=false;
    }
    return logIn;
  }

  _onLogOut = () =>{
      this.props.logOutMember();
  }

  render() {
    const { categories,cart } = this.props;
    const {memberName} = this.props;
    console.log(cart)
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
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item dropdown ml-3">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sản phẩm
              </Link>
              <div
                className="dropdown-menu dropdwn-content mt-3"
                aria-labelledby="navbarDropdown"
              >
                {!!categories &&
                  categories.map((cate, index) => {
                    return (
                      <Link
                        className="dropdown-item"
                        key={index}
                        to={`/foodTable/${cate.id}`}
                      >
                        {cate.name}
                      </Link>
                    );
                  })}
              </div>
            </li>

            <li className="nav-item ml-3">
              <Link className="nav-link" to="/cart">
                Giỏ hàng
              </Link>
            </li>
            <li className="nav-item ml-3">
              <Link className="nav-link" to="/history">
                History
              </Link>
            </li>
            <li className="nav-item ml-3">
              <Link className="nav-link admin" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        {this.logIn() ? (
          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user"></i>
              {memberName}
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="triggerId"
            >
              <Link to="" className="dropdown-item">
                Thông tin cá nhân
              </Link>
              <a className="dropdown-item" onClick={this._onLogOut} style={{cursor: "pointer"}}>
                Log Out
              </a>
            </div>
          </div>
        ) : (
          <div className="mr-2">
            <i className="fas fa-user"></i>
            <Link className="login" to="/danhnhap/login">
              Đăng nhập
            </Link>
          </div>
        )}
        <Link to="/cart" className="form-inline my-2 my-lg-0 navbar-cart">
          <label>
            <i className="fas fa-cart-plus navCartItem"></i> Cart
          </label>
           <span className="numberCart">{this._showQuantily(cart)}</span>
        </Link>
      </nav>
    );
  }

  _showQuantily = (cart) =>{
    var totalQuanlity =  null;
    if(cart)
    {
    if(cart.length <=0 )
    {
      totalQuanlity= 0;
    }
    else
    {
      for( var i = 0; i < cart.length;i++)
      {
        totalQuanlity+=cart[i].quantity
      }
    }
      return parseInt(totalQuanlity);
    }
  }
  }
   

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    memberName: state.loginMember.memberName,
    isLoginMember: state.loginMember.isLoginMember,
    cart: state.cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),
    logOutMember: () => dispatch({type: "LOGOUT_MEMBER"}),
    onGetCartData:() => dispatch({type: 'GET_CART_ITEMS_REQUEST'})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navmenu);
