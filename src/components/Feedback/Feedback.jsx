// src/pages/Feedback/Feedback.jsx
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Feedback.css'; // Estilos da página

const Feedback = () => {
  // Estados para cada lista de comentários
  const [newFeedback, setNewFeedback] = useState([
    { id: 1, text: 'Poderiam dar mais vezes pão com requeijão ' },
    { id: 2, text: 'Tentem evitar colocar peixe no cardápio ' },
    { id: 3, text: 'Muito boa a farofa de linguiça ' },
    { id: 4, text: 'Deem mais frutas' },
  ]);
  const [relevantFeedback, setRelevantFeedback] = useState([]);
  const [notRelevantFeedback, setNotRelevantFeedback] = useState([]);
  const [toEvaluateFeedback, setToEvaluateFeedback] = useState([]);

  // Função para mover um comentário de "Novos Feedback" para outra categoria
  const moveFeedback = (id, fromList, toList, setFromList, setToList) => {
    const feedbackItem = fromList.find((item) => item.id === id); // Encontra o comentário
    setFromList(fromList.filter((item) => item.id !== id)); // Remove da lista de origem
    setToList([...toList, feedbackItem]); // Adiciona na lista de destino
  };

  return (
    <div className="feedback-page">
      {/* Botão de voltar */}
            <Link to="/dashboard" className="back-link">
              Voltar 
            </Link>
      <header className="feedback-header">
        <h1>Feedback</h1>
      </header>
      <main className="feedback-content">
        {/* Novos Feedback */}
        <section className="feedback-section">
          <h2>Novos Feedback:</h2>
          {newFeedback.map((item) => (
            <div key={item.id} className="feedback-item">
              <p>{item.text}</p>
              <div className="feedback-buttons">
                <button
                  className="button-relevant"
                  onClick={() => moveFeedback(item.id, newFeedback, relevantFeedback, setNewFeedback, setRelevantFeedback)}
                >
                  Relevante
                </button>
                <button
                  className="button-not-relevant"
                  onClick={() => moveFeedback(item.id, newFeedback, notRelevantFeedback, setNewFeedback, setNotRelevantFeedback)}
                >
                  Não Relevante
                </button>
                <button
                  className="button-evaluate"
                  onClick={() => moveFeedback(item.id, newFeedback, toEvaluateFeedback, setNewFeedback, setToEvaluateFeedback)}
                >
                  Avaliar
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Relevantes */}
        <section className="feedback-section">
          <h2>Relevantes:</h2>
          {relevantFeedback.map((item) => (
            <div key={item.id} className="feedback-item">
              <p>{item.text}</p>
              <button
                className="button-move"
                onClick={() => moveFeedback(item.id, relevantFeedback, newFeedback, setRelevantFeedback, setNewFeedback)}
              >
                Mover
              </button>
            </div>
          ))}
        </section>

        {/* Não Relevantes */}
        <section className="feedback-section">
          <h2>Não Relevantes:</h2>
          {notRelevantFeedback.map((item) => (
            <div key={item.id} className="feedback-item">
              <p>{item.text}</p>
              <button
                className="button-move"
                onClick={() => moveFeedback(item.id, notRelevantFeedback, newFeedback, setNotRelevantFeedback, setNewFeedback)}
              >
                Mover
              </button>
            </div>
          ))}
        </section>

        {/* A Avaliar */}
        <section className="feedback-section">
          <h2>A Avaliar:</h2>
          {toEvaluateFeedback.map((item) => (
            <div key={item.id} className="feedback-item">
              <p>{item.text}</p>
              <button
                className="button-move"
                onClick={() => moveFeedback(item.id, toEvaluateFeedback, newFeedback, setToEvaluateFeedback, setNewFeedback)}
              >
                Mover
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Feedback;