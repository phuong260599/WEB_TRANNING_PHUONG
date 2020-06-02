import React, { Component } from "react";
import ItemTest from "./ProductItem";
import { connect } from "react-redux";

class ListItem extends Component {
  render() {
    return (
      <div
        className="panel panel-success mt-3"
        style={{ backgroundColor: "white", borderRadius: "5px" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                STT
              </th>
              <th style={{ width: "10%", textAlign: "center" }}>Image</th>
              <th
                style={{ width: "10%", textAlign: "center" }}
                className="text-center"
              >
                Category
              </th>
              <th
                style={{ width: "20%", textAlign: "center" }}
                className="text-center"
              >
                Name
              </th>
              <th style={{ width: "10%", textAlign: "center" }}>Content</th>
              <th style={{ width: "15%" }} className="text-center">
                Price
              </th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <ItemTest></ItemTest>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
