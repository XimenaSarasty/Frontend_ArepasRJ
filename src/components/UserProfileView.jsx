import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileView = () => {
  const [user, setUser] = useState({
    id_users: '',
    name: '',
    lastName: '',
    phone: '',
    address: '',
    role: ''
  });

  const [editing, setEditing] = useState(false);
 
  useEffect(() => {
    // Función para obtener los datos del usuario desde el backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users//${id_users}`); // Endpoint para obtener datos del usuario activo
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:8080/api/update/${user.id}`, user); // Endpoint para actualizar los datos del usuario
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
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
              value={user.nombre}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{user.nombre}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Apellido:</label>
          {editing ? (
            <input
              type="text"
              name="apellido"
              value={user.apellido}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{user.apellido}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Correo Electrónico:</label>
          <span className='profile-value'>{user.correo}</span>
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Celular:</label>
          {editing ? (
            <input
              type="text"
              name="celular"
              value={user.celular}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{user.celular}</span>
          )}
        </div>
        <div className='profile-field'>
          <label className='profile-label'>Dirección:</label>
          {editing ? (
            <input
              type="text"
              name="direccion"
              value={user.direccion}
              onChange={handleInputChange}
            />
          ) : (
            <span className='profile-value'>{user.direccion}</span>
          )}
        </div>
        {editing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
      </div>
    </div>
  );
};

export default UserProfileView;


// CODIGO DE EJEMPLO NO SIRVE AÚN
// import React, { useState, useEffect } from 'react';
// import '../assets/Style.css'
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const UserProfileView = () => {
//   // Datos del usuario (esto es solo un ejemplo, debes obtener los datos del usuario de donde estén almacenados)
//   const [userData, setUserData] = useState({
//     nombre: '',
//     apellido: '',
//     correo: '',
//     celular: '',
//     direccion: '',
//   });

//   const [editableFields, setEditableFields] = useState({
//     nombre: true,
//     apellido: true,
//     celular: true,
//     direccion: true,
//   });

//   // Función para renderizar un campo
//   const renderField = (field, label) => {
//     return (
//       <div className='profile-field'>
//         <label className='profile-label'>{label}</label>
//         {editableFields[field] ? (
//           <input
//             type="text"
//             name={field}
//             value={userData[field]}
//             onChange={handleChange}
//           />
//         ) : (
//           <span className='profile-value'>{userData[field]}</span>
//         )}
//       </div>
//     );
//   };

//    // Función para manejar los cambios en los campos editables
//    const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (editableFields[name]) {
//       setUserData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   // Estado para controlar la edición de los campos
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//       const fetchUserData = async () => {
//         try {
//           const token = Cookies.get('token', '');     
//           const respuesta = await axios.get('/api/usuarios/1', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });    
//           setUserData(respuesta.data);
//         } catch (error) {
//           console.error('Error al obtener datos del usuario:', error);
//         }
//       };    
//       fetchUserData();
//     }, []); 
  
//   // Función para manejar la edición de los campos
//   const handleEdit = () => {
//     setEditMode(!editMode);
//   };
//   const handleSave = async () => {
//     try {
//       const token = Cookies.get('token', ''); 
  
//       // Obtener los datos actualizados del estado
//       const { idUser, nombre, apellido, celular, direccion } = userState;
  
//       // Preparar el objeto de datos para enviar
//       const userUpdated = {
//         nombre,
//         apellido,
//         celular,
//         direccion,
//       };
  
//       // Configurar la solicitud HTTP
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
  
//       // Enviar la solicitud PUT a la API
//       const response = await axios.put(`/api/users/${idUser}`, userUpdated, config);
  
//       if (response.status === 200) {
//         // Mostrar mensaje de éxito
//         console.log('Usuario actualizado exitosamente');
  
//         // Actualizar el estado de edición
//         setEditableFields({
//           nombre: false,
//           apellido: false,
//           celular: false,
//           direccion: false,
//         });
//       } else {
//         // Mostrar mensaje de error
//         console.error('Error al actualizar el usuario:', response.data);
//       }
//     } catch (error) {
//       console.error('Error inesperado:', error);
//     }
//   };
//   return (
//     <div className='profile-container-wrapper'>
//       <div className='profile-container'>
//         <h2 className='profile-title'>Mi Perfil</h2>
//         <div className='profile-field'>
//           <label className='profile-label'>Nombre:</label>
//           {editMode ? (
//             <input
//               type="text"
//               name="nombre"
//               value={userData.nombre}
//               onChange={handleChange}
//             />
//           ) : (
//             <span className='profile-value'>{userData.nombre}</span>
//           )}
//         </div>
//         <div className='profile-field'>
//           <label className='profile-label'>Apellido:</label>
//           {editMode ? (
//             <input
//               type="text"
//               name="apellido"
//               value={userData.apellido}
//               onChange={handleChange}
//             />
//           ) : (
//             <span className='profile-value'>{userData.apellido}</span>
//           )}
//         </div>
//         <div className='profile-field'>
//           <label className='profile-label'>Correo Electrónico:</label>
//           <span className='profile-value'>{userData.correo}</span>
//         </div>
//         <div className='profile-field'>
//           <label className='profile-label'>Celular:</label>
//           {editMode ? (
//             <input
//               type="text"
//               name="celular"
//               value={userData.celular}
//               onChange={handleChange}
//             />
//           ) : (
//             <span className='profile-value'>{userData.celular}</span>
//           )}
//         </div>
//         <div className='profile-field'>
//           <label className='profile-label'>Dirección:</label>
//           {editMode ? (
//             <input
//               type="text"
//               name="direccion"
//               value={userData.direccion}
//               onChange={handleChange}
//             />
//           ) : (
//             <span className='profile-value'>{userData.direccion}</span>
//           )}
//         </div>
//         <button className='profile-button' onClick={handleEdit}>
//           {editMode ? 'Guardar cambios' : 'Editar'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserProfileView;