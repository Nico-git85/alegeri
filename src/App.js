import React, { Component } from "react";
import Nav from "./nav";
import ListaCarduri from "./listacarduri";
import ListaSel from "./listasel";
import "./App.css";

class App extends Component {
  render() {
    const listaJud = ["Alba", "Argeș", "Arad", "Bacău", "Bihor"];
    let carduri = [
      {
        culoare: "#2196F3",
        numar: 609473,
        text: "Înscriși pe liste permanente și speciale",
      },
      {
        culoare: "#00BCD4",
        numar: 291826,
        text: "Votanți pe liste permanente și speciale",
      },
      {
        culoare: "#32C787",
        numar: 79235,
        text: "Votanți pe liste suplimentare",
      },
      { culoare: "#8BC34A", numar: 1408, text: "Votanți cu urna mobilă" },
      { culoare: "#FFC107", numar: 372469, text: "Total votanți" },
      { culoare: "#FF9800", numar: 61.11, text: "Prezența la urne (%)" },
    ];

    return (
      <>
        <Nav />
        <div className="container">
          <div className="row pt-5">
            <ListaCarduri sirCarduri={carduri} />
          </div>

          <div className="row pt-5">
            <div className="col-sm-3">
              <ListaSel eticheta="JUDETE" nume="jud" lista={listaJud} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
