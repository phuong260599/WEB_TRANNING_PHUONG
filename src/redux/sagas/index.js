import {  all } from "redux-saga/effects";
import cateRun from './categories';
import productsRun from './product';
import productAminRun from './productAmin';
import cartRun from './cart';
import loginAdminRun from './loginAdmin';
import userRun from './user';
import loginMember from './loginMember';

export default function* () {
  yield all([cateRun(),productsRun(),productAminRun(),cartRun(),loginAdminRun(),userRun(),loginMember()]);
}
