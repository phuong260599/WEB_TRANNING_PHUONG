import * as React from 'react';
import { Route, Redirect,} from 'react-router-dom';


class PrivateRouter extends React.Component {
  renderComponent = () => {
    let { component: Component, childProps, ...rest } = this.props;
    return (<Component { ...childProps } {...rest}/>);
  };

  redirect = (url) => {
    return (<Redirect to={ url } />);
  }

  render() {
    let {signedIn,redirect, component, childProps, ...rest } = this.props;
    return ( <Route { ...rest } render={ props => signedIn ? this.renderComponent() : this.redirect(redirect) } />);
  }
}
export default PrivateRouter;
