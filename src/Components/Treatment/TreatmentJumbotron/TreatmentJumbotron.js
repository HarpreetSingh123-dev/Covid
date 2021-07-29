import React from 'react';
import './TreatmentJumbotron.css'

function TreatmentJumbotron(props) {
    return (
       
       <div className="treatmentJumbotron">
            <div class="jumbotron">
               <h4 class="display-4"><b>Hello, world!</b></h4>
                
                    <hr class="my-4" style={{background:'white'}}></hr>
                      <p><b>It uses utility classes for typography and spacing to space content out within the larger container.</b></p>
                       
             </div>
        
        </div>
    );
}

export default TreatmentJumbotron;