import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class QuanlysanphamADD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtname: "",
      txtprice: "",
      txtcontant: "",
      txtselect: "Categories",
      images: "",
      imagesEdit: "",
      txtpriceErro: "",
    };
  }

  _onChangeText = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  _onChangeImage = (e) => {
    this.setState({
      images: e.target.files[0],
    });
  };

  validate = () => {
    let priceErro = "";
    if (this.state.txtprice < 0) {
      priceErro = "Giá nhập không hợp lệ";
    }

    if (priceErro) {
      this.setState({ txtpriceErro: priceErro });
      return false;
    }

    return true;
  };

  notify = () => toast.info("Thêm thành công",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  _onCreate = (e) => {
    e.preventDefault();
    let validate = this.validate();
    if (validate) {
      const data = new FormData();
      data.append("id", this.state.id);
      data.append("name", this.state.txtname);
      data.append("price", this.state.txtprice);
      data.append("content", this.state.txtcontant);
      data.append("user_id", 1);
      data.append("category_id", this.state.txtselect);
      if (this.state.images) {
        data.append("avatar", this.state.images);
      }
      
      if (this.state.id) {
        this.props.upDateProduct({ data, id: this.state.id });
      } else {
        this.notify()
        this.props.getDatatoSubmit(data);
      }
      this.props.history.goBack();
    }
  };

  render() {
    const { imagesEdit } = this.state;
    const { dataCate } = this.props;
    
    return (
      <div
        className="row"
        style={{ justifyContent: "center", paddingTop: "50px" }}
      >
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3
                style={{
                  textAlign: "center",
                  color: "green",
                  paddingBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                FORM ADD AND EDIT
              </h3>
              <form onSubmit={this._onCreate}>
                <label className="my-1 mr-2">Category</label>
                <select
                  className="form-control"
                  value={this.state.txtselect}
                  name="txtselect"
                  onChange={this._onChangeText}
                  required
                >
                  <option value="">Categories</option>
                  {dataCate.map((e, index) => {
                    return (
                      <option key={index} value={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                <div className="row mt-5" style={{ justifyContent: "center" }}>
                  <div className="col-md-5">
                    <label>Hình ảnh</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        accept=".jpg,.png"
                        onChange={this._onChangeImage}
                        required={!imagesEdit ? true : false}
                      />
                      <label
                        style={{
                          display: "inline-block",
                          cursor: "pointer",
                          content: "click me",
                        }}
                        className="custom-file-label"
                      >
                        Choose file...
                      </label>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <img
                      style={{ height: "64px", width: "60px" }}
                      src={"http://dboi.info" + this.state.imagesEdit}
                      alt=""
                    />
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col-md-4 mb-3">
                    <label>Tên</label>
                    <input
                      name="txtname"
                      value={this.state.txtname}
                      onChange={this._onChangeText}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      style={{ borderColor: "black" }}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Giá</label>
                    <input
                      name="txtprice"
                      className="form-control"
                      onChange={this._onChangeText}
                      type="number"
                      placeholder="Price"
                      value={this.state.txtprice}
                      style={{ borderColor: "black" }}
                      required
                    />
                    {this.state.txtpriceErro ? (
                      <div style={{ color: "red", fontWeight: 600 }}>
                        {this.state.txtpriceErro}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-4 mb-3">
                    <div>
                      <label>Chi tiết</label>
                      <input
                        name="txtcontant"
                        className="form-control"
                        value={this.state.txtcontant}
                        onChange={this._onChangeText}
                        type="text"
                        placeholder="Contant"
                        style={{ borderColor: "black" }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="btn"
                  type="submit"
                  style={{ background: "green", color: "white" }}
                >
                  Thêm
                </button>
                <Link
                  to="/admin/quanlysanpham"
                  className="btn  ml-3"
                  style={{
                    background: "orange",
                    color: "white",
                    borderColor: "orange",
                  }}
                  type="submit"
                >
                  Trở về
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    if (match) {
      this.props.getEditData(id);
    }
    this.props.getData();
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    if (nextprops && nextprops.dataEdit) {
      var { dataEdit } = nextprops;
      this.setState({
        id: dataEdit.id,
        txtname: dataEdit.name,
        txtprice: dataEdit.price,
        txtcontant: dataEdit.content,
        txtselect: dataEdit.category_id,
        imagesEdit: dataEdit.avatar.url,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dataCate: state.categories.data,
    dataEdit: state.cateEdit.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDatatoSubmit: (cate) => dispatch({ type: "PRODUCT_SUBMIT_REQUEST", cate: cate }),
    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),
    getEditData: (id) =>
      dispatch({ type: "PRODUCT_GET_EDIT_DATA_REQUEST", id: id }),
    upDateProduct: ({ data, id }) =>
      dispatch({
        type: "PRODUCT_UPDATE_EDIT_DATA_REQUEST",
        data: data,
        id: id,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuanlysanphamADD);
