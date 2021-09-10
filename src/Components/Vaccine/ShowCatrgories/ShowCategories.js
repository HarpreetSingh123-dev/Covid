import React ,{useEffect,useState} from 'react';
import './ShowCategories.css'

function ShowCategories(props) {
   
   
    return (

        <div>
            
            <div className="smallScreenSideNavigationButtons">
           
               <button type="button" class="close" aria-label="Close" onClick={props.close}>
                  <span aria-hidden="true">&times;</span>
               </button>


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
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("REPLICATING BACTERIAL VECTOR")}}>REPLICATING BACTERIAL VECTOR</button>
                           <button  type="button" class="btn btn-primary" onClick={()=>{props.clicked("VIRUS-LIKE PARTICLE")}}>VIRUS-LIKE PARTICLE</button>
           
                     </div>
                </div>
                    
         </div>
        </div>
    );
}

export default ShowCategories;