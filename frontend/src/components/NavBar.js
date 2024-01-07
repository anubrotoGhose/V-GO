import { useState } from 'react';
import { Link } from "react-router-dom";
import vitlogo from '../assets/vitlogo.jpg';
import backbutton from '../assets/backbutton.png';
import vlogo from '../assets/vlogo.jpg'; 
import 'bulma/css/bulma.min.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={backbutton} alt="Back" />
        </a>

        <a role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={toggleNavbar}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="https://chennai.vit.ac.in/">Home</a>
          <a className="navbar-item" href="https://chennai.vit.ac.in/about/contactus/">Contact</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <img src={vlogo} alt="V Logo" />
          </div>
          <div className="navbar-item">
            <img src={vitlogo} alt="VIT Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
