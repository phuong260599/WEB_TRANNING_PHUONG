import React, { Component } from "react";
import "../../../App.css";
import img from "../assets/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class DessertCake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtselect: 0,
    };
  }

  onAddCard = (product) => {
    var addItem = {
      item: {
        product_id: product.id,
        quantity: 1,
      },
    };
    this.props.addCard(addItem);
  };

  onChange() {}
  render() {
    const { data, categories } = this.props;
    return (
      <div>
        <img style={{ width: "100%" }} src={img.Drink_1} alt="cà phê"></img>
        <div
          className="container-fluid pt-1"
          style={{ backgroundColor: "white" }}
        >
          <div className="row align-text-center">
            <div className="col-md-12">
              <div className="page-heading">
                <h1>MENU</h1>
                <div>
                  <img src={img.La} alt="icon_latra" />
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row" style={{ justifyContent: "center" }}>
              <ul
                className="nav nav-pills mb-3 align-just-center"
                id="pills-tab"
                role="tablist"
              >
                {!!categories &&
                  categories.map((cate, index) => {
                    return (
                      <li className="nav-item ml-1" key={index}>
                        <Link
                          style={{
                            width: "300px",
                            textAlign: "center",
                            border: "1px solid green",
                            borderRadius: "5px",
                          }}
                          className="nav-link navmenu"
                          id="pills-home-tab"
                          role="tab"
                          aria-controls="pills-home"
                          to={`/foodTable/${cate.id}`}
                        >
                          {cate.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
              <div className="tab" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div
                    className="row align-items-center  align-just-center align-items-center pt-2"
                    style={{ borderTop: "2px solid green" }}
                  >
                    <div className="col-lg-6 background">
                      <div className="row pt-3 pb-3">
                        <div className="col-sm-6">
                          <div className="card-info card-background">
                            <h6
                              className="card-title"
                              style={{
                                color: "#0C713D",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              Cà Phê Phúc Bồn Tử Hạnh Nhân Đá Xay
                            </h6>
                            <p className="card-text">
                              Espresso Raspberry Almond
                            </p>
                            <h5
                              className="card-title"
                              style={{ color: "#0C713D" }}
                            >
                              65.000 đ
                            </h5>
                          </div>
                        </div>
                        <div
                          className="col-sm-6"
                          style={{ textAlign: "right" }}
                        >
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "#0C713D",
                              fontSize: "12px",
                              right: "10px",
                              position: "absolute",
                              padding: "5px 6px",
                              fontWeight: 900,
                              borderRadius: "3px",
                            }}
                          >
                            Món mới
                          </span>
                          <img
                            className="img-banner"
                            src={img.Drink_2}
                            alt="phuc bon tu"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 align-just-center align-items-center">
                      <div className="card align-items-center align-text-center pt-3">
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "#0C713D",
                            fontSize: "12px",
                            right: "10px",
                            position: "absolute",
                            padding: "5px 6px",
                            fontWeight: 900,
                            borderRadius: "3px",
                          }}
                        >
                          Món mới
                        </span>
                        <img
                          className="card-img-top"
                          src={img.Drink_3}
                          alt="phuc bon tu"
                        />
                        <div className="card-body">
                          <h6 className="card-title">
                            Cà Phê Phúc Bồn Tử Hạnh Nhân
                          </h6>
                          <p className="card-text">Latte Raspberry Almond</p>
                          <h5
                            className="card-title"
                            style={{ color: "#0C713D" }}
                          >
                            50.000 đ
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 align-just-center align-items-center">
                      <div className="card align-items-center align-text-center pt-3">
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "#0C713D",
                            fontSize: "12px",
                            right: "10px",
                            position: "absolute",
                            padding: "5px 6px",
                            fontWeight: 900,
                            borderRadius: "3px",
                          }}
                        >
                          Món mới
                        </span>
                        <img
                          className="card-img-top"
                          src={img.Drink_4}
                          alt="hong tra"
                        />
                        <div className="card-body">
                          <h6 className="card-title">Hồng Trà Đác Cam</h6>
                          <p className="card-text">Forest Black Tea</p>
                          <h5
                            className="card-title"
                            style={{ color: "#0C713D" }}
                          >
                            65.000 đ
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    {data.map((e, index) => {
                      return (
                        <div
                          className="col-lg-3 col-sm-6 align-just-center align-items-center"
                          key={index}
                        >
                          <div className="card align-items-center align-text-center pt-3">
                            <img
                              className="card-img-top"
                              src={"http://dboi.info" + e.avatar.url}
                              alt="phuc bon tu"
                            />
                            <div className="card-body">
                              <h6 className="card-title">{e.name}</h6>
                              <p className="card-text">{e.content}</p>
                              <h5
                                className="card-title"
                                style={{ color: "#0C713D" }}
                              >
                                {e.price}
                              </h5>
                              <Link
                                to="#"
                                className="btn btn-primary"
                                onClick={() => this.onAddCard(e)}
                              >
                                Đặt hàng
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    this.props.getData(id);
  }

  componentDidUpdate(preProps) {
    var { match } = this.props;
    var id = match.params.id;
    if (preProps.match.params.id !== id) {
      this.props.getData(id);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.products.data,
    categories: state.categories.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => dispatch({ type: "PRODUCT_GET_REQUEST", id: id }),
    addCard: (addItem) => dispatch({ type: "ADD_CART_ITEMS_REQUEST", addItem: addItem }),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DessertCake)
);
