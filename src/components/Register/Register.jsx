// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../shared/styles/Header.css';
import './Register.css';
import Header from '../../shared/Header';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password === confirmPassword) {
      // Lógica de registro de exemplo
      navigate('/dashboard');
    } else {
      alert('Senhas não coincidem');
    }
  };

  return (
    <div className="register">
      <Header />
      <main className="main-content">
        <h1>Criar Conta</h1>
        <input
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Continuar</button>
      </main>
      <Header />
    </div>
  );
};

export default Register;
