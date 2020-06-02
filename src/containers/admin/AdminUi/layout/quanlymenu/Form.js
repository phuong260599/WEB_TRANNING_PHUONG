import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtname: "",
    };
  }

  componentDidMount() {
    this.props.onGetData(); // getdataEdit
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    // day vao from
    if (nextprops && nextprops.dataEdit) {
      var { dataEdit } = nextprops;
      this.setState({
        id: dataEdit.id,
        txtname: dataEdit.name,
      });
    }
  }

  notify = () => toast.info("Thêm thành công",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  _onCreate = (event) => {
    event.preventDefault();
    var data = {
      id: this.state.id,
      name: this.state.txtname,
    };
    if (this.state.id) {
      this.props.getUpdate(data);
    } else {
      this.notify();
      this.props.getDatatoSubmit(this.state.txtname);
    }
    this.setState({ txtname: "",  id: ""  });
  };

  _onChangeText = (evt) => {
    var target = evt.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this._onCreate}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="form-group" style={{ width: "450px", margin: "5px" }}>
            <input
              type="text"
              className="form-control"
              name="txtname"
              value={this.state.txtname}
              onChange={this._onChangeText}
              placeholder="Item Name"
              required
            />
          </div>
        </div>
        <div
          className="row"
          style={{ paddingTop: "5px", position: "absolute", right: "25px" }}
        >
          <button
            style={{
              color: "white",
              backgroundColor: "green",
              textAlign: "right",
              alignItems: "right",
            }}
            type="submit"
            className="btn mr-2"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataEdit: state.cateEdit.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetData: () => dispatch({ type: "CATE_GET_EDIT_REQUEST" }),
    getDatatoSubmit: (cate) =>dispatch({ type: "CATE_SUBMIT_REQUEST", cate: cate }),
    getUpdate: (data) =>dispatch({ type: "CATE_UPDATE_EDIT_REQUEST", data: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
