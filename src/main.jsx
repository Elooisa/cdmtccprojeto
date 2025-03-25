// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Cardapio from './components/Cardapio/Cardapio';
import Feedback from './components/Feedback/Feedback';
import Usuarios from './components/Usuarios/Usuarios';
import QrCode from './components/QrCode/QrCode';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element= {<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/qrcode" element={<QrCode />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
