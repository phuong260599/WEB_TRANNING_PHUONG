import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { toast } from 'react-toastify';
import { LOGIN_MEMBER_SUCCESS, LOGIN_MEMBER_REQUEST,RIGISTER_MEMBER_REQUEST } from "../types/loginMember";

function* loginMember({email,password}) {
  const notifysucess = () => toast.info(
    "Đăng nhập thành công",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
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
    console.log(email,password)
    try{
      const res = yield axios.post("http://dboi.info/api/sign_in", { email: email, password: password });
      console.log(res)
        if (res.data.data.user.role === "customer") {
          const { data } = res.data;
          yield put({ type: LOGIN_MEMBER_SUCCESS, payload: data});
          notifysucess()
        } else {
          
        }
    }
    catch(error){
      notifyfaile()
    }
 
}

function* loginMemberRequest() {
  yield takeLatest(LOGIN_MEMBER_REQUEST, loginMember);
}

// REGISTER
function* addMember({ dataMember }) {
  const notifyregistersucess = (messenger) => toast.info(
    messenger,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  console.log(dataMember)
  const res = yield axios.post("http://dboi.info/api/sign_up", dataMember);
  console.log("res", res);
  if (res.status === 200) {
    notifyregistersucess(res.data.messages)
  }
}

function* addMemberRequest() {
  yield takeLatest(RIGISTER_MEMBER_REQUEST, addMember);
}

export default function* () {
  yield all([
    loginMemberRequest(),
    addMemberRequest()
  ]);
}
