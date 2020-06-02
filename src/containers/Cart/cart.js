import React, { Component } from "react";
import CartItem from "./cartItem";
import { connect } from "react-redux";

class Cart extends Component {

  componentDidMount(){
    this.props.onGetCartData();
  }

  render() {
    console.log(this.props.cart)
    const itemCart = () => {
      var cart= null;
      this.props.cart ? cart = this.props.cart : cart = []
      return cart;
    }
    return (
      <section
        className="section"
        style={{ paddingBottom: "50px", paddingTop: "50px", marginTop: "50px" }}
      >
        <div className="container">
          <div className="">
            <table
              className="table product-table"
              style={{
                borderRadius: "5px solid white",
                backgroundColor: "white",
              }}
            >
              <thead>
                <tr style={{backgroundColor: '#0c713d', color: 'white'}}>
                  <th style={{ paddingLeft: "30px" }}>Hình ảnh</th>
                  <th>Sản Phẩm</th>
                  <th style={{ paddingLeft: "20px" }}>Giá</th>
                  <th style={{ paddingLeft: "20px" }}>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {itemCart().map((e, index) => {
                  return (
                    <CartItem
                      key={index}
                      cart={e}
                      onDeleteCart={this.onDeleteCart}
                      onUpdateSoLuong={this.onUpdateSoLuong}
                    />
                  );
                })}
               
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  onDeleteCart = (id) => {
    this.props.onDeleteCart(id);
  };

  onUpdateSoLuong = (updatequantity) => {
    this.props.onUpdateSoLuong(updatequantity);
  };
}

const mapStatetoProps = (state) => {
  return {
    cart: state.cart.data,
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onDeleteCart: (id) => dispatch({ type: "DELETE_CART_ITEMS_REQUEST", id: id }),
    onUpdateSoLuong: (updatequantity) =>
      dispatch({
        type: "UPDATE_QUANTITY_CART_REQUEST",
        updatequantity:updatequantity
      }),
    onGetCartData:() => dispatch({type: 'GET_CART_ITEMS_REQUEST'})
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
