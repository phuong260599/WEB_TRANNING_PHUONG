import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./redux/configureStore";
import App from "./App";

class RootContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<RootContainer />, document.getElementById("body"));
