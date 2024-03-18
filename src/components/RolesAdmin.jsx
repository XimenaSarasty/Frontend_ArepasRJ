import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const RolesAdmin = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');

  const fetchUsers = async () => {
    try {
      if (email.trim() !== '') {
        const response = await fetch(`http://localhost:8080/api/modify-role-button/getUser/${email}`);
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      alert('No hay registro de usuarios con el correo proporcionado')
      window.location.reload();
    }
  };

  const handleSearch = () => {
    fetchUsers();
  }

  const deleteFilters = () => {
    window.location.reload();
  }

  const handleChange = (event, id) => {
    const newValue = event.target.value;
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers[id][2] = newValue;
      return updatedUsers;
    });
  };

  return (
    <div>
      <h2>Cambio de Roles</h2>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Busca aquí el correo del usuario"
          aria-label="Search"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn btn-outline-success me-3" type="button" onClick={handleSearch}>
          Buscar
        </button>
        <button className='btn btn-danger' onClick={deleteFilters}>
          Borrar filtros
        </button>
      </form>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, id_users) => (
              <tr key={id_users}>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
                <td>
                  <select value={data[2]} onChange={(event) => handleChange(event, id_users)}>
                    <option disabled value="">{data[2]}</option>
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary">
          Guardar
        </button>
        <NavLink to={'/admin'}>
          <button className='btn btn-secondary'>Atrás</button>
        </NavLink>  
      </div>
    </div>
  );
};

export default RolesAdmin;
