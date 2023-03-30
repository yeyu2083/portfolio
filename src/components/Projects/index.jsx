import React from 'react';
import './Projects.css'

const Projects = () => {
   return(
        <>


<div className='contenedor-cards'>
  <div className="card neon">
    <img className="card-imagen"src=".././fliyer.png" alt="Imagen de la tarjeta"/>
    <div className="card-body">
      <h2>Proyecto con React</h2>
      <p className='texto'>  Frontend con react, se conecta a una api con token</p>
      <a href="https://github.com/yeyu2083/miApis.git" ><i className="bi bi-github"></i></a>
    </div>
  </div>
  <div className="card neon">
    <img className="card-imagen"src=".././inside.png" alt="Imagen de la tarjeta"/>
    <div className="card-body">
      <h2>Formulario</h2>
      <p>   Realizado con Html, Css y Handlebars</p>
      <a href="https://github.com/yeyu2083/miprimerproyecto.git" ><i className="bi bi-github"></i></a>
    </div>
  </div>
  <div className="card neon">
    <img className="card-imagen"src=".././jotave.png" alt="Imagen de la tarjeta"/>
    <div className="card-body">
      <h2>E-commerce</h2>
      <p>  Página en funcionamiento, con React y Bootstrap.</p>
      <a href="https://github.com/AlexanderWindecker/Jotave.git" ><i className="bi bi-github"></i></a>
    </div>
  </div>
</div>



    

        </>
  ) 
}

export { Projects }