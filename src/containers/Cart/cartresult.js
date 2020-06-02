import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartResult extends Component {
  render() {
    var { cartresult } = this.props;

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
            <strong>{formatPrice(this.showTotal(cartresult))}đ</strong>
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
          <Link
            to="/bill"
            type="button"
            className="btn waves-effect waves-light"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Thanh toán
          </Link>
        </td>
      </tr>
    );
  }

  showTotal = (cart) => {
    var Total = 0;
    for (var i = 0; i < cart.length; i++) {
      Total += cart[i].product.price * cart[i].soluong;
    }
    return Total;
  };
}

export default CartResult;
