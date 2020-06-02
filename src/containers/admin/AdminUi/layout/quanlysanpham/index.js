import React, { Component } from "react";
import Title from "./Title";
import ListItem from "./List";
import { Link } from "react-router-dom";
import "../../../../../App.css";

class Quanlysanpham extends Component {
  render() {
    return (
      <div className="container">
      <div className="row" style={{justifyContent: "center"}}>
      <div className="col-md-12">
        <Title />
        <Link
          style={{
            paddingBottom: "5px",
            backgroundColor: "green",
            borderColor: "Green",
          }}
          to="/admin/quanlysanpham/add"
          name=""
          id=""
          className="btn btn-primary"
          role="button"
        >
          Thêm Sản Phẩm
        </Link>
        <ListItem />
        </div>
      </div>
      </div>
    );
  }
}

export default Quanlysanpham;
