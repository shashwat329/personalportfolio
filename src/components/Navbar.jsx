import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact="true" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/Test" className={({ isActive }) => (isActive ? 'active' : '')}>
            Test
          </NavLink>
        </li> */}
      
      </ul>
    </nav>
  );
};

export default Navbar;
