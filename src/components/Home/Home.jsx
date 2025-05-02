import React from 'react';
import './Home.css';
import Header from '../../shared/Header'; 

const Home = () => (
  <div className="home">
    <Header />
    <img src="src/img/logofieb.png" alt="Logo FIEB" className="logo-home" />
  </div>
);

export default Home;