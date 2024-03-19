import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfileView = () => {
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    direccion: '',
    password: ''
  });

  const [editing, setEditing] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 
  
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  // Si el campo que está cambiando es la contraseña, actualiza el estado interno para mostrarla en puntos
  if (e.target.name === 'password') {
    setPasswordVisible(true);
  }
};

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('token');
      if (token && token.length > 0) {
        try {
          const response = await axios.get('http://localhost:8080/getUser', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}` // Usa el token directamente
            }
          });
          const userData = response.data; // Asegúrate de que los datos recibidos coincidan con la estructura del estado inicial
          setUser(userData); // Actualiza el estado con los datos del usuario
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);          
        }
      }
    };
    fetchUserData();
  }, []);

 const handleSaveClick = async () => {
  try {
    await axios.put(`http://localhost:8080/api/update/${user.id}`, user);
    setEditing(false);
  } catch (error) {
    console.error('Error al actualizar los datos del usuario:', error);
  }
};

  return (
    <div className='profile-container-wrapper'>
      <div className='profile-container'>
        <h2 className='profile-title'>Mi Perfil</h2>

        <div className='profile-field'>
          <label className='profile-label'>Nombre:</label>
          {editing ? (
            <input
              type="text"
              name="nombre"
              value={user.name}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{user.name}</span>
          )}
        </div>

        <div className='profile-field'>
          <label className='profile-label'>Apellido:</label>
          {editing ? (
            <input
              type="text"
              name="apellido"
              value={user.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{ user.lastName }</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Correo Electrónico:</label>
          <span className='profile-value'>{user.email}</span>
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Contraseña:</label>
          {editing ? (
            <input
              type={passwordVisible ? "text" : "password"} // Cambiar el tipo de entrada según la visibilidad de la contraseña
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>
              {passwordVisible ? user.password.replace(/./g, "*") : "••••••••••••"} {/* Mostrar la contraseña en puntos o enmascarada */}
            </span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Celular:</label>
          {editing ? (
            <input
              type="text"
              name="celular"
              value={user.phone}
              onChange={handleInputChange}
            />            
          ) : (
            <span className='profile-value'>{user.phone}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Dirección:</label>
          {editing ? (
            <input
              type="text"
              name="direccion"
              value={user.address}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{user.address}</span>
            )}
        </div>    
        {editing ? (
              <button className='btn btn-primary' onClick={handleSaveClick}>Guardar</button>
            ) : (
              <button className='btn btn-primary' onClick={() => setEditing(true)}>Editar</button>
            )}
          </div>
        </div>
      );
    };

export default UserProfileView;    