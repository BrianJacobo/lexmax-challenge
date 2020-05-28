import React from "react";
import './style/header.css'
import icon from './img/icons8-menú-2-20.png'
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div class="navbar">
          <Link to="#">XD</Link>

          <div class="link">
            <Link to="/">COMPANIES</Link>
            <Link to="/">PRODUCTS</Link>
            <Link to="/">LOGIN</Link>
            <Link to="/">REGISTERED</Link>
            <Link to="/">
              <img src={icon} alt="icon"/>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
