import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  PRODUCT_GET_ADMIN_REQUEST,
  PRODUCT_GET_ADMIN_SUCCESS,
  PRODUCT_SUBMIT_SUCCESS,
  PRODUCT_SUBMIT_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_GET_EDIT_DATA_SUCCESS,
  PRODUCT_GET_EDIT_DATA_REQUEST,
  PRODUCT_UPDATE_EDIT_DATA_SUCCESS,
  PRODUCT_UPDATE_EDIT_DATA_REQUEST,
} from "./../types/product";

// lấy tất cả data từ products
function* getDataAdmin() {
  const res = yield axios.get("http://dboi.info/api/products");
  if (res.status === 200) {
    const { data } = res.data;
    yield put({ type: PRODUCT_GET_ADMIN_SUCCESS, payload: data });
  }
}

function* getListProduct() {
  yield takeLatest(PRODUCT_GET_ADMIN_REQUEST, getDataAdmin);
}

//submit
function* getDatatoSubmit({ cate }) {
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const res = yield axios.post("http://dboi.info/api/products", cate);
  if (res.status === 200 && res.data.code === 200) {
    const { data } = res.data;
    yield put({ type: PRODUCT_SUBMIT_SUCCESS, payload: data });
  }
}

function* getSubmitProduct() {
  yield takeLatest(PRODUCT_SUBMIT_REQUEST, getDatatoSubmit);
}

//delete
function* deleteProducts({ id }) {
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const res = yield axios.delete(`http://dboi.info/api/products/${id}`);
  if (res.status === 200 && res.data.code === 200) {
    yield put({ type: PRODUCT_DELETE_SUCCESS, payload: id });
  }
}

function* deleteIdProducts() {
  yield takeLatest(PRODUCT_DELETE_REQUEST, deleteProducts);
}

// GET EDIT PRODUCT DATA

function* getEditData({ id }) {
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const res = yield axios.get(`http://dboi.info/api/products/` + id);
  if (res.status === 200) {
    const { data } = res.data;
    yield put({ type: PRODUCT_GET_EDIT_DATA_SUCCESS, payload: data });
  }
}

function* getEditProduct() {
  yield takeLatest(PRODUCT_GET_EDIT_DATA_REQUEST, getEditData);
}

// UPDATE EDIT DATA
function* updateEditData({ data, id }) {
  try{
  var dataAdmin = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = dataAdmin;
  const res = yield axios.put(`http://dboi.info/api/products/${id}`, data);
  if (res.status === 200) {
    const { data } = res.data;
    yield put({ type: PRODUCT_UPDATE_EDIT_DATA_SUCCESS, payload: data });
  }
}
catch(error){
 if(error.response.status)
 {
   localStorage.removeItem("LOGINADMIN")
 } 
}
}

function* updateEditProduct() {
  yield takeLatest(PRODUCT_UPDATE_EDIT_DATA_REQUEST, updateEditData);
}

export default function* () {
  yield all([
    getListProduct(),
    getSubmitProduct(),
    deleteIdProducts(),
    getEditProduct(),
    updateEditProduct(),
  ]);
}
