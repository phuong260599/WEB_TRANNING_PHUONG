import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
class Billmanager extends Component {
  render() {
    return (
      <div className="container" style={{paddingTop: '80px'}}>
      <h2  style={{textAlign: "center",color:"red", marginBottom:"40px"}}>Hóa Đơn</h2>
        <table className="table" >
          <thead>
            <tr style={{ backgroundColor: "#0c713d", color: "white" }}>
              <th style={{ width: "20%" }} className="text-center">
                Mã đơn
              </th>
              <th>Danh sách sản phẩm</th>
              <th>Số lương</th>
              <th style={{ width: "15%" }} className="text-center">
                giá tiền
              </th>
              <th style={{ width: "15%" }}>Tổng cộng</th>
            </tr>
            <td colSpan="3">
            <Link
              to="/cart"
              type="button"
              className="btn waves-effect waves-light mr-2"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Quay lại
            </Link>
            <Link
              to="/bill"
              type="button"
              className="btn waves-effect waves-light"
              style={{ backgroundColor: "green", color: "white" }}
            >
                Xác nhận
            </Link>
          </td>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
export default Billmanager;
