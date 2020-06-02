import { LOGIN_MEMBER_SUCCESS, LOGOUT_MEMBER } from "../../types/loginMember";


var data = localStorage.getItem("LOGINMEMBER");
var name = localStorage.getItem("LOGINNAMEMEMBER")
const defaultState = {
  memberName: name,
  isLoginMember: data
}
const login = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_MEMBER_SUCCESS:
      localStorage.setItem("LOGINNAMEMEMBER", action.payload.user.full_name);
      localStorage.setItem("LOGINMEMBER", action.payload.user.access_token);
      return {
        isLoginMember: action.payload.user.access_token,
        memberName: action.payload.user.full_name
      };

    case LOGOUT_MEMBER:
      localStorage.removeItem("LOGINNAMEMEMBER");
      localStorage.removeItem("LOGINMEMBER");
      return {
        memberName: null,
        isLoginMember: null
        } 
    default:
      return state;
  }
};

export default login;