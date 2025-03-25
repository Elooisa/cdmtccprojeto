// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; // Importa o CSS do dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="header ">
      <img src="src/img/logofiebnova.png" alt="FIEB CDM" className="logo" />
            <nav>
            <ul>
            <li><a href="/cardapio">Cardápio</a></li>

            <li><a href="/feedback">Feedback</a></li>
           
            <li><a href="/qrcode">QrCode</a></li>
            
            <li><a href="/usuarios">Usuários</a></li>
            
            <li className="logout"><a href="/">Sair</a></li>
            </ul>
            </nav>
          
      </header>
  

      {/* Conteúdo Principal do Dashboard */}
      <main className="dashboard-content">
        <h1>Bem-vindo ao Dashboard!</h1>
        <p>Selecione uma das opções acima para começar.</p>
      </main>
    </div>
  );
};

export default Dashboard;
