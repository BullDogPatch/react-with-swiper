import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="nav-wrapper">
      <h1>Patch</h1>
      <div className="link-conatiner">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
