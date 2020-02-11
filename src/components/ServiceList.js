import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchServices } from "../actions";

import loadingImg from "../pic/B13CC99F-A588-40A3-BAB3-EDF25B140F3D.png";
import errorImg from "../pic/D2446DA8-9A38-46DC-8B11-58846898BCA2.png";

class ServiceList extends Component {
  reloadPage = () => {
    window.location.reload(true);
  };
  renderList = () => {
    if (this.props.error === true) {
      return (
        <div>
          <img onClick={this.reloadPage} src={errorImg} alt="error"></img>
        </div>
      );
    } else if (this.props.services.length === 0) {
      return (
        <div>
          <img src={loadingImg} alt="loading"></img>
        </div>
      );
    } else {
      return this.props.services.map(service => {
        return (
          <div className="item" key={service.id}>
            <div className="content">
              <div className="description">
                <Link to={`${service.id}/details`}>
                  <h2>{service.name}</h2>
                </Link>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  componentDidMount() {
    this.props.fetchServices();
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    services: state.services,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchServices })(ServiceList);
