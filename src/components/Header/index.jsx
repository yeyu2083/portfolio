import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
   return(
    
         <div className='contenedorheader background-image'>
           <img src=".././avatar.jpg" alt="" className='image'/>
              <h1>Developer</h1>
              <nav>
      
                 <Link to="/bio">Bio</Link>
                 <Link to="/skills">Skills</Link>
                 <Link to="/projects">Projects</Link>
      
              </nav>
      
              <div className='contenedoriconos'>
                  <a href="https://www.instagram.com/yesi.windecker/" ><i className="bi bi-instagram"></i></a>
                  <a href="https://www.facebook.com/yesitani" ><i className="bi bi-facebook"></i></a>
                  <a href="https://twitter.com/YWindecker" ><i className="bi bi-twitter"></i></a>
                  <a href="https://github.com/yeyu2083" ><i className="bi bi-github"></i></a>
                  <a href=" https://www.linkedin.com/in/yesica-windecker-19a156259/" ><i className="bi bi-linkedin"></i></a>
                 
                 
             </div>
         </div>
  ) 
}

export { Header } 