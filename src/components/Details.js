import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../actions";

import loadingImg from "../pic/B13CC99F-A588-40A3-BAB3-EDF25B140F3D.png";
import errorImg from "../pic/D2446DA8-9A38-46DC-8B11-58846898BCA2.png";

class Details extends Component {
  reloadPage = () => {
    window.location.reload(true);
  };
  componentDidMount() {
    this.props.fetchDetails(this.props.match.params.id);
  }
  render() {
    if (this.props.error === true) {
      return (
        <div>
          <img onClick={this.reloadPage} src={errorImg} alt="error"></img>
        </div>
      );
    } else if (this.props.details.price) {
      return (
        <div className="header">
          <h3>{this.props.details.price}</h3>
          <h4>{this.props.details.content}</h4>
        </div>
      );
    } else {
      return (
        <div>
          <img src={loadingImg} alt="loading"></img>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    details: state.details,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchDetails })(Details);
