// src/pages/Login/Login.jsx
import React from 'react';
import './Login.css'; // Importação do CSS
import Header from '../../shared/Header'; // Importação do Header compartilhado

const Login = () => (
  <div className="login-page">
    <header className="header">
      <img src="src/img/logofiebnova.png" alt="FIEB CDM" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Voltar</a> {/* Botão "Voltar" */}
          </li>
          <li>
            <a href="/login">Entrar</a>
          </li>
          <li>
            <a href="/register">Criar Conta</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="login-content">
      <img src="src/img/logofieb.png" alt="Logo FIEB" className="login-logo" />
      <div className="login-box">
        <form className="login-form">
          <input type="email" placeholder="Email..." className="login-input" />
          <input type="password" placeholder="Senha..." className="login-input" />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Esqueceu a senha?</a>
          <a href="/register">Não tem uma conta? Cadastre-se</a>
        </div>
      </div>
    </main>
  </div>
);

export default Login;
