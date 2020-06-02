import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from "./AdminUi/menu";
import Quanlymenu from "./AdminUi/layout/quanlymenu/index";
import Quanlysanpham from "./AdminUi/layout/quanlysanpham/index"
import QuanlysanphamADD from './AdminUi/layout/quanlysanpham/Form';
import NotFound from '../../notFound';
import Login from './AdminUi/login/LoginAdmin';
import QuanlyUser from './AdminUi/layout/quanlyuser/index';
import FormInfoUser from './AdminUi/layout/quanlyuser/FormInfoUser';
import PrivateRouter from './PrivateRouter';
import {connect} from 'react-redux';
import Register from './AdminUi/registerAdmin/Dangky';
class AdminRouter extends React.Component {
  render() {
    const {isLoginAdmin} = this.props;
    return (
      <div id="wrapper">
      <Menu />
        <Switch>
          <Route path="/admin" exact />
          <PrivateRouter path='/admin/quanlymenu' exact component={ Quanlymenu } redirect='/admin/login' signedIn={isLoginAdmin ? true : false}/>
          <PrivateRouter path="/admin/quanlysanpham" history exact  component={Quanlysanpham} redirect='/admin/login' signedIn={isLoginAdmin ? true : false}/>
          <Route path="/admin/quanlysanpham/:id/add" exact  component={QuanlysanphamADD} />
          <Route path="/admin/quanlysanpham/add" exact  component={QuanlysanphamADD} /> 
          <Route path="/admin/login" exact  history component={Login} />
          <Route path="/admin/register" exact  history component={Register} />
          <PrivateRouter path= "/admin/quanlyuser" exact history component={QuanlyUser} redirect='/admin/login' signedIn={isLoginAdmin ? true : false} />
          <Route path= "/admin/quanlyuser/info" exact component={FormInfoUser} />  
          <Route path= '' component={NotFound} />
        </Switch>
      </div>
    );
  }
};
const mapStateToProps = (state) =>{
  return {
    isLoginAdmin: state.loginAdmin.isLoginAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);