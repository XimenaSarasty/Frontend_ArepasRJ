import React, { useState } from 'react';
import "../assets/Style.css"

const AgregarProducto = () => {
    const [producto, setProducto] = useState({
        imagen: null,
        nombre: '',
        descripcion: '',
        precio: '',
        tipo: 'Arepa',
        cantidad: ''
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : value;

        setProducto({ ...producto, [name]: newValue });
    };

    return (
        <div className="allin">
        <div className='agregar-producto-container'>
            <h2>Agregar Nuevo Producto</h2>
            <form>
                <div className='form-group'>
                    <label className='magenp' htmlFor="imagen">Imagen del producto:</label>
                    <input className='magent' type="file" id="imagen" name="imagen" accept="image/*" onChange={handleChange} required />
                </div>

                <div className='form-group'>
                    <label className='magenp' htmlFor="nombre">Nombre del producto:</label>
                    <input className='magent' type="text" id="nombre" name="nombre" value={producto.nombre} onChange={handleChange} required />
                </div>

                <div className='form-group'>
                    <label className='magenp' htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" rows="4" cols="50" value={producto.descripcion} onChange={handleChange} required></textarea>
                </div>

                <div className='form-group'>
                    <label className='magenp' htmlFor="precio">Precio por unidad:</label>
                    <input className='magent' type="number" id="precio" name="precio" min="0" step="0.01" value={producto.precio} onChange={handleChange} required />
                </div>

                <div className='form-group'>
                    <label className='magenp' htmlFor="tipo">Tipo:</label>
                    <select id="tipo" name="tipo" value={producto.tipo} onChange={handleChange} required>
                        <option value="Arepa">Arepa</option>
                        <option value="Adiciones">Adiciones</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" name="cantidad" min="1" value={producto.cantidad} onChange={handleChange} required />
                </div>

                <input type="submit" value="Agregar producto" className='submit-button' />
            </form>
        </div>
        </div>
    );
};

export default AgregarProducto;
