import {
  // UPDATE_SOLUONG_CART,
  GET_CART_ITEMS_SUCCESS,
  DELETE_CART_ITEMS_SUCCESS,
  ADD_CART_ITEMS_SUCCESS,
} from "../../types/cart";

var defaultState = {
  data: []
};

const card = (state = defaultState, action) => {
  switch (action.type) {

    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.payload.item
      }
      

    //add
    case ADD_CART_ITEMS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload.item
      };

    case DELETE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payload),
      };

      //update
    // case UPDATE_SOLUONG_CART:
    //   index = findId(state, product.id);
    //   if (index !== -1) {
    //     state[index].soluong = soluong;
    //   }
    //   localStorage.setItem("CART", JSON.stringify(state));
    //   return [...state];
    default:
      return state;
  }
};


// //
// var findId = (card, products) => {
//   var index = -1;
//   for (var i = 0; i < card.length; i++) {
//     if (card[i].id === products) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// };

export default card;
