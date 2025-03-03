// src/pages/Feedback/Feedback.jsx
import React, { useState } from 'react';
import '../../shared/styles/Header.css';
import './Feedback.css';
import Header from '../../shared/Header';


const Feedback = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'O cardápio está ótimo!', status: 'A avaliar' },
    { id: 2, text: 'Poderiam incluir mais opções vegetarianas.', status: 'A avaliar' },
  ]);

  const handleFeedback = (id, status) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, status } : comment
      )
    );
  };

  return (
    <div className="feedback">
      <Header />
      <main className="main-content">
        <h1>Feedback</h1>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <div className="actions">
              <button onClick={() => handleFeedback(comment.id, 'Útil')}>Útil</button>
              <button onClick={() => handleFeedback(comment.id, 'Não Relevante')}>Não Relevante</button>
              <button onClick={() => handleFeedback(comment.id, 'A avaliar')}>A avaliar</button>
            </div>
            <p>Status: {comment.status}</p>
          </div>
        ))}
        <button className="back-button">
          <a href="/dashboard">Voltar</a>
        </button>
      </main>
      <Header/>
    </div>
  );
};

export default Feedback;
