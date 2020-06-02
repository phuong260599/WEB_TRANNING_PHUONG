import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  CATE_GET_REQUEST,
  CATE_GET_SUCCESS,
  CATE_DELETE_REQUEST,
  CATE_DELETE_SUCCESS,
  CATE_SUBMIT_REQUEST,
  CATE_SUBMIT_SUCCESS,
  CATE_GET_EDIT_REQUEST,
  CATE_GET_EDIT_SUCCESS,
  CATE_UPDATE_EDIT_REQUEST,
  CATE_UPDATE_EDIT_SUCCESS,
} from "../types/categories";
import { LOGOUT_ADMIN } from "../types/loginAdmin";

function* getData() {
  const res = yield axios.get("http://dboi.info/api/categories");
  if (res.status === 200) {
    const { data } = res.data;
    yield put({ type: CATE_GET_SUCCESS, payload: data });
  }
}

function* getListCate() {
  yield takeLatest(CATE_GET_REQUEST, getData);
}

//DELETE

function* getDatatoDelete(action) {
  try{
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const { id } = action;
  const res = yield axios.delete(`http://dboi.info/api/categories/${id}`);
  if (res.status === 200) {
    const { id } = action;
    yield put({ type: CATE_DELETE_SUCCESS, payloadid: id });
  }
      
}
catch (erro){
  console.log(erro)
}
}

function* getID() {
  yield takeLatest(CATE_DELETE_REQUEST, getDatatoDelete);
}

//SUBMIT

function* getDatatoSubmit({ cate }) {
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const res = yield axios.post("http://dboi.info/api/categories", {
    name: cate,
  });
  console.log("res", res);
  if (res.status === 200 && res.data.code === 200) {
    const { data } = res.data;
    console.log(data);
    yield put({ type: CATE_SUBMIT_SUCCESS, payload: data }); //
  }
}

function* getListSubmit() {
  yield takeLatest(CATE_SUBMIT_REQUEST, getDatatoSubmit);
}

// GET_EDIT

function* getDatatEdit({ id }) {
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const res = yield axios.get(`http://dboi.info/api/categories/${id}`);
  if (res.status === 200 && res.data.code === 200) {
    const { data } = res.data;
    yield put({ type: CATE_GET_EDIT_SUCCESS, payload: data });
  }
}

function* getDatatoEdit() {
  yield takeLatest(CATE_GET_EDIT_REQUEST, getDatatEdit);
}

// UPDATE_EDIT

function* getUpdate({ data }) {
  try{
    var dataAdmin = localStorage.getItem("LOGINADMIN"); // 
    axios.defaults.headers.common['AUTH-TOKEN'] = dataAdmin;
    const res = yield axios.put(`http://dboi.info/api/categories/${data.id}`, { name: data.name,});
    if (res.status === 200 && res.data.code === 200) {
      const { data } = res.data;
      yield put({ type: CATE_UPDATE_EDIT_SUCCESS, payload: data });
    }
  }
  catch(error)
  {
    console.log(error.response.status)
    if(error.response.status === 401)
    {
      yield put({ type: LOGOUT_ADMIN});
      localStorage.removeItem("LOGINADMIN")
    }
  }
}

function* getUpdateEdit() {
  yield takeLatest(CATE_UPDATE_EDIT_REQUEST, getUpdate);
}

export default function* () {
  yield all([
    getID(),
    getListCate(), //getdata
    getListSubmit(),
    getDatatoEdit(),
    getUpdateEdit(),
  ]);
}
