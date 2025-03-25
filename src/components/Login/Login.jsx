// src/pages/Login/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa a navegação
import './Login.css'; // Importa o CSS

const Login = () => {
  const navigate = useNavigate(); // Hook para redirecionamento de rotas

  const handleLogin = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    // Lógica de autenticação pode ser adicionada aqui no futuro
    navigate('/dashboard'); // Redireciona para o Dashboard
  };

  return (
    <div className="login-page">
      <header className="header">
        <img src="src/img/logofiebnova.png" alt="FIEB CDM" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Voltar</a>
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
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email..." className="login-input"  />
            <input type="password" placeholder="Senha..." className="login-input" />
            <button type="submit" className="login-button">Entrar</button>
          </form>
          <div className="login-links">
            <a href="/forgot-password">Esqueceu a senha?</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
