import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
   return(
        <div className='contenedorHero background-image '>

            <h1 className='titulo'>Yesica Windecker</h1>
            <p className='parrafo'>Hi, I'm a frontend developer. This is my portfolio. </p>
            <p className='parrafo'>I hope you find all the information you need here..</p>
           
             <Link to="/Service" type="botton" className='btn-neon'>
              <span id='span1'></span>
              <span id='span2'></span>
              <span id='span3'></span>
              <span id='span4'></span>
              Click Here

             </Link>



        </div>
  ) 
}

export { Hero }