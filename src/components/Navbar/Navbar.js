import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            React - Page
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/component" className="nav-link">
                  Component
                </Link>
              </li>
            
              <li className="nav-item">
                <Link to="/AllForms" className="nav-link">
                  Form Handling
                </Link></li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;