import React, { useState } from 'react';
import axios from 'axios';
import "../assets/Style.css"

/*
-----------------------------------------------------------------------------------------------
                                     ¡¡¡NO MODIFICAR!!!
-----------------------------------------------------------------------------------------------
*/

const AgregarProducto = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: null
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : value;

        setProduct({ ...product, [name]: newValue });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', product.price);
            formData.append('image', product.image);

            await axios.post('http://localhost:8080/api/regProduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert('Producto agregado exitosamente');
            // Puedes realizar otras acciones aquí, como redireccionar a otra página
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            alert('Ocurrió un error al agregar el producto');
        }
    };

    /*
-----------------------------------------------------------------------------------------------
                                     ¡¡¡NO MODIFICAR!!!
-----------------------------------------------------------------------------------------------
*/

    return (
        <div className="allin">
            <div className='agregar-producto-container'>
                <h2>Agregar Nuevo Producto</h2>
                <form onSubmit={handleSubmit}/>
                    <div className='form-group'>
                        <label className='image-label' htmlFor="image">Product Image:</label>
                        <input className='image-input' type="file" id="image" name="image" accept="image/*" onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label className='name-label' htmlFor="name">Product Name:</label>
                        <input className='name-input' type="text" id="name" name="name" value={product.name} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label className='description-label' htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4" cols="50" value={product.description} onChange={handleChange} required></textarea>
                    </div>

                    <div className='form-group'>
                        <label className='price-label' htmlFor="price">Price per unit:</label>
                        <input className='price-input' type="number" id="price" name="price" min="0" step="0.01" value={product.price} onChange={handleChange} required />
                    </div>
                    </div>
                    </div>
            );
    };

export default AgregarProducto;


{/* <<<<<<< HEAD
//                     <input type="submit" value="Add product" className='submit-button' />
//                 </form>
//             </div>
// =======
//                 <div className='form-group'>
//                     <label className='magenp' htmlFor="tipo">Tipo:</label>
//                     <select id="tipo" name="tipo" value={producto.tipo} onChange={handleChange} required>
//                         <option value="Productos">Productos</option>
//                         <option value="Adiciones">Adiciones</option>
//                     </select>
//                 </div>

//                 <div className='form-group'>
//                     <label htmlFor="cantidad">Cantidad:</label>
//                     <input type="number" id="cantidad" name="cantidad" min="1" value={producto.cantidad} onChange={handleChange} required />
//                 </div>

//                 <input type="submit" value="Agregar producto" className='submit-button' />
//             </form>
//         </div>
// >>>>>>> 6caaf496b6574f3d645cafabf3e65f7027d58929
//         </div> */}
