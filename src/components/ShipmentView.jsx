import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ShipmentView() {
  const [domicilios, setDomicilios] = useState([]);
  const [error, setError] = useState(null);
  const [editingDomicilio, setEditingDomicilio] = useState(null);

  useEffect(() => {
    const fetchDomicilios = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/delivery/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener domicilios');
        }
        const data = await response.json();
        setDomicilios(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchDomicilios();
  }, []);

    const handleDelete = async (idDeliveryPrice) => {
    try {
      await axios.delete(`http://localhost:8080/api/delivery/delete/${idDeliveryPrice}`);
      setDomicilios(domicilios.filter(domicilio => domicilio.idDeliveryPrice !== idDeliveryPrice));
      alert('Precio de domiclio eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el precio de domicilio:', error);
      alert('Ocurrió un error al eliminar el precio de domicilio');
    }
  };

  const handleEdit = (domicilio) => {
    setEditingDomicilio({ ...domicilio });
  };

  const handleCancelEdit = () => {
    setEditingDomicilio(null);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/delivery/update/${editingDomicilio.idDeliveryPrice}`, {
        ...editingDomicilio, // Enviar todos los campos del domicilio
      });
      if (response.status === 200) {
        const updatedDomicilios = domicilios.map(item => {
          if (item.idDeliveryPrice === editingDomicilio.idDeliveryPrice) {
            return { ...item, deliveryPrice: editingDomicilio.deliveryPrice };
          } else {
            return item;
          }
        });
        setDomicilios(updatedDomicilios);
        setEditingDomicilio(null);
        alert('Cambios guardados exitosamente');
      } else {
        throw new Error('Error al guardar cambios');
      }
    } catch (error) {
      console.error('Error al guardar cambios:', error);
      alert('Ocurrió un error al guardar cambios');
    }
  };

  const handleInputChange = (e) => {
    setEditingDomicilio({ ...editingDomicilio, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Domicilios Agregados</h2>
      {error && <p>Error al obtener domicilios: {error.message}</p>}
      {domicilios.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Departamento</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Comuna</th>
              <th scope="col">Valor</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {domicilios.map((domicilio, index) => (
              <tr key={index}>
                <td>{domicilio.department}</td>
                <td>{domicilio.city}</td>
                <td>{domicilio.deliveryAddress}</td>
                <td>
                  {editingDomicilio && editingDomicilio.idDeliveryPrice === domicilio.idDeliveryPrice ? (
                    <input type="text" name="deliveryPrice" value={editingDomicilio.deliveryPrice} onChange={handleInputChange} />
                  ) : (
                    domicilio.deliveryPrice
                  )}
                </td>
                <td>
                  {editingDomicilio && editingDomicilio.idDeliveryPrice === domicilio.idDeliveryPrice ? (
                    <>
                      <button onClick={handleSaveEdit} className="btn btn-primary">Guardar</button>
                      <button onClick={handleCancelEdit} className="btn btn-secondary">Cancelar</button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(domicilio)} className="btn btn-primary">Editar</button>                    
                  )}
                  <button onClick={() => handleDelete(domicilio.idDeliveryPrice)} className='btn btn-danger'>Eliminar</button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>        
      )}
      {domicilios.length === 0 && <p>No se encontraron domicilios</p>}
      <NavLink to={'/admin/shipment-fee'}>
        <button className='btn btn-secondary'>Atrás</button>
      </NavLink>  
    </div>
  );
}

export default ShipmentView;
