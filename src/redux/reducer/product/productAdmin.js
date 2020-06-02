import {
  PRODUCT_GET_ADMIN_SUCCESS,
  PRODUCT_SUBMIT_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_UPDATE_EDIT_DATA_SUCCESS,
} from "../../types/product";

var findID = (data, id) => {
  var result = -1;
  data.forEach((data, index) => {
    if (data.id === id) {
      result = index;
    }
  });
  return result;
};

var initialState = {
  data: [],
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    //GET API ADMIN
    case PRODUCT_GET_ADMIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    //SUBMIT
    case PRODUCT_SUBMIT_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    // DELETE
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payload),
      };

    // UPDATE
    case PRODUCT_UPDATE_EDIT_DATA_SUCCESS:
      var index = -1;
      index = findID(state.data, action.payload.id); // so sánh
      state.data[index] = action.payload;
      return {
        ...state,
        data: [...state.data],
      };

    default:
      break;
  }
  return state;
};

export default reducer;
