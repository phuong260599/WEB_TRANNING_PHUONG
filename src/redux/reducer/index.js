import { combineReducers } from "redux";

import { default as categoriesReducer } from "./categories";
import { default as cateEditReducer } from "./cateEdit";
import { default as productsReducer } from "./product/products";
import { default as productsAdminReducer } from "./product/productAdmin";
import { default as cartReducer } from "./cart/cart";
import { default as loginAdminReducer } from "./loginAmin/login";
import {default as userReducer} from './ListUser/listUser';
import {default as loginMember} from './loginMember/member'

const reducer = combineReducers({
  categories: categoriesReducer,
  cateEdit: cateEditReducer,
  products: productsReducer,
  productsAdmin: productsAdminReducer,
  cart: cartReducer,
  loginAdmin: loginAdminReducer,
  userList: userReducer,
  loginMember: loginMember
});

export default reducer;
