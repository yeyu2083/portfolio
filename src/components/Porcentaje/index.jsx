import React from 'react';
import './Skills.css'

const Porcentaje = () => {
  const htmlPorcentaje = 80;
  const cssPorcentaje = 85;
  const jsPorcentaje = 70;
   return(
        <div>
              
          <div className="progress-bar">
            <div className="progress" style={{ width: `${htmlPorcentaje}%` }}></div>
            <span className="progress-text">{`${htmlPorcentaje}% HTML`}</span>
         
          </div>
          <div className="progress-bar">
          <div className="progress" style={{ width: `${cssPorcentaje}%` }}></div>
            <span className="progress-text">{`${cssPorcentaje}% CSS`}</span>
         

          </div>
          <div className="progress-bar">
          <div className="progress" style={{ width: `${jsPorcentaje}%` }}></div>
            <span className="progress-text">{`${jsPorcentaje}% JS`}</span>
         

          </div>

        </div>
  ) 
}

export { Porcentaje }