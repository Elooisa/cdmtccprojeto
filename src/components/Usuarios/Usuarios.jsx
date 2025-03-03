// src/pages/Usuarios/Usuarios.jsx
import React, { useState } from 'react';
import '../../shared/styles/Header.css';
import './Usuarios.css';
import Header from '../../shared/Header';


const Usuarios = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'João', email: 'joao@example.com', role: 'Usuario' },
    { id: 2, name: 'Maria', email: 'maria@example.com', role: 'Usuario' },
  ]);

  const handleEdit = (id, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="usuarios">
      <Header />
      <main className="main-content">
        <h1>Usuários</h1>
        {users.map((user) => (
          <div key={user.id} className="user">
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Função: {user.role}</p>
            <div className="actions">
              <button onClick={() => handleEdit(user.id, 'Admin')}>Tornar Admin</button>
              <button onClick={() => handleDelete(user.id)}>Excluir</button>
            </div>
          </div>
        ))}
        <button className="back-button">
          <a href="/dashboard">Voltar</a>
        </button>
      </main>
      <Header />
    </div>
  );
};

export default Usuarios;
