import React from 'react';
import './Bio.css';

const Bio = () => {
   return(
        <div className='contenedorBio background'>
          <div className='bio-content'>
            <h2 className='bio'>My Bio</h2>
            <p className='bio'>I was always looking for opportunities, everything that challenged me.
So I'm looking to challenge myself in this world, the it world. well here I go. </p>


            <ul className='list'>
              <li><i className="bi bi-dribbble iconos"></i> Play soccer Female</li>
              <li><i className="bi bi-journal-code iconos"></i>Read a Book</li>
              <li><i className="bi bi-tv iconos"></i>Watch a good series </li>
              <li><i className="bi bi-airplane-fill iconos"></i>I like to travel</li> 
            </ul>
          </div>

           <div className='avatar-contenedor'>
              <div className='avatar'>
               <img className='imagen-avatar' src=".././avatar.jpg" alt="" />
              </div>
           </div>

        </div>
  ) 
}

export { Bio }