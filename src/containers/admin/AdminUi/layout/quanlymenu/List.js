import React, { Component } from "react";
import { connect } from "react-redux";

class ListItem extends Component {
  componentDidMount() {
    this.props.getData();
  }

  _onDelete = (id) => {
    this.props._onDelete(id);
  };

  _onGetData = (id) => {
    this.props._onGetData(id);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="panel panel-success" style={{ backgroundColor: "white" }}>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                STT
              </th>
              <th>Name</th>

              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{e.name}</td>
                  <td className="row">
                    <button
                      type="button"
                      className="btn btn-sm mr-2 btn-items"
                      onClick={() => this._onGetData(e.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-items"
                      onClick={() => this._onDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.categories.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
