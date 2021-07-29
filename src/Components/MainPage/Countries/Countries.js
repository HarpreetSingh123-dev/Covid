import React from 'react';
import {Link} from 'react-router-dom'
import './Countries.css'

function Countries(props) {
    return (
        
        
        <div className="CountryWrapper">
            
            <div>
 
                    <ul class="nav nav-pills nav-stacked">
                       
                        <li class="nav-item">
                       
                         
                              <a class="nav-link"> <Link  to={`/Country/${props.country}/${props.threeDigitCode}`}  ><b>{props.country.toUpperCase()}</b></Link></a>
                          
                       
                       </li>
                   </ul>    
      
            </div> 

             

            
        </div>
        
    );
}

export default Countries;