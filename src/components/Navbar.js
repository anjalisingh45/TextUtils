import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
                    <button type="button" className="btn btn-outline-primary mx-1" onClick={() => props.btnMode("blue")}>Blue</button>
                    <button type="button" className="btn btn-outline-secondary mx-1" onClick={() => props.btnMode("grey")}>Grey</button>
                    <button type="button" className="btn btn-outline-success mx-1" onClick={() => props.btnMode("green")}>Green</button>
                    <button type="button" className="btn btn-outline-danger mx-1" onClick={() => props.btnMode("red")}>Red</button>
                    <button type="button" className="btn btn-outline-info mx-2"onClick={() => props.btnMode("skyblue")}>SkyBlue</button>

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };

Navbar.defaultProps = { title: 'Start text here' , about: 'About'}