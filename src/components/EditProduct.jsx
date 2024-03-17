import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../assets/Style.css";

const EditProduct = () => {
    const { id } = useParams();

    const [products, setProducts] = useState({
        name: "",
        description: "",
        price: "",
        image: ""
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/products/${id}`);
                    setProducts(response.data);
                } catch (error) {
                    console.error('Server Error', error);
                }
            };
            fetchProducts();
        }
    }, []);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setProducts({ ...products, imageFile: e.target.files[0] });
        } else {
            setProducts({ ...products, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!products.name) {
            errors.name = 'Este campo es obligatorio';
        }
        if (!products.description) {
            errors.description = 'Este campo es obligatorio';
        }
        if (!products.price) {
            errors.price = 'Este campo es obligatorio';
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('productName', products.name);
            formData.append('productDescription', products.description);
            formData.append('unityPrice', products.price);
            if (products.imageFile) {
                formData.append('imageFile', products.imageFile);
            }

            var url = `http://localhost:8080/api/updateProduct/${id}`;
            await axios.put(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Producto actualizado con éxito');
            navigate('/admin');
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    return (
        <div className="allin">
            <div className='agregar-producto-container'>
                <h2>{id ? 'Editar Producto' : ''}</h2>
                <div className='card-img-top'>
                    <img
                        src={`http://localhost:8080/api/imageProduct/${products.idProduct}`}
                        className="card-img-top"
                        alt="producto" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='image-label' htmlFor="image">Imagén del Producto:</label>
                        <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
                    </div>

                    <div className='form-group'>
                        <label className='name-label' htmlFor="name">Nombre del Producto: <span className="required">*</span></label>
                        <input className={`name-input ${errors.name && 'error'}`} type="text" id="name" name="name" placeholder={products.productName} onChange={handleChange} />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className='form-group'>
                        <label className='description-label' htmlFor="description">Descripción: <span className="required">*</span></label>
                        <textarea className={`description-input ${errors.description && 'error'}`} id="description" name="description" rows="4" cols="50" placeholder={products.productDescription} onChange={handleChange}></textarea>
                        {errors.description && <p className="error-message">{errors.description}</p>}
                    </div>

                    <div className='form-group'>
                        <label className='price-label' htmlFor="price">Precio Unitario: <span className="required">*</span></label>
                        <input className={`price-input ${errors.price && 'error'}`} type="number" id="price" name="price" min="0" step="0.01" placeholder={products.unityPrice} onChange={handleChange} />
                        {errors.price && <p className="error-message">{errors.price}</p>}
                        <button className='btn btn-primary' type="submit">{id ? 'Editar' : 'Guardar'}</button>
                    </div>
                </form>
                <NavLink to={'/admin'}>
                    <button className='btn btn-danger'>Cancelar edición</button>
                </NavLink>
            </div>
        </div>
    );
};

export default EditProduct;
