import React from 'react';
import './Countries.css'

function Countries(props) {
    return (
        
        
        <div>
            
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

export default Countries;