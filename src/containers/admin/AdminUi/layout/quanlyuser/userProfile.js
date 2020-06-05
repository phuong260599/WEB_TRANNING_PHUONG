/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DetailUser extends Component {
  constructor(props){
    super(props);
    this.state={
      userprofile: "",
    }
  }

  componentWillReceiveProps(nextprops)
  {
    console.log(nextprops.userProfile)
    if(nextprops && nextprops.userProfile)
    {
      this.setState({userprofile: nextprops.userProfile})
    }
  }

  render() {
    const {userprofile} = this.state;
    console.log("component", userprofile)
    return (
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8" style={{ marginBottom: "30px" }}>
          <h4 style={{ marginBottom: "20px", verticalAlign: "middle" }}>
                <Link
                  to="/admin/quanlyuser/"
                  onClick={this._goBack}
                  className="fas fa-arrow-left goback"
                ></Link>{" "}
                Trở về
              </h4>
              <hr style={{ marginBottom: "30px" }}></hr>
            <div className=" mb-5">
              <h3 style={{ textAlign: "center" }}>Thông tin cá nhân</h3>
              <p style={{ textAlign: "center" }}>
                Thông tin cơ bản mà bạn đang sử dụng{" "}
              </p>
            </div>
            <div className="card member-card">
              <div className="card-body">
                <h4 className="card-title">Hồ sơ</h4>
                <p className="card-text">Một số thông tin có thể hiển thị.</p>
              </div>
              <ul className="list-group list-group-flush member-card-ul">
                <li className="list-group-item member-card-item member-card-item">
                  <b>Họ và tên</b>
                  <a className="ml-10" style={{ marginLeft: "150px" }}>
                    {userprofile.name}
                  </a>
                </li>
                <li className="list-group-item member-card-item member-card-item">
                  <b>Sinh nhật</b>
                  <a className="ml-10" style={{ marginLeft: "150px" }}>
                    {userprofile.birthday}
                  </a>
                </li>
                <li className="list-group-item member-card-item">
                  <b>Biệt Danh</b>
                  <span className="ml-10" style={{ marginLeft: "150px" }}>
                    {userprofile.user_name}
                  </span>
                </li>
                <Link to="/user/detail/update/password" className="list-group-item member-card-item">
                  <b>PassWord</b>
                  <span className="ml-10" style={{ marginLeft: "150px" }}>
                    *******
                  </span>
                  <i
                    style={{ float: "right" }}
                    className="fas fa-chevron-right"
                  ></i>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card member-card">
              <div className="card-body">
                <h4 className="card-title">Thông tin liên lạc</h4>
              </div>
              <ul className="list-group list-group-flush member-card-ul">
                <li className="list-group-item member-card-item">
                  <b>Email</b>
                  <a className="ml-10" style={{ marginLeft: "180px" }}>
                    {userprofile.email}
                  </a>
                </li>
                <li className="list-group-item member-card-item">
                  <b>Số Điện Thoại</b>
                  <a className="ml-10" style={{ marginLeft: "115px" }}>
                    {userprofile.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profileUser.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailUser);
