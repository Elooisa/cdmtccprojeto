// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../shared/styles/Header.css';
import './Login.css';
import Header from '../../shared/Header';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Autenticação de exemplo
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login">
      <Header />
      <main className="main-content">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Continuar</button>
        <Link to="/forgot-password">Esqueci a senha</Link>
      </main>
      <Header />
    </div>
  );
};

export default Login;
