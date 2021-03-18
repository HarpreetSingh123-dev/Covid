import React from 'react';
import {Link} from 'react-router-dom'
import './ShowCountries.css'
function ShowCountries(props) {
    
    
    return (
        
             <div className="showCountryWrapper">

                 <div>
 
                    <ul class="nav nav-pills nav-stacked">
                        <li class="nav-item">
                        <a class="nav-link active">
                               <Link to={`/Country/${props.country}/${props.threeDigitCode}`} style={{color: "white"}} >{props.country}</Link>
                          </a>
                        </li>
                   </ul>    

                </div> 
            
            
            
            </div>
    
    );
}

export default ShowCountries;