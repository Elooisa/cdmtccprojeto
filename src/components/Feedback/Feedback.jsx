import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css'; 

const Feedback = () => {
  
  const [newFeedback, setNewFeedback] = useState([
    { id: 1, text: 'Poderiam dar mais vezes pão com requeijão ' },
    { id: 2, text: 'Tentem evitar colocar peixe no cardápio ' },
    { id: 3, text: 'Poderiam dar mais frutas ' },
    { id: 4, text: 'Comida muito boa' },
  ]);
  const [relevantFeedback, setRelevantFeedback] = useState([]);
  const [notRelevantFeedback, setNotRelevantFeedback] = useState([]);
  const [toEvaluateFeedback, setToEvaluateFeedback] = useState([]);

  const navigate = useNavigate();

 
  const moveFeedback = (id, fromList, toList, setFromList, setToList) => {
    const feedbackItem = fromList.find((item) => item.id === id); 
    setFromList(fromList.filter((item) => item.id !== id)); 
    setToList([...toList, feedbackItem]); 
  };

  return (
    <div className="feedback-page">
        
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        Voltar 
      </button>

      <header className="feedback-header">
        <h1>Feedback</h1>
      </header>
      
      <main className="feedback-content">
       
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
                  N-Relevante
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