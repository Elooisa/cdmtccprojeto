import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Usuarios.css';

const Usuarios = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ana Paula', email: 'ana.paula@email.com', password: '1234', isAdmin: true },
    { id: 2, name: 'Bruno Silva', email: 'bruno.silva@email.com', password: 'abcd', isAdmin: false },
    { id: 3, name: 'Clara Oliveira', email: 'clara.oliveira@email.com', password: '5678', isAdmin: true },
  ]);

  const [editingUser, setEditingUser] = useState(null); 
  const navigate = useNavigate(); 

  return (
    <div className="usuarios-page">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        Voltar 
      </button>

      <header className="usuarios-header">
        <h1>Usuários</h1>
      </header>

      <main className="usuarios-content">
        <table className="usuarios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, name: e.target.value })
                      }
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser?.id === user.id ? (
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, email: e.target.value })
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser?.id === user.id ? (
                    <select
                      value={editingUser.isAdmin ? 'Admin' : 'Não Admin'}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          isAdmin: e.target.value === 'Admin',
                        })
                      }
                    >
                      <option value="Admin">Admin</option>
                      <option value="Não Admin">Não Admin</option>
                    </select>
                  ) : user.isAdmin ? (
                    'Admin'
                  ) : (
                    'Não Admin'
                  )}
                </td>
                <td>
                  {editingUser?.id === user.id ? (
                    <>
                      <button
                        className="save-button"
                        onClick={() => {
                          setUsers((prevUsers) =>
                            prevUsers.map((u) =>
                              u.id === editingUser.id ? editingUser : u
                            )
                          );
                          setEditingUser(null); 
                        }}
                      >
                        Salvar
                      </button>
                      <button
                        className="cancel-button"
                        onClick={() => setEditingUser(null)}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="edit-button"
                        onClick={() => setEditingUser(user)}
                      >
                        Editar
                      </button>
                      <button
                        className="delete-button"
                        onClick={() =>
                          setUsers((prevUsers) =>
                            prevUsers.filter((u) => u.id !== user.id)
                          )
                        }
                      >
                        Excluir
                      </button>
                      <button
                        className="toggle-admin-button"
                        onClick={() =>
                          setUsers((prevUsers) =>
                            prevUsers.map((u) =>
                              u.id === user.id
                                ? { ...u, isAdmin: !u.isAdmin }
                                : u
                            )
                          )
                        }
                      >
                        {user.isAdmin ? 'Remover Admin' : 'Tornar Admin'}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Usuarios;