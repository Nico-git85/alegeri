import React, { Component } from "react";
import "./listasel.css";
class ListaSel extends Component {
  render() {
    const { eticheta, nume, lista } = this.props;

    const optiuni = lista.map((item) => <option>{item}</option>);
    return (
      <div className="listasel form-group">
        <label for={nume}>{eticheta}</label>
        <select class="form-control" id={nume}>
          {optiuni}
        </select>
      </div>
    );
  }
}

export default ListaSel;
