import React from 'react';
import { Porcentaje } from '../Porcentaje';
import './Skill.css'



const Skills = ({porcentaje}) => {
   return(
        <div className='contenedorskills'>
          <h2>Skills</h2>
         <Porcentaje porcentaje={porcentaje} />
        </div>
  ) 
}

export { Skills }