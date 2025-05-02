import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../shared/styles/Header.css';
import './ForgotPassword.css';
import Header from '../../shared/Header';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    
    alert(`Link de recuperação de senha enviado para ${email}`);
    navigate('/login');
  };

  return (
    <div className="forgot-password">
      <Header />
      <main className="main-content">
        <h1>Recuperar Senha</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleResetPassword}>Enviar</button>
      </main>
      <Header />
    </div>
  );
};

export default ForgotPassword;
