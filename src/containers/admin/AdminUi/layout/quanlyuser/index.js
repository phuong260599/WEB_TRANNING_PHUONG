import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./Title";
import ListItem from "./List";
import "../../../../../App.css";

class QuanlyUser extends Component {
  _onDelete = (data) => {
    this.props.getDatatoDelete(data);
  };

  _onGetData = (id) => {
    this.props.getDatatEdit(id);
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: "50px", marginTop: '30px' }}>
        <Title />
        <div className="row">
        <div className="col-md-12">
            <ListItem/>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuanlyUser);
