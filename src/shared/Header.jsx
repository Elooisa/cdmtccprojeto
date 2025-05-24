import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header className="header">
    <img src="src/img/logofiebnew.png" alt="FIEB CDM" className="logo-header" />
    <nav>
      <ul>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/register">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

