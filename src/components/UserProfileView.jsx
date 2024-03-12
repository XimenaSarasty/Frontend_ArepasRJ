import React, { useState } from 'react';
import '../assets/Style.css'

const UserProfileView = () => {
  // Datos del usuario (esto es solo un ejemplo, debes obtener los datos del usuario de donde estén almacenados)
  const [userData, setUserData] = useState({
    nombre: ' Juan',
    apellido: ' Pérez',
    correo: ' juan@example.com',
    celular: ' 123456789',
    direccion: ' Calle Principal 123',
  });

  // Estado para controlar la edición de los campos
  const [editMode, setEditMode] = useState(false);

  
  // Función para manejar la edición de los campos
  const handleEdit = () => {
    setEditMode(!editMode);
  };

  // Función para manejar los cambios en los campos editables
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='profile-container-wrapper'>
      <div className='profile-container'>
        <h2 className='profile-title'>Mi Perfil</h2>
        <div className='profile-field'>
          <label className='profile-label'>Nombre:</label>
          {editMode ? (
            <input
              type="text"
              name="nombre"
              value={userData.nombre}
              onChange={handleChange}
            />
          ) : (
            <span className='profile-value'>{userData.nombre}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Apellido:</label>
          {editMode ? (
            <input
              type="text"
              name="apellido"
              value={userData.apellido}
              onChange={handleChange}
            />
          ) : (
            <span className='profile-value'>{userData.apellido}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Correo Electrónico:</label>
          <span className='profile-value'>{userData.correo}</span>
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Celular:</label>
          {editMode ? (
            <input
              type="text"
              name="celular"
              value={userData.celular}
              onChange={handleChange}
            />
          ) : (
            <span className='profile-value'>{userData.celular}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Dirección:</label>
          {editMode ? (
            <input
              type="text"
              name="direccion"
              value={userData.direccion}
              onChange={handleChange}
            />
          ) : (
            <span className='profile-value'>{userData.direccion}</span>
          )}
        </div>
        <button className='profile-button' onClick={handleEdit}>
          {editMode ? 'Guardar cambios' : 'Editar'}
        </button>
      </div>
    </div>
  );
};

export default UserProfileView;