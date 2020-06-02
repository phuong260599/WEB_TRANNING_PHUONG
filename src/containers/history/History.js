import React, { Component } from "react";
import "../../App.css";
class History extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "80px" }}>
        <h2 style={{ textAlign: "center", color: "red", marginBottom: "40px" }}>
          Lịch sử đặt hàng
        </h2>
        <table className="table">
          <thead>
            <tr style={{  color: "#007700" }}>
              <th style={{ width: "20%" }} className="text-center">
                Mã đơn
              </th>
              <th>Ngày đặt hàng</th>
              <th  > Danh sách Sản Phẩm</th>
              <th style={{ width: "15%" }} className="text-center">
                Số lượng
              </th>
              <th style={{ width: "15%" }}> Giá tiền</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
export default History;
