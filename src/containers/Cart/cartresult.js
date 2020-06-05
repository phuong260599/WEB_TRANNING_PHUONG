import React, { Component } from "react";

class CartResult extends Component {

  _onPostOrders= (cart) =>{
    var orders = {
      item: cart
    }
    this.props.postOrders(orders)
  }

  render() {
    var { cart } = this.props;

    function formatPrice(n, currency, fix = 1) {
      if (!currency) currency = "";
      if (!n || n === 0) return 0 + ` ${currency}`;
      return (
        n.toFixed(fix).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + " " + currency
      );
    }
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong style={{ color: "green" }}>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{formatPrice(this.showTotal(cart))}đ</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn waves-effect waves-light mr-2"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Hủy
          </button>
          <button
            type="button"
            className="btn waves-effect waves-light"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={this._onPostOrders(cart)}
          >
            Thanh toán
          </button>
        </td>
      </tr>
    );
  }

  showTotal = (cart) => {
    var Total = 0;
    if(cart)
    {
      for (var i = 0; i < cart.length; i++) {
        Total += cart[i].price * cart[i].quantity;
      }
      return Total;
    }
  };
}

export default CartResult;
