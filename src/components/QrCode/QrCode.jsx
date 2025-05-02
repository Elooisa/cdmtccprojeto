import React, { useState } from 'react';
import QRCode from 'react-qr-code'; 
import { useNavigate } from 'react-router-dom'; 
import './QrCode.css'; 

const QrCodeComponent = () => {
  const navigate = useNavigate(); 
  const [studentRM, setStudentRM] = useState(''); 
  const [visitorName, setVisitorName] = useState(''); 
  const [visitorReason, setVisitorReason] = useState(''); 
  const [generatedQRCode, setGeneratedQRCode] = useState(''); 

  
  const handleBackToDashboard = () => {
    navigate('/dashboard'); 
  };

  
  const handleGenerateStudentQRCode = (e) => {
    e.preventDefault(); 
    if (studentRM.trim() === '') {
      alert('Por favor, preencha o RM do aluno.');
      return;
    }
    setGeneratedQRCode(`Aluno: RM - ${studentRM}`); 
  };

  const handleGenerateVisitorQRCode = (e) => {
    e.preventDefault(); 
    if (visitorName.trim() === '' || visitorReason.trim() === '') {
      alert('Por favor, preencha todos os campos do visitante.');
      return;
    }
    setGeneratedQRCode(`Visitante: Nome - ${visitorName}, Motivo - ${visitorReason}`);
  };

  return (
    <div className="qrcode-page">
      <button className="back-button" onClick={handleBackToDashboard}>Voltar</button>

      <header className="qrcode-header">
       
        <h1>Gerador de QrCode</h1>
      </header>

      
      <main className="qrcode-content">
        
        <div className="qrcode-section">
          <h2>QrCode Aluno</h2>
          <form className="qrcode-form" onSubmit={handleGenerateStudentQRCode}>
            <label htmlFor="student-rm">RM do aluno:</label>
            <input
              type="text"
              id="student-rm"
              placeholder="Digite o RM do aluno..."
              value={studentRM}
              onChange={(e) => setStudentRM(e.target.value)}
            />
            <button type="submit" className="generate-button">Gerar QrCode</button>
          </form>
        </div>

        
        <div className="qrcode-section">
          <h2>QrCode Visitante</h2>
          <form className="qrcode-form" onSubmit={handleGenerateVisitorQRCode}>
            <label htmlFor="visitor-name">Nome do visitante:</label>
            <input
              type="text"
              id="visitor-name"
              placeholder="Digite o nome do visitante..."
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)} 
            />
            <label htmlFor="visitor-reason">Motivo:</label>
            <textarea
              id="visitor-reason"
              placeholder="Descreva o motivo da visita..."
              value={visitorReason}
              onChange={(e) => setVisitorReason(e.target.value)} 
            />
            <button type="submit" className="generate-button">Gerar QrCode</button>
          </form>
        </div>
      </main>

     
      {generatedQRCode && (
        <div className="qrcode-output">
          <h2>QrCode Gerado:</h2>
          <QRCode value={generatedQRCode} size={200} /> 
        </div>
      )}
    </div>
  );
};

export default QrCodeComponent;