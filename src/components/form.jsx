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

  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });

  return (
    <form onSubmit={handleSubmit} className="register" id="register" noValidate>
      <h2>Registrarse</h2>
      <input type="text" name="name" required value={formData.name} placeholder="Nombres" onChange={handleChange} />
        <div className='valid-feedback'>Todo bien</div>
        <div className='invalid-feedback'>Es necesario poner el nombre</div>
      <input type="text" name="lastName" required value={formData.lastName} placeholder="Apellidos" onChange={handleChange} />
        <div className='valid-feedback'>Todo bien</div>
        <div className='invalid-feedback'>Es necesario poner el apellido</div>
      <input type="email" name="email" required value={formData.email} placeholder="Correo Electrónico" onChange={handleChange} />
        <div className='valid-feedback'>Todo bien</div>
        <div className='invalid-feedback'>Es necesario poner el correo electónico</div>
      <input type="password" name="password" required value={formData.password} placeholder="Contraseña" onChange={handleChange} />
        <div className='valid-feedback'>Todo bien</div>
        <div className='invalid-feedback'>Es necesario poner la contraseña</div>
      <input type="number" name="phone" required value={formData.phone} placeholder="Celular" onChange={handleChange} />
        <div className='valid-feedback'>Todo bien</div>
        <div className='invalid-feedback'>Es necesario poner el celular</div>
      <input type="text" name="address" required value={formData.address} placeholder="Dirección" onChange={handleChange} />
        <div className='valid-feedback'>Todo bien</div>
        <div className='invalid-feedback'>Es necesario poner la dirección</div>

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
