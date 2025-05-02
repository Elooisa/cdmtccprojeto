import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cardapio.css';

const Cardapio = () => {
  const [foods, setFoods] = useState([]); 
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10)); 
  const [calendarData, setCalendarData] = useState({}); 

  
  const handleAddFood = (e) => {
    e.preventDefault();
    const foodName = e.target.elements.foodName.value.trim();
    const calories = e.target.elements.calories.value.trim();
    const proteins = e.target.elements.proteins.value.trim();

    if (foodName && calories && proteins) {
      const newFood = { name: foodName, calories, proteins };
      setFoods([...foods, newFood]);

      
      setCalendarData({
        ...calendarData,
        [selectedDate]: [...(calendarData[selectedDate] || []), newFood],
      });

      e.target.reset();
    }
  };

  
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); 
  };

  return (
    <div className="cardapio-page">
      <Link to="/dashboard" className="back-link">
        Voltar 
      </Link>
      
      <main className="cardapio-content">
        <h1>Cardápio</h1>
        
        <section className="add-food-section">
          <h2>Adicionar Alimento</h2>
          <form onSubmit={handleAddFood}>
            <input type="text" name="foodName" placeholder="Nome do alimento" required />
            <input type="number" name="calories" placeholder="Calorias (kcal)" required />
            <input type="number" name="proteins" placeholder="Proteínas (g)" required />
            <button type="submit" className="add-food-button">Adicionar</button>
          </form>
        </section>
        
        <section className="calendar-section">
          <h2>Selecionar Data</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-picker"
          />
          <h3>Cardápio de {selectedDate}</h3>
          <ul className="calendar-list">
            {(calendarData[selectedDate] || []).map((food, index) => (
              <li key={index}>
                {food.name} - {food.calories} kcal, {food.proteins} g proteínas
              </li>
            ))}
          </ul>
        </section>

        <section className="dynamic-cardapio">
          <h2>Cardápio Atual</h2>
          <ul className="cardapio-list">
            {foods.map((food, index) => (
              <li key={index}>
                {food.name} - {food.calories} kcal, {food.proteins} g proteínas
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Cardapio;