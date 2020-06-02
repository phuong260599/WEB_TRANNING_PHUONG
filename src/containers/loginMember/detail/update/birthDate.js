import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BirthDateUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  _onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  _onSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.getDataLogin(this.state);
  };
  render() {
    return (
      <div class="container-fluid" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-6">
              <h4 style={{ marginBottom: "20px", verticalAlign: "middle" }}>
                {" "}
                <Link
                  to="/member/detail"
                  onClick={this._goBack}
                  class="fas fa-arrow-left goback"
                ></Link>
                BirthDay
              </h4>
              <hr style={{ marginBottom: "30px" }}></hr>
              <form>
                <div className="form-group" style={{ position: "relative" }}>
                  <label
                    style={{
                      position: "absolute",
                      backgroundColor: "white",
                      top: "-10px",
                      left: "20px",
                    }}
                  >
                    BirthDay
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    style={{ padding: "10px 9px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ float: " right" }}
                >
                  Save
                </button>
                <Link
                  to="/member/detail"
                  type="reset"
                  className="btn mr-2 cancel"
                  style={{ float: " right" }}
                >
                  Cancel
                </Link>
              </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(BirthDateUpdate);
