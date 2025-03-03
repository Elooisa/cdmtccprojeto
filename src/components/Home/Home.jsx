// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../shared/styles/Header.css';
import './Home.css';
import Header from '../../shared/Header';


const Home = () => (
  <div className="home">
    <Header />
    <main className="main-content">
      <h1>Bem-vindo ao CDM</h1>
      <div className="button-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Criar Conta</button>
        </Link>
      </div>
    </main>
    <Header />
  </div>
);

export default Home;
