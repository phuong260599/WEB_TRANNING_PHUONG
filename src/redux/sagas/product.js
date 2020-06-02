import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import { PRODUCT_GET_REQUEST, PRODUCT_GET_SUCCESS } from "./../types/product";

//get
function* getData({ id }) {
  console.log(id)
  const res = yield axios.get("http://dboi.info/api/categories/" + id);
  if (res.status === 200 && res.data.code === 200) {
    const { data } = res.data;
    console.log(data)
    yield put({ type: PRODUCT_GET_SUCCESS, payload: data });
  }
}

function* getIdProduct() {
  yield takeLatest(PRODUCT_GET_REQUEST, getData);
}

export default function* () {
  yield all([getIdProduct()]);
}
