import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import Image1 from '../../Images/symbol1.jpg'

function Navbar(props) {
   
  var a 
  var b = null

  var c
  var d = null 

  if(props.mapPage){
             a = null
             b =   "fixed-top"
          }

  else {

        a = (<li className="nav-item active">
                 <Link to={'/Map'}className="nav-link">Map</Link>
             </li>
            )

        b =   "fixed-top"
      }


   if(props.newsPage){

          c = null
       }
      
     else {

     c =( <li className="nav-item active">
            <Link to={'/News'}className="nav-link">News</Link>
         </li> )

      }  
      
   return (
        <div className="navbarWrapper">
            
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${b}`}>
  
               <a className="navbar-brand">

               <img src={Image1} width="60" height="50" alt=""></img>
               </a>
  
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav mr-auto">
                     
                       <li className="nav-item active">
                        {/* <a className="nav-link">Home <span class="sr-only">(current)</span></a>*/}
                         <Link to={'/'}className="nav-link">Covid-Live</Link>
                       </li>
     
                       <li className="nav-item active">
                       {/* <a className="nav-link">Vaccine</a>*/}
                        <Link to={'/Vaccine'}className="nav-link">Vaccine</Link>
                       </li>
      
                       <li className="nav-item active">
                        {/* <a className="nav-link">Treatment</a>*/}
                         <Link to={'/Treatment'}className="nav-link">Treatment</Link>
                       </li>

                            {a}
                       

                            {c}

                       
                       <li className="nav-item active">
                        {/* <a className="nav-link">About</a>*/}
                         <Link to={'/About'}className="nav-link">About</Link>
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