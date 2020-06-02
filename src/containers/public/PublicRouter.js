import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navmenu from "../hearder_footer/Navmenu";
import Footer from "../hearder_footer/footer";
import HomePage from "../homePage/Home";
import Drink from "../foodTable/Drink/Drink";
import   "../../App.css"
import Cart from "../Cart/cart";
import NotFound from "../../notFound";
import Billmanager from "../Cart/Billmanager";
import RegisterMember from "../register/Dangky";
import History from "../history/History";
import loginMember from "../loginMember/loginMember";
import Detail from '../loginMember/detail/detail';
import EmailUpdate from '../loginMember/detail/update/email';
import NickNameUpdate from '../loginMember/detail/update/userName';
import FullNameUpdate from '../loginMember/detail/update/fullName';
import BirthDateUpdate from '../loginMember/detail/update/birthDate';
import Phone from '../loginMember/detail/update/SDT';
import PassWordUpdate from '../loginMember/detail/update/passWord';

class PublicRouter extends React.Component {
  render() {
    return (
      <div>
        <Navmenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/foodTable/:id" exact component={Drink} />
          <Route path="/danhnhap/login" exact history component={loginMember} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/bill" exact component={Billmanager} />
          <Route path="/dangky" exact component={RegisterMember} />
          <Route path="/history" exact component={History} />
          <Route path="/member/detail" exact component={Detail} />
          <Route path="/member/detail/update/email" exact history component={EmailUpdate} />
          <Route path="/member/detail/update/userName" exact history component={NickNameUpdate} />
          <Route path="/member/detail/update/fullName" exact history component={FullNameUpdate} />
          <Route path="/member/detail/update/birthDate" exact history component={BirthDateUpdate} />
          <Route path="/member/detail/update/phone" exact history component={Phone} />
          <Route path="/member/detail/update/password" exact history component={PassWordUpdate} />
          <Route path= '' component={NotFound} />
        
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(PublicRouter);
