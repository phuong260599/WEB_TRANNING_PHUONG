import { CATE_GET_EDIT_SUCCESS } from "./../types/categories";
import { PRODUCT_GET_EDIT_DATA_SUCCESS } from "../types/product";

const initialState = {};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATE_GET_EDIT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

      
    case PRODUCT_GET_EDIT_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
