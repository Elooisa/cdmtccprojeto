// src/pages/Register/Register.jsx
import React from 'react';
import './Register.css'; // Importação do CSS
import Header from '../../shared/Header'; // Importação do Header compartilhado

const Register = () => (
  <div className="register-page">
    <Header /> {/* Header fixo no topo */}
    <main className="register-content">
      <img src="src/img/logofieb.png" alt="Logo FIEB" className="register-logo" /> {/* Logo acima */}
      <div className="register-box"> {/* Quadrado branco envolvendo o formulário */}
        <form className="register-form">
          <input type="text" placeholder="Nome completo..." className="register-input" /> {/* Campo de nome */}
          <input type="email" placeholder="Email..." className="register-input" /> {/* Campo de email */}
          <input type="password" placeholder="Senha..." className="register-input" /> {/* Campo de senha */}
          <input type="password" placeholder="Confirme a senha..." className="register-input" /> {/* Campo de confirmação */}
          <button type="submit" className="register-button">Criar Conta</button> {/* Botão de criar conta */}
        </form>
        <div className="register-links">
          <a href="/login">Já tem uma conta? Entre</a> {/* Link para login */}
        </div>
      </div>
    </main>
  </div>
);

export default Register;
