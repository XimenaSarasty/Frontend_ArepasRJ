import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const SimpleForm = () => {
  
  const captcha = useRef(null);

  const onChange = () => {
    console.log(captcha.current.getValue());
    if (captcha.current.getValue()){
      alert("Usuario Verificado!");
    } else {
      alert("ERES UN ROBOT!");
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    rol: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Datos enviados con éxito al backend.');
      } else {
        console.error('Error al enviar datos al backend.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register" id="register">
      <h2>Registrarse</h2>
      <input type="text" name="name" value={formData.name} placeholder="Nombres" onChange={handleChange} />
      <input type="text" name="lastName" value={formData.lastName} placeholder="Apellidos" onChange={handleChange} />
      <input type="email" name="email" value={formData.email} placeholder="Correo Electrónico" onChange={handleChange} />
      <input type="password" name="password" value={formData.password} placeholder="Contraseña" onChange={handleChange} />
      <input type="number" name="phone" value={formData.phone} placeholder="Celular" onChange={handleChange} />
      <input type="text" name="address" value={formData.address} placeholder="Dirección" onChange={handleChange} />
        <>
          <ReCAPTCHA 
          ref={captcha}
          sitekey="6Ld3NnopAAAAAK93yWQ0GWJS1O_x-XgoYKg8rMNp" 
          onChange={onChange} />
        </>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default SimpleForm;
