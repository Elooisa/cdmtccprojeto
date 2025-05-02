import React from 'react';
import './Register.css'; 
import Header from '../../shared/Header'; 

const Register = () => (
  <div className="register-page">
    <header className="header header-register">
      <img src="src/img/logofiebnova.png" alt="FIEB CDM" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Voltar</a>
          </li>
          <li>
            <a href="/login">Entrar</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="register-content">
      <img src="src/img/logofieb.png" alt="Logo FIEB" className="register-logo" />
      <div className="register-box">
        <form className="register-form">
          <input type="text" placeholder="Nome completo..." className="register-input" required />
          <input type="email" placeholder="Email..." className="register-input"required />
          <input type="password" placeholder="Senha..." className="register-input" required />
          <input type="password" placeholder="Confirme a senha..." className="register-input" required />
          <button type="submit" className="register-button">Criar Conta</button>
        </form>
        <div className="register-links">
          <a href="/login">Já tem uma conta? Entre</a>
        </div>
      </div>
    </main>
  </div>
);

export default Register;
