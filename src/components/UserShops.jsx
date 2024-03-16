import React from 'react';
import '../assets/Style.css'; // Importa el archivo CSS de estilos

const UserShops = () => {
  // Ejemplos de compras realizadas por el mismo cliente
  const compras = [
    {
      fecha: '12-03-2024',
      precioTotal: 10000,
      numProductos: 3,
      productos: [
        { nombre: 'Arepa rellena', precio: 5000, cantidad: 2 },
        { nombre: 'Natural ', precio: 5000, cantidad: 1 }
      ]
    },
    {
      fecha: '15-03-2024',
      precioTotal: 20000,
      numProductos: 4,
      productos: [
        { nombre: 'Jugo Natural', precio: 5000, cantidad: 2 },
        { nombre: 'Arepa con Queso', precio: 5000, cantidad: 2 }
      ]
    },
    {
        fecha: '2024-03-10',
        precioTotal: 10000,
        numProductos: 2,
        productos: [
          { nombre: 'arepa 1', precio: 5000, cantidad: 2 },
          { nombre: 'arepa 2', precio: 5000, cantidad: 1 }
        ]
      },
      {
        fecha: '2024-03-10',
        precioTotal: 10000,
        numProductos: 2,
        productos: [
          { nombre: 'arepa 1', precio: 5000, cantidad: 2 },
          { nombre: 'arepa 2', precio: 5000, cantidad: 1 }
        ]
      },
      {
        fecha: '2024-03-10',
        precioTotal: 10000,
        numProductos: 2,
        productos: [
          { nombre: 'arepa 1', precio: 5000, cantidad: 2 },
          { nombre: 'arepa 2', precio: 5000, cantidad: 1 }
        ]
      },
      {
        fecha: '2024-03-10',
        precioTotal: 10000,
        numProductos: 2,
        productos: [
          { nombre: 'arepa 1', precio: 5000, cantidad: 2 },
          { nombre: 'arepa 2', precio: 5000, cantidad: 1 }
        ]
      },
      {
        fecha: '2024-03-10',
        precioTotal: 10000,
        numProductos: 2,
        productos: [
          { nombre: 'arepa 1', precio: 5000, cantidad: 2 },
          { nombre: 'arepa 2', precio: 5000, cantidad: 1 }
        ]
      },
      {
        fecha: '2024-03-10',
        precioTotal: 10000,
        
        numProductos: 2,
        productos: [
          { nombre: 'arepa 1', precio: 5000, cantidad: 2 },
          { nombre: 'arepa 2', precio: 5000, cantidad: 1 }
        ]
      },
  ];

  return (
    <div className="user-shops-container">
      <h2 className='NomCompras'>Mis Compras</h2>
      <div className="compras-grid">
        {/* Mapea sobre las compras y muestra cada una */}
        {compras.map((compra, index) => (
          <div key={index} className="compra">
            <div className="detalle">
              <p><strong>Fecha de compra:</strong> {compra.fecha}</p>
              <p><strong>Precio total:</strong> ${compra.precioTotal.toFixed(2)}</p>
              <p><strong>Número de productos:</strong> {compra.numProductos}</p>
              {/* Otros detalles relevantes */}
            </div>
            <div className="productos">
              {/* Lista de productos comprados en esta compra */}
              {compra.productos.map((producto, idx) => (
                <div key={idx} className="producto">
                  <p><strong>Nombre del producto:</strong> {producto.nombre}</p>
                  <p><strong>Precio unitario:</strong> ${producto.precio.toFixed(2)}</p>
                  <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                  {/* Otros detalles del producto */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserShops;
