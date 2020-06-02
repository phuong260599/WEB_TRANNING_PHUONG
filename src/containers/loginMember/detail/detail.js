/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../../../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Detail extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8" style={{ marginBottom: "30px" }}>
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
                <Link to="/member/detail/update/fullName" className="list-group-item member-card-item member-card-item">
                  <b>Họ và tên</b>
                  <a className="ml-10" style={{ marginLeft: "150px" }}>
                    Nguyễn Phạm Trúc Phương
                  </a>
                  <i
                    style={{ float: "right" }}
                    class="fas fa-chevron-right"
                  ></i>
                </Link>
                <Link to="/member/detail/update/birthDate" className="list-group-item member-card-item member-card-item">
                  <b>Sinh nhật</b>
                  <a className="ml-10" style={{ marginLeft: "150px" }}>
                    26/05/1999
                  </a>
                  <i
                    style={{ float: "right" }}
                    class="fas fa-chevron-right"
                  ></i>
                </Link>
                <Link to="/member/detail/update/userName" className="list-group-item member-card-item">
                  <b>Biệt Danh</b>
                  <a className="ml-10" style={{ marginLeft: "150px" }}>
                    Rose
                  </a>
                  <i
                    style={{ float: "right" }}
                    class="fas fa-chevron-right"
                  ></i>
                </Link>
                <Link to="/member/detail/update/password" className="list-group-item member-card-item">
                  <b>PassWord</b>
                  <a className="ml-10" style={{ marginLeft: "150px" }}>
                    *******
                  </a>
                  <i
                    style={{ float: "right" }}
                    class="fas fa-chevron-right"
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
                <Link to="/member/detail/update/email" className="list-group-item member-card-item">
                  <b>Email</b>
                  <a className="ml-10" style={{ marginLeft: "180px" }}>
                    nguyenphuong2605@gamil.com
                  </a>
                  <i
                    style={{ float: "right" }}
                    class="fas fa-chevron-right"
                  ></i>
                </Link>
                <Link to="/member/detail/update/phone" className="list-group-item member-card-item">
                  <b>Số Điện Thoại</b>
                  <a className="ml-10" style={{ marginLeft: "115px" }}>
                    0965988011
                  </a>
                  <i
                    style={{ float: "right" }}
                    class="fas fa-chevron-right"
                  ></i>
                </Link>
              </ul>
            </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
