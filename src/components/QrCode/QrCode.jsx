// src/pages/QrCode/QrCode.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../shared/styles/Header.css';
import './QrCode.css';
import Header from '../../shared/Header';


const QrCode = () => {
  const [rm, setRm] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Aluno');

  const generateQrCode = () => {
    return `${rm}_${date}_${type}`;
  };

  return (
    <div className="qr-code">
      <Header />
      <main className="main-content">
        <h1>Gerar QR Code</h1>
        <input
          type="text"
          placeholder="RM do Usuário"
          value={rm}
          onChange={(e) => setRm(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Aluno">Aluno</option>
          <option value="Visitante">Visitante</option>
        </select>
        <div className="qr-container">
          <QRCode value={generateQrCode()} />
        </div>
        <button className="back-button">
          <Link to="/dashboard">Voltar</Link>
        </button>
      </main>
      <Header />
    </div>
  );
};

export default QrCode;
