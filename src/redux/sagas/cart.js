import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  DELETE_CART_ITEMS_SUCCESS,
  DELETE_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_REQUEST,
  ADD_CART_ITEMS_SUCCESS,
  ADD_CART_ITEMS_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_REQUEST,
  // UPDATE_QUANTITY_CART_SUCCESS,
  // UPDATE_QUANTITY_CART_REQUEST,
} from "../types/cart";

//get
function* getCartData() {
  var token = localStorage.getItem("LOGINMEMBER");
  if (token) {
    axios.defaults.headers.common["AUTH-TOKEN"] = token;
    const res = yield axios.get("http://dboi.info/api/items");
    if (res.status === 200) {
      const { data } = res.data;
      yield put({ type: GET_CART_ITEMS_SUCCESS, payload: data });
    }
  }
}

function* getCartDataRequest() {
  yield takeLatest(GET_CART_ITEMS_REQUEST, getCartData);
}

//add
function* addCartItems({ addItem }) {
  var token = localStorage.getItem("LOGINMEMBER");
  if (token) {
    axios.defaults.headers.common["AUTH-TOKEN"] = token;
    const res = yield axios.post("http://dboi.info/api/items", addItem);
    console.log(res);
    if (res.status === 200) {
      const { data } = res.data;
      yield put({ type: ADD_CART_ITEMS_SUCCESS, payload: data });
    }
  }
}

function* addCartItemsRequest() {
  yield takeLatest(ADD_CART_ITEMS_REQUEST, addCartItems);
}

// Post Orders
function* postorders({ cart }) {
  console.log("saga",cart)
  var token = localStorage.getItem("LOGINMEMBER");
  if (token) {
    axios.defaults.headers.common["AUTH-TOKEN"] = token;
    const res = yield axios.post("http://dboi.info/api/orders", cart);
    if (res.status === 200) {
     console.log("Thêm thành công", res.data)
     yield put({ type: POST_ORDER_SUCCESS });
    }
  }
}

function* postordersRequest() {
  yield takeLatest(POST_ORDER_REQUEST, postorders);
}

// delete
function* deleteItems({ id }) {
  var token = localStorage.getItem("LOGINMEMBER");
  axios.defaults.headers.common["AUTH-TOKEN"] = token;
  const res = yield axios.delete(`http://dboi.info/api/items/${id}`);
  if (res.status === 200) {
    yield put({ type: DELETE_CART_ITEMS_SUCCESS, payload: id });
  }
}

function* deleteItemsRequest() {
  yield takeLatest(DELETE_CART_ITEMS_REQUEST, deleteItems);
}

// // update Quantity
// function* updateQuantity({updatequantity}) {
//   var token = localStorage.getItem("LOGINMEMBER");
//   axios.defaults.headers.common["AUTH-TOKEN"] = token;
//   const res = yield axios.put(`http://dboi.info/api/items/${updatequantity.id}`, updatequantity);
//   if (res.status === 200) {
//     const {data} = res.data
//     yield put({ type: UPDATE_QUANTITY_CART_SUCCESS, payload: data });
//   }
// }

// function* updateQuantityRequest() {
//   yield takeLatest(UPDATE_QUANTITY_CART_REQUEST, updateQuantity);
// }

export default function* () {
  yield all([
    postordersRequest(),
    getCartDataRequest(),
    addCartItemsRequest(),
    deleteItemsRequest(),
    // updateQuantityRequest(),
  ]);
}
