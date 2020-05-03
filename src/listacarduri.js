import React, { Component } from "react";
import Card from "./card.js";

class ListaCarduri extends Component {
  render() {
    let { sirCarduri } = this.props;
    const lista = sirCarduri.map((item) => (
      <div className="col-sm-2" key={item.culoare}>
        <Card culoare={item.culoare} numar={item.numar} text={item.text} />
      </div>
    ));

    return lista;
  }
}

export default ListaCarduri;
