import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListItem extends Component {

  componentDidMount(){
    this.props.getData()
  }

  _onDelete = (id) =>{
    console.log(id)
    // this.props.onDelete(id);
  }

  render() {
    const {users} = this.props;
    return (
      <div className="panel panel-success" style={{ backgroundColor: "white" }}>
        <table className="table">
          <thead style={{backgroundColor: 'green', color: 'white'}}>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                STT
              </th>
              <th>Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user,index) =>{
              return(
                <tr key={index}>
                  <td className="text-center">{index +1}</td>
                  <td>{user.full_name}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.phone}</td>
                  <td className="row">
                    <Link
                      type="button"
                      className="btn btn-sm mr-2 btn-items"
                      to="/admin/quanlyuser/info"
                    >
                      Chi tiết
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-items"
                      onClick= {() => this._onDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userList.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({type: "USER_GET_REQUEST"}),
    // onDelete: (id) => dispatch({type: 'USER_DELETE_REQUEST', id: id})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
