import React, { Component } from "react";
import Nav from "./nav";
import Card from "./card";
import ListaSel from "./listasel";
import "./App.css";

class App extends Component {
  render() {
    const listaJud = ["Alba", "Argeș", "Arad", "Bacău", "Bihor"];

    return (
      <>
        <Nav />
        <div className="container">
          <div className="row pt-5">
            <div className="col-sm-2">
              <Card
                culoare="bg-primary"
                numar="31.517"
                text="Înscriși pe liste permanente și speciale"
              />
            </div>
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
