import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  render() {
    const stil = {
      backgroundColor: "#32C787",
      color: "#FFF",
    };
    return (
      <div style={stil}>
        <div className="container">
          <h5 className="pt-3 pb-3 mb-0 d-inline-block">
            <FontAwesomeIcon icon={faChartArea} /> Alegeri Europarlamentare 2019
          </h5>
        </div>
      </div>
    );
  }
}

export default Nav;
