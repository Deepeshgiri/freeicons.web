import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>FreeIcons</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/icons">Icons</Link></li>
          <li><Link to="/usage">Use</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
