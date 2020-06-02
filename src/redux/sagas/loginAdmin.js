import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_REQUEST } from "../types/loginAdmin";
import { toast } from 'react-toastify';

function* getDataLogin({ email, password }) {
  const notifyfaile = () => toast.info(
    "Sai tên đăng nhập hoặc mật khẩu",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  
    const notifysucces = () => toast.info(
      "Đăng nhập thành công",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  try {
    const res = yield axios.post("http://dboi.info/api/sign_in", { email: email, password: password, });
    if (res.data.data.user.role === "admin") {
      const { data } = res.data;
      yield put({ type: LOGIN_ADMIN_SUCCESS, payload: data});
      notifysucces()
    } else {
      console.log("Không có quyền truy cập");
    }
  } catch (error) {
    if(error.response.status === 401)
    {
      localStorage.removeItem("LOGINADMIN");
    }
    notifyfaile()
  }
}


function* getLogin() {
  yield takeLatest(LOGIN_ADMIN_REQUEST, getDataLogin);
}

export default function* () {
  yield all([getLogin()]);
}
