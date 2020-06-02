/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class CartItem extends Component {

  UNSEFT_componentWillReceiveProps(nextProps)
  {

  }


  render() {
    function formatPrice(n, currency, fix = 1) {
      if (!currency) currency = "";
      if (!n || n === 0) return 0 + ` ${currency}`;
      return (
        n.toFixed(fix).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + " " + currency
      );
    }

    var { cart } = this.props;
    console.log(cart)
    return (
      <tr>
        <td style={{ verticalAlign: "middle" }}>
          <img
            src={"http://dboi.info" + cart.avatar}
            alt=""
            className="img-fluid z-depth-0"
            style={{ width: "100px", height: "100px" }}
          />
        </td>
        <td style={{ verticalAlign: "middle" }}>
          <h5>
            <strong>{cart.name}</strong>
          </h5>
        </td>
        <td style={{ verticalAlign: "middle" }}>{formatPrice(cart.price)}đ</td>
        <td
          className="center-on-small-only"
          style={{ verticalAlign: "middle" }}
        >
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => this.changSoLuong(cart.id, cart.quantity - 1)}
            >
              <a style={{ cursor: "pointer" }}>—</a>
            </label>
            <span
              className="qty"
              style={{
                textAlign: "center",
                width: "30px",
                height: "28px",
                backgroundColor: "white",
              }}
            >
              {cart.quantity}
            </span>
            <label
              className="btn btn-sm 
                        btn-rounded waves-effect waves-light"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => this.changSoLuong(cart.id, cart.quantity + 1)}
            >
              <a style={{ cursor: "pointer" }}>+</a>
            </label>
          </div>
        </td>
        <td style={{ verticalAlign: "middle" }}>
          {formatPrice(this.total(cart.price, cart.quantity))}đ
        </td>
        <td style={{ verticalAlign: "middle" }}>
          <button
            type="button"
            className="btn btn-sm waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => this._onDelete(cart.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  changSoLuong = (id, quantity) => {
    var updatequantity={
      item:{
        product_id: id,
        quantity: quantity
      }
    }
    console.log(id,quantity)
    if (quantity <= 0) {
      this.props.onUpdateSoLuong(id, (quantity = 1));
    } else {
      this.props.onUpdateSoLuong(updatequantity);
    }
  };

  _onDelete = (id) => {
    this.props.onDeleteCart(id);
  };

  total = (price, sl) => {
    return price * sl;
  };
}

export default CartItem;
