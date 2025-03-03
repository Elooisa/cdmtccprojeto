// src/pages/Cardapio/Cardapio.jsx
import React, { useState, useEffect } from 'react';
import { addMenuItem, getMenuItems } from './functions';
import '../../shared/styles/Header.css';
import './Cardapio.css';
import Header from '../../shared/Header';


const Cardapio = () => {
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');
  const [nutrition, setNutrition] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(getMenuItems());
  }, []);

  const handleAddClick = () => {
    const updatedMenuItems = addMenuItem(date, food, nutrition);
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="cardapio">
      <Header />
      <main className="main-content">
        <h1>Cardápio Escolar</h1>
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Alimento"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valores Nutricionais"
            value={nutrition}
            onChange={(e) => setNutrition(e.target.value)}
          />
          <button onClick={handleAddClick}>Adicionar</button>
        </div>
        <h2>Cardápio</h2>
        <div>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.date}</h3>
              <p>{item.food}</p>
              <p>{item.nutrition}</p>
            </div>
          ))}
        </div>
        <button className="back-button">
          <Link to="/dashboard">Voltar</Link>
        </button>
      </main>
      <Header />
    </div>
  );
};

export default Cardapio;
