import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "../assets/Style.css";

const EditProduct = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        image: ""
    });
  
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener la lista de productos:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : value;
        setSelectedProduct(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleEdit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', selectedProduct.name);
            formData.append('description', selectedProduct.description);
            formData.append('price', selectedProduct.price);
            formData.append('image', selectedProduct.image);

            await axios.put(`http://localhost:8080/api/updateProduct/${selectedProduct.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Producto editado exitosamente');
            fetchProducts(); // Actualizar la lista de productos después de editar
        } catch (error) {
            console.error('Error al editar el producto:', error);
            alert('Ocurrió un error al editar el producto');
        }
    };

    const selectProductForEdit = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="allin">
            <div className='agregar-producto-container'>
                <h2>Editar Productos</h2>

                <form onSubmit={handleEdit}>
                    <div className='form-group'>
                        <label className='image-label' htmlFor="image">Imagén del Producto:</label>
                        <input className='image-input' type="file" id="image" name="image" accept="image/*" onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label className='name-label' htmlFor="name">Nombre del Producto:</label>
                        <input className='name-input' type="text" id="name" name="name" value={selectedProduct.name} onChange={handleChange} required />
                    </div>

                    <div className='form-group'>
                        <label className='description-label' htmlFor="description">Descripción:</label>
                        <textarea id="description" name="description" rows="4" cols="50" value={selectedProduct.description} onChange={handleChange} required></textarea>
                    </div>

                    <div className='form-group'>
                        <label className='price-label' htmlFor="price">Precio Unitario:</label>
                        <input className='price-input' type="number" id="price" name="price" min="0" step="0.01" value={selectedProduct.price} onChange={handleChange} required />
                        <input type="submit" value="Editar producto" className='btn btn-primary' />
                    </div>                    
                </form>

                <NavLink to={'/admin'}>
                    <button className='btn btn-primary'>Ver productos</button>
                </NavLink>               
            </div>

            <div className="cartas-container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map((product) => (
                        product.id ? (
                            <div key={product.id} className="col">
                                <div className="card">
                                    <img
                                        src={`http://localhost:8080/api/imageProduct/${product.id}`}
                                        className="card-img-top"
                                        alt="producto"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <h2 className="card-price">${product.price}</h2>
                                        <div className='btn-edit-delete'>
                                            <button onClick={() => selectProductForEdit(product)} className="btn btn-primary btn-editar">Editar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EditProduct;



//CODIGO POR SI LA EMBARRO
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import "../assets/Style.css";

// const EditProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState({
//         id: '',
//         name: '',
//         description: '',
//         price: '',
//         image: null
//     });

//     useEffect(() => {
//         const fetchProducts = async () => {
//           try {
//             const response = await axios.get("http://localhost:8080/api/products");
//             setProducts(response.data);
//           } catch (error) {
//             console.error("Error al obtener la lista de productos:", error);
//           }
//         };
//         fetchProducts();
//       }, []);
    

//     const handleChange = (event) => {
//         const { name, value, type } = event.target;
//         const newValue = type === 'file' ? event.target.files[0] : value;

//         setSelectedProduct({ ...selectedProduct, [name]: newValue });
//     };

//     const handleEdit = async (event) => {
//         event.preventDefault();

//         try {
//             const formData = new FormData();
//             formData.append('name', selectedProduct.name);
//             formData.append('description', selectedProduct.description);
//             formData.append('price', selectedProduct.price);
//             formData.append('image', selectedProduct.image);

//             await axios.put(`http://localhost:8080/api/products/${selectedProduct.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             alert('Producto editado exitosamente');
//             fetchProducts(); // Actualizar la lista de productos después de editar
//         } catch (error) {
//             console.error('Error al editar el producto:', error);
//             alert('Ocurrió un error al editar el producto');
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:8080/api/products/${selectedProduct.id}`);
//             alert('Producto eliminado exitosamente');
//             fetchProducts(); // Actualizar la lista de productos después de eliminar
//         } catch (error) {
//             console.error('Error al eliminar el producto:', error);
//             alert('Ocurrió un error al eliminar el producto');
//         }
//     };

//     const handleProductSelect = (product) => {
//         setSelectedProduct(product);
//     };

//     return (
//         <div className="allin">
//             <div className='agregar-producto-container'>
//                 <h2>Editar Productos</h2>
//                 <div>
//                     <select onChange={(e) => handleProductSelect(JSON.parse(e.target.value))}>
//                         <option value="">Selecciona un producto</option>
//                         {products.map((product) => (
//                             <option key={product.id} value={JSON.stringify(product)}>
//                                 {product.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <form onSubmit={handleEdit}>
//                     <div className='form-group'>
//                         <label className='image-label' htmlFor="image">Imagén del Producto:</label>
//                         <input className='image-input' type="file" id="image" name="image" accept="image/*" onChange={handleChange} required />
//                     </div>

//                     <div className='form-group'>
//                         <label className='name-label' htmlFor="name">Nombre del Producto:</label>
//                         <input className='name-input' type="text" id="name" name="name" value={selectedProduct.name} onChange={handleChange} required />
//                     </div>

//                     <div className='form-group'>
//                         <label className='description-label' htmlFor="description">Descripción:</label>
//                         <textarea id="description" name="description" rows="4" cols="50" value={selectedProduct.description} onChange={handleChange} required></textarea>
//                     </div>

//                     <div className='form-group'>
//                         <label className='price-label' htmlFor="price">Precio Unitario:</label>
//                         <input className='price-input' type="number" id="price" name="price" min="0" step="0.01" value={selectedProduct.price} onChange={handleChange} required />
//                         <input type="submit" value="Editar producto" className='btn btn-primary' />
//                     </div>                    
//                 </form>


//                 <NavLink to={'/admin'}>
//                     <button className='btn btn-primary'>Ver productos</button>
//                 </NavLink>               
//             </div>
//         </div>                 
//     );
// };

// export default EditProduct;
