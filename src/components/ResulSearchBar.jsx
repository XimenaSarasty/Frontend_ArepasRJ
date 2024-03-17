import React, { useState } from 'react';
import axios from 'axios';

const ResulSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/searchProducts', {
                productName: searchTerm // Enviar el término de búsqueda dentro de un objeto con la clave "productName"
            });
            
            console.log(response.data); // Manejar la respuesta del servidor (lista de productos)
        } catch (error) {
            console.error(error); // Manejar posibles errores en la petición
        }
    };

    return (
        <div>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Busca aquí nuestros productos"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)} // Actualizando el estado con el término ingresado
                />
                <button className="btn btn-outline-success me-3" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
};

export default ResulSearchBar

// CODIGO POR SI LA EMBARRO
// import React, { useState } from 'react';
// import axios from 'axios';

// const ResulSearchBar = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:8080/api/searchProducts', {
//                 productName: searchTerm // Enviar el término de búsqueda dentro de un objeto con la clave "productName"
//             });
            
//             console.log(response.data); // Manejar la respuesta del servidor (lista de productos)
//         } catch (error) {
//             console.error(error); // Manejar posibles errores en la petición
//         }
//     };

//     return (
//         <div>
//             <form className="d-flex" onSubmit={handleSubmit}>
//                 <input
//                     className="form-control me-2"
//                     type="search"
//                     placeholder="Busca aquí nuestros productos"
//                     aria-label="Search"
//                     value={searchTerm}
//                     onChange={(event) => setSearchTerm(event.target.value)} // Actualizando el estado con el término ingresado
//                 />
//                 <button className="btn btn-outline-success me-3" type="submit">
//                     Buscar
//                 </button>
//             </form>
//         </div>
//     );
// };


// export default ResulSearchBar