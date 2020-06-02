import React, { Component } from "react";
import "../../../../../App.css";
import { Link } from "react-router-dom";

class FormInfoUser extends Component {
  constructor(props){
    super(props);
    this.state={
      formEdit: false,
    }
  }

  onShowForm= () =>{
    this.setState({formEdit: !this.state.formEdit})
  }

  render() {
    let {formEdit} = this.state;
    return (
      <div
        className="container-fluid pt-1"
        style={{
          backgroundColor: "#efefef",
          marginTop: "70px",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
            <form className="form-DK" >
              <h1>Thông tin khách hàng</h1>
              <div className="form-row" style={{justifyContent: 'center'}}>
                <div className="form-group col-md-4">
                  <label className="la">
                    Tên đăng nhập <span>(*)</span>
                  </label>
                  <input type="text" className="form-control" id="input1" />
                </div>

                <div className="form-group col-md-4">
                  <label className="la">
                    Họ và Tên<span>(*)</span>
                  </label>
                  <input type="text" className="form-control" id="input2" />
                </div>
              </div>
              <div className="form-row" style={{justifyContent: 'center'}}>
                <div className="form-group col-md-4">
                  <div>
                    <label>
                      Ngày Sinh <span>(*)</span>
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <select id="inputState" className="form-control">
                        <option>Ngày</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <select id="inputState" className="form-control">
                        <option>Tháng</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <select id="inputState" className="form-control">
                        <option>Năm</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-4">
                  <label>
                    Email <span>(*)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
              </div>
              {formEdit ? <div className="form-row" style={{justifyContent: 'center'}}>
              <div className="form-group col-md-4">
                <label className="la">
                  Số điện thoại <span>(*)</span>
                </label>
                <input type="text" className="form-control" id="input1" />
              </div>
             <div className="form-group col-md-2">
            <label className="la">
              Mật khẩu<span>(*)</span>
            </label>
            <input type="password" className="form-control" id="input2" />
          </div>
          <div className="form-group col-md-2">
            <label className="la">
              Xác Nhận Mật khẩu<span>(*)</span>
            </label>
            <input type="password" className="form-control" id="input2" />
          </div>
            </div> : <div className="form-row" style={{justifyContent: 'center'}}>
            <div className="form-group col-md-4">
              <label className="la">
                Số điện thoại <span>(*)</span>
              </label>
              <input type="text" className="form-control" id="input1" />
            </div>
           <div className="form-group col-md-4">
          <label className="la">
            Mật khẩu<span>(*)</span>
          </label>
          <input type="password" className="form-control" id="input2" />
        </div>
          </div>}
              <div className="form-row pb-2" style={{justifyContent: 'center'}}>
            <Link
              to=""
              type="button"
              className="btn waves-effect waves-light mr-2"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Quay lại
            </Link>
            <button
              to=""
              type="button"
              className="btn waves-effect waves-light mr-2"
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={this.onShowForm}
            >
              UPDATE
            </button>
            <Link
              to=""
              type="button"
              className="btn waves-effect waves-light"
              style={{ backgroundColor: "green", color: "white" }}
            >
                Xác nhận
            </Link>
              </div>
              
            </form>
            
          </div>
      </div>
    );
  }
}

export default FormInfoUser;
