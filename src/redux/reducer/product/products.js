import { PRODUCT_GET_SUCCESS } from "../../types/product";

var initialState = {
  data: [],
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    //GET API PUBLIC
    case PRODUCT_GET_SUCCESS:
      return {
        ...state,
        data: action.payload.products,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
