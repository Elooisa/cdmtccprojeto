// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../shared/styles/Header.css';
import './Dashboard.css';
import Header from '../../shared/Header';


const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <main className="main-content">
      <h1>Página Inicial</h1>
      <div className="grid-container">
        <Link to="/cardapio">
          <div className="grid-item">Cardápio</div>
        </Link>
        <Link to="/feedback">
          <div className="grid-item">Feedback</div>
        </Link>
        <Link to="/qrcode">
          <div className="grid-item">QrCode</div>
        </Link>
        <Link to="/usuarios">
          <div className="grid-item">Usuários</div>
        </Link>
        <Link to="/">
          <div className="grid-item">Sair</div>
        </Link>
      </div>
    </main>
    <Header />
  </div>
);

export default Dashboard;
