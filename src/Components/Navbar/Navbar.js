import React from 'react';
import './Navbar.css'
import Image1 from '../../Images/symbol1.jpg'

function Navbar(props) {
    return (
        <div className="navbarWrapper">
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
               <a className="navbar-brand" href="#">

               <img src={Image1} width="60" height="50" alt=""></img>
               </a>
  
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav mr-auto">
                     
                       <li className="nav-item active">
                         <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                       </li>
     
                       <li className="nav-item active">
                        <a className="nav-link" href="#">Vaccine</a>
                       </li>
      
                       <li className="nav-item active">
                         <a className="nav-link" href="#">Treatment</a>
                       </li>

                       <li className="nav-item active">
                         <a className="nav-link" href="#">Map</a>
                       </li>

                       <li className="nav-item active">
                         <a className="nav-link" href="#">News</a>
                       </li>

                       <li className="nav-item active">
                         <a className="nav-link" href="#">Articles</a>
                       </li>

                       <li className="nav-item active">
                         <a className="nav-link" href="#">About</a>
                       </li>
    
                </ul>

                <form className="form-inline my-2 my-lg-0">
                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
 
            </div>

       </nav>


  </div>
    );
}

export default Navbar;