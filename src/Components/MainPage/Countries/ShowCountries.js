import React from 'react';
import {Link} from 'react-router-dom'
import './ShowCountries.css'
function ShowCountries(props) {
    
    
    return (
        
             <div className="showCountryWrapper">

                 <div>
 
                    <ul class="nav nav-pills nav-stacked">
                        <li class="nav-item">
                        <Link class="nav-link" to={`/Country/${props.country}/${props.threeDigitCode}`}><b>{props.country.toUpperCase()}</b></Link>
                        </li>
                   </ul>    

                </div> 
            
            
            
            </div>
    
    );
}

export default ShowCountries;