import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate('/dashboard'); 
  };

  return (
    <div className="login-page">
      <header className="header">
      <img src="src/img/logofiebnew.png" alt="FIEB CDM" className="login-logo" />
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
