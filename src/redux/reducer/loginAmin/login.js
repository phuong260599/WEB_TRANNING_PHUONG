import { LOGIN_ADMIN_SUCCESS, LOGOUT_ADMIN } from "../../types/loginAdmin";

var data = localStorage.getItem("LOGINADMIN");
const defaultState = {
  isLoginAdmin: data,
  mess: null
}
const login = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_SUCCESS:
      localStorage.setItem("LOGINADMIN", action.payload.user.access_token); //trong data truyền từ sagâa qua có 1 field là access_token, lưu nó vào localstỏeage(acces_token là kiểu xác thực )
      return {
        isLoginAdmin: action.payload.user.access_token,
      };

    case LOGOUT_ADMIN:
      localStorage.removeItem("LOGINADMIN");
      return {
          isLoginAdmin: null
        }  
    default:
      return state;
  }
};

export default login;