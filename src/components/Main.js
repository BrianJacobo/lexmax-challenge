import React from "react";
import "./style/header.css";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div class="main__info">
          <h1>Chemifabrik SAC</h1>
          <h3>
            Excepteur sint occaecat cupidatat non prodient, sun in culpa qui
            officia deserunt
          </h3>
        </div>
        <div class="main__target">
          <Link to="/product">
            <h3>Leave company</h3>
          </Link>
          <Link href="/product">
            <h3>→</h3>
          </Link>
        </div>
      </main>
    );
  }
}

export default Main;
