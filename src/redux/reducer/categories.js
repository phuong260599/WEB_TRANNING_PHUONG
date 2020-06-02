import {
  CATE_ADD_REQUEST,
  CATE_ADD_SUCCESS,
  CATE_GET_SUCCESS,
  CATE_DELETE_SUCCESS,
  CATE_SUBMIT_SUCCESS,
  CATE_UPDATE_EDIT_SUCCESS,
} from "./../types/categories";

const initialState = {
  data: [],
};

var findID = (data, id) => {
  var result = -1;
  data.forEach((data, index) => {
    if (data.id === id) {
      result = index;
    }
  });
  return result;
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    //ADD
    case CATE_ADD_REQUEST:
      return { ...state };

    case CATE_ADD_SUCCESS:
      return {
        ...state,
      };
    //GET API
    case CATE_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    //DELETE
    case CATE_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payloadid),
      };
    //SUBMIT
    case CATE_SUBMIT_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    //UPDATE_EDIT

    case CATE_UPDATE_EDIT_SUCCESS:
      var index = -1;
      index = findID(state.data, action.payload.id); // so sánh nè
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
