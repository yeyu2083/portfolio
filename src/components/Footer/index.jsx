import React from 'react';
import  './Footer.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const Footer = () => {
   return(
        <>

     <div className='contenedor-avatar'>
         <img src=".././avatar.jpg" alt="" className='image'/>
               <h1>Developer</h1>
     </div>
        <div className="contenedor back-ground">
         <div className='contenedorLinks'>
              <Link to="/service" className='link'>Services</Link>
              <Link to="/bio" className='link'>My Bio</Link>
              <Link to="/skills" className='link'>Skills</Link>
              <Link to="/" className='link'>Home</Link>

              
         </div>

  <div className="contenedor-footer">

   <Button type="button"  variant="light" className="btn-contact"><i className="bi bi-whatsapp"></i>+ 54 9 1153755122</Button>
 
 <div className='contact'>
         <p className='parrafo'> Contact me </p>
 </div>
  </div>
        </div>

        </>
  ) 
}

export { Footer }