import React from 'react';
import './ShowCountries.css'
function ShowCountries(props) {
    
    
    return (
        
             <div className="showCountryWrapper">

                 <div>
 
                    <ul class="nav nav-pills nav-stacked">
                        <li class="nav-item">
                           <a class="nav-link active">{props.country}</a>
                        </li>
                   </ul>    

                </div> 
            
            
            
            </div>
    
    );
}

export default ShowCountries;