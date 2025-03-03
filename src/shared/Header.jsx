// src/shared/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header className="header">
    <h1>CDM</h1>
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Criar Conta</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
