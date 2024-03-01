import "../assets/Style.css"
import logoImage from "../image/Logo.png";
import SimpleForm from "./form"; 

export const Access = () => {

    const loginF = () => {
        const frontBox = document.querySelector(".front-box");
        const formLogin = document.querySelector(".login");
        const formRegister = document.querySelector(".register");
        const backBoxLogin = document.querySelector(".back-box-login");
        const backBoxRegister = document.querySelector(".back-box-register");
        if(window.innerWidth > 850){
            formRegister.style.display = "none";
            frontBox.style.left = "10px";
            formLogin.style.display = "block";
            backBoxRegister.style.opacity = "1";
            backBoxLogin.style.opacity = "0";
        }else{
            formRegister.style.display = "none";
            frontBox.style.left = "0px";
            formLogin.style.display = "block";
            backBoxRegister.style.display = "block";
            backBoxLogin.style.display = "none";
        }
        
    }
    
    const registerF = () => {
        const frontBox = document.querySelector(".front-box");
        const formLogin = document.querySelector(".login");
        const formRegister = document.querySelector(".register");
        const backBoxLogin = document.querySelector(".back-box-login");
        const backBoxRegister = document.querySelector(".back-box-register");
        if(window.innerWidth>850){
            formRegister.style.display = "block";
            frontBox.style.left = "410px";
            formLogin.style.display = "none";
            backBoxRegister.style.opacity = "0";
            backBoxLogin.style.opacity = "1";
        }else{
            formRegister.style.display = "block";
            frontBox.style.left = "0px";
            formLogin.style.display = "none";
            backBoxRegister.style.display = "none";
            backBoxLogin.style.display = "block";
            backBoxLogin.style.opacity = "1";
        }             
    }    

  return (
    <main className="m-container">  
        {/* Company logo */}  
        <a href="/">      
        <img src={logoImage} alt="Logo de la empresa" className="logo-login" />  
        </a>   
            <div className="container">                
                {/* info about access */}
                <section className="back-box">
                    <div className="back-box-login">
                        <h3>¿Ya tienes cuenta?</h3>
                        <p>Inicia sesión para ingresar en la página</p>
                        <button className="btn-login" onClick={loginF}>Iniciar sesión</button>
                    </div>
                    <div className="back-box-register">
                        <h3>¿Aún no tienes cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button className="btn-register" onClick={registerF}>Registrarse</button>
                    </div>
                </section>
                {/* Login and register form */}
                <section className="front-box">
                    {/* Login form */}
                    <form action="" className="login">
                        <h2>Iniciar sesión</h2>
                        <input type="email" placeholder="Correo Electrónico" />
                        <input type="password"  placeholder="Contraseña"/>
                        <button type="submit">Ingresar</button>                        
                    </form>
                    {/* Register form */}
                    <SimpleForm />
                </section>
            </div>            
        </main>
     )
}
