import React, { Component } from "react";
import "../../../App.css";
import img from "../assets/index";
class Info extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "5%", alignSelf: "center" }}>
          <div className="col-xs-6 col-sm-6 col-md-5 col-lg-6">
            <img className="banner" src={img.Info_2} alt="banner" />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 boxinfo">
            <h1 style={{ color: "green", fontSize: "23px", width: "100%" }}>
              TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
            </h1>
            <div className="bannertext">
              <p>
                Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và
                hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng
                những trải nghiệm giá trị nhất khi thưởng thức, Phúc Long liên
                tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu
                trong ngành trà và cà phê.{" "}
              </p>
              <p>
                Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo
                hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam
                mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu
                sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và
                cà phê ngày càng bay cao, vươn xa.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "5%", alignSelf: "center" }}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 boxinfo">
            <h1 style={{ color: "green", fontSize: "23px", width: "100%" }}>
              ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT
            </h1>
            <div className="bannertext">
              <p>
                Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và
                nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng
                nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với
                mong muốn được thử thách bản thân trong ngành dịch vụ năng động
                và sáng tạo.{" "}
              </p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-5 col-lg-6">
            <img className="banner" src={img.Info_1} alt="banner" />
          </div>
        </div>
      </div>
    );
  }
}
export default Info;
