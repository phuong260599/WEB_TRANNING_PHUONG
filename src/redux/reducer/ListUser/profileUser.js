import { GET_PROFILE_USER_SUCCESS } from "../../types/user";

  
  const initialState = {
    data: '',
  };
  
  // var findID = (data, id) => {
  //   var result = -1;
  //   data.forEach((data, index) => {
  //     if (data.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };
  
  let reducer = (state = initialState, action) => {
    switch (action.type) {
      //GET profile
      case GET_PROFILE_USER_SUCCESS:
          console.log("reducer",action.payload.user)
        return {
          ...state,
          data: action.payload.user,
        };
  
    //   //UPDATE_EDIT
  
    //   case CATE_UPDATE_EDIT_SUCCESS:
    //     var index = -1;
    //     index = findID(state.data, action.payload.id); // so sánh nè
    //     state.data[index] = action.payload;
    //     return {
    //       ...state,
    //       data: [...state.data],
    //     };
  
      default:
        break;
    }
    return state;
  };
  
  export default reducer;
  