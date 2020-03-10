import React from 'react';
import "./style.css";

const Header = () => {
  return (
    <div className="headerContainer">
    <nav className="navbar navbar-light nav-bar-color">
      <span className="navbar-brand" href="#">Puhkaev's Guitar Paradise</span>
      <ul className="nav justify-content-end">
        <li className="nav-item"><div className="nav-link text-primary">Профиль</div></li>
        <li className="nav-item"><span className="nav-link text-secondary">LogIn</span></li>
        <li className="nav-item"><span className="nav-link text-primary">LogOut</span></li>
      </ul>
    </nav>
  </div>
  );
};

export default Header;
