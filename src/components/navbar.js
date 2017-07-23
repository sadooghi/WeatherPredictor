import React, {Component} from 'react';

const Navbar = (props) => {
  return (
      <nav className="navbar">
        <i className="fa fa-cloud logo" aria-hidden="true"></i>
        <i className="fa fa-sun-o logo" aria-hidden="true"></i>

        <a href="/" className="navbar-brand">Five Days Weather Forecast</a>
      </nav>
  );
}
export default Navbar;
