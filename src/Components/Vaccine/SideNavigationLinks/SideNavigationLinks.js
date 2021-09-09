import React from 'react';
import './SideNavigationLinks.css'

function SideNavigationLinks(props) {
    return (
       
            <div className="vaccineSideNavigationButtons">
            
             <h2 className="text-center" style={{color: "white",marginTop:"12px"}}><b>Categories</b></h2>

                 <hr className="ruleTreatment"></hr>

                      
                   <div className="outerWrapper">
                        
                      <div className="innerWrapper">
                           
                           
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("ALL VACCINES")}} >All VACCINES</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("FDA APPROVED")}}>FDA APPROVED</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("RNA BASED")}}>RNA BASED</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("DNA BASED")}} >DNA BASED</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("INACTIVATED VIRUS")}}>INACTIVATED VIRUS</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("LIVE ATTENUATED VIRUS")}}>LIVE ATTENUATED VIRUS</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("REPLICATING VIRAL VECTOR")}}>REPLICATING VIRAL VECTOR</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("NON-REPLICATING VIRAL VECTOR")}}>NON-REPLICATING VIRAL VECTOR</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("PROTIEN SUBUNIT")}}>PROTIEN SUBUNIT</button>
                           
           
                     </div>
                </div>
                   
         </div>
        
    );
}

export default SideNavigationLinks;