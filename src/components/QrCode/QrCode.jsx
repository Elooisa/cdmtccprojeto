// src/pages/QrCode/QrCode.jsx
import React, { useState } from 'react';
import QRCode from 'react-qr-code'; // Certifique-se de importar corretamente
import { useNavigate } from 'react-router-dom'; // Para navegação
import './QrCode.css'; // Estilização do componente

const QrCodeComponent = () => {
  const navigate = useNavigate(); // Hook para redirecionamento
  const [studentRM, setStudentRM] = useState(''); // Estado do RM do aluno
  const [visitorName, setVisitorName] = useState(''); // Estado do nome do visitante
  const [visitorReason, setVisitorReason] = useState(''); // Estado do motivo do visitante
  const [generatedQRCode, setGeneratedQRCode] = useState(''); // Estado para o valor do QrCode

  // Função para redirecionar ao Dashboard
  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Redireciona para a rota do Dashboard
  };

  // Função para gerar QrCode do aluno
  const handleGenerateStudentQRCode = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    if (studentRM.trim() === '') {
      alert('Por favor, preencha o RM do aluno.');
      return;
    }
    setGeneratedQRCode(`Aluno: RM - ${studentRM}`); // Define o valor do QrCode
  };

  // Função para gerar QrCode do visitante
  const handleGenerateVisitorQRCode = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    if (visitorName.trim() === '' || visitorReason.trim() === '') {
      alert('Por favor, preencha todos os campos do visitante.');
      return;
    }
    setGeneratedQRCode(`Visitante: Nome - ${visitorName}, Motivo - ${visitorReason}`);
  };

  return (
    <div className="qrcode-page">
      {/* Botão "Voltar" */}
      <button className="back-button" onClick={handleBackToDashboard}>Voltar</button>

      {/* Cabeçalho */}
      <header className="qrcode-header">
       
        <h1>Gerador de QrCode</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="qrcode-content">
        {/* Seção QrCode Aluno */}
        <div className="qrcode-section">
          <h2>QrCode Aluno</h2>
          <form className="qrcode-form" onSubmit={handleGenerateStudentQRCode}>
            <label htmlFor="student-rm">RM do aluno:</label>
            <input
              type="text"
              id="student-rm"
              placeholder="Digite o RM do aluno..."
              value={studentRM}
              onChange={(e) => setStudentRM(e.target.value)} // Atualiza o estado
            />
            <button type="submit" className="generate-button">Gerar QrCode</button>
          </form>
        </div>

        {/* Seção QrCode Visitante */}
        <div className="qrcode-section">
          <h2>QrCode Visitante</h2>
          <form className="qrcode-form" onSubmit={handleGenerateVisitorQRCode}>
            <label htmlFor="visitor-name">Nome do visitante:</label>
            <input
              type="text"
              id="visitor-name"
              placeholder="Digite o nome do visitante..."
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)} // Atualiza o estado
            />
            <label htmlFor="visitor-reason">Motivo:</label>
            <textarea
              id="visitor-reason"
              placeholder="Descreva o motivo da visita..."
              value={visitorReason}
              onChange={(e) => setVisitorReason(e.target.value)} // Atualiza o estado
            />
            <button type="submit" className="generate-button">Gerar QrCode</button>
          </form>
        </div>
      </main>

      {/* Exibição do QrCode Gerado */}
      {generatedQRCode && (
        <div className="qrcode-output">
          <h2>QrCode Gerado:</h2>
          <QRCode value={generatedQRCode} size={200} /> {/* Renderiza o QrCode */}
        </div>
      )}
    </div>
  );
};

export default QrCodeComponent;