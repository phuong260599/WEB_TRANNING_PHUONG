import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { toast } from 'react-toastify';
import { 
  USER_GET_SUCCESS,
  USER_GET_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_REQUEST,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS
} from '../types/user';

function* getData() {
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  const res = yield axios.get("http://dboi.info/api/users");
  if (res.status === 200) {
    const { data } = res.data;
    yield put({ type: USER_GET_SUCCESS, payload: data });
  }
}

function* getListUser() {
  yield takeLatest(USER_GET_REQUEST, getData);
}

// //DELETE

function* deleteUser(action) {
  try{
  var data = localStorage.getItem("LOGINADMIN");
  axios.defaults.headers.common['AUTH-TOKEN'] = data;
  console.log(action)
  const {id} = action;
  const res = yield axios.delete(`http://dboi.info/api/users/${id}`);
  if (res.status === 200) {
    const { id } = action;
    yield put({ type: USER_DELETE_SUCCESS, payloadid: id });
  }
      
}
catch (erro){
  console.log(erro)
}
}

function* deleteUsetRequest() {
  yield takeLatest(USER_DELETE_REQUEST, deleteUser);
}

//ADD
const notifysucces = () => toast.info(
  "Thêm thành công",{
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });


function* addUser({ dataUser }) {
  try{
    var data = localStorage.getItem("LOGINADMIN");
    axios.defaults.headers.common['AUTH-TOKEN'] = data;
    const res = yield axios.post("http://dboi.info/api/users", dataUser);
    console.log(res)
    if (res.status === 200) {
      notifysucces();
      const { data } = res.data;
      yield put({ type: USER_ADD_SUCCESS, payload: data });
    }
  }
  catch(error)
  {
    console.log("error")
  }
 
}

function* addUserRequest() {
  yield takeLatest(USER_ADD_REQUEST, addUser);
}

// // GET_EDIT

// function* getDatatEdit({ id }) {
//   var data = localStorage.getItem("LOGINADMIN");
//   axios.defaults.headers.common['AUTH-TOKEN'] = data;
//   const res = yield axios.get(`http://dboi.info/api/categories/${id}`);
//   if (res.status === 200 && res.data.code === 200) {
//     const { data } = res.data;
//     yield put({ type: CATE_GET_EDIT_SUCCESS, payload: data });
//   }
// }

// function* getDatatoEdit() {
//   yield takeLatest(CATE_GET_EDIT_REQUEST, getDatatEdit);
// }

// // UPDATE_EDIT

// function* getUpdate({ data }) {
//   try{
//     var dataAdmin = localStorage.getItem("LOGINADMIN"); // 
//     axios.defaults.headers.common['AUTH-TOKEN'] = dataAdmin;
//     const res = yield axios.put(`http://dboi.info/api/categories/${data.id}`, { name: data.name,});
//     if (res.status === 200 && res.data.code === 200) {
//       const { data } = res.data;
//       yield put({ type: CATE_UPDATE_EDIT_SUCCESS, payload: data });
//     }
//   }
//   catch(error)
//   {
//     console.log(error.response.status)
//     if(error.response.status === 401)
//     {
//       yield put({ type: LOGOUT_ADMIN});
//       localStorage.removeItem("LOGINADMIN")
//     }
//   }
// }

// function* getUpdateEdit() {
//   yield takeLatest(CATE_UPDATE_EDIT_REQUEST, getUpdate);
// }

export default function* () {
  yield all([
    deleteUsetRequest(),
    getListUser(),
    addUserRequest(),
    // getDatatoEdit(),
    // getUpdateEdit(),
  ]);
}
