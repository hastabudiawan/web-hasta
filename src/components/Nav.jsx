import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header bg-dark txt-white">
        <nav className="d-flex nav-container">
            <div className="logo">Hasta</div>
            <div className="nav-list">
                <ul className="nav-links d-flex">
                    <li className="nav-items">
                        <Link className="txt-white link-menu" href="#" to="/">
                            <i className="icon fa fa-home"></i><span className="nav-name">Home</span>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link className="txt-white link-menu" href="#" to="/about">
                            <i className="icon fa fa-user"></i><span className="nav-name">About</span>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link className="txt-white link-menu" href="#" to="/projects">
                            <i className="icon fa fa-file-code-o"></i><span className="nav-name">Projects</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Nav;