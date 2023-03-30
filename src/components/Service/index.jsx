import React from 'react';
import './Service.css';

const Service = () => {
   return(
      <>
      <div><h2>What can I do for you?</h2></div>
<div className="contenedorservices">
  <div className="column">
  <i className="bi bi-pc-display-horizontal icons"></i>
        <h3>Frontend</h3>
    <ul>
     <li>Html</li>
     <li>Css</li>
     <li>Javascript</li>
     
    </ul>
  </div>
  <div className="column">
  <i className="bi bi-router icons"></i>
  <h3>Backend</h3>
    <ul>
     <li>Express</li>
     <li>Node.js</li>
     <li>MongoDb</li>
     
    </ul>
  </div>
  <div className="column">
  <i className="bi bi-bootstrap icons"></i>
  <h3>Libraries</h3>
    <ul>
     <li>Bootstrap</li>
     <li>Chakra Ui</li>
     
    </ul>
  </div>
</div>
</>
        
  ) 
}

export { Service }