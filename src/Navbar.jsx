import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Pizzeria Mamma Mia</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registrarse</Link>
      </div>
    </nav>
  );
};

export default Navbar;
