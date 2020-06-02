import { USER_GET_SUCCESS, USER_ADD_SUCCESS } from "../../types/user";

  
  const initialState = {
    data: [],
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
      //GET API
      case USER_GET_SUCCESS:
        return {
          ...state,
          data: action.payload.user,
        };

        //ADD API
        case USER_ADD_SUCCESS:
          console.log(action.payload.user)
          return {
            ...state,
            data: [...state.data, action.payload.user]
          }
    //   //DELETE
    //   case CATE_DELETE_SUCCESS:
    //     return {
    //       ...state,
    //       data: state.data.filter((e) => e.id !== action.payloadid),
    //     };
    //   //SUBMIT
    //   case CATE_SUBMIT_SUCCESS:
    //     return {
    //       ...state,
    //       data: [...state.data, action.payload],
    //     };
  
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
  