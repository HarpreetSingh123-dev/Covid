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
              
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>ALL TREATMENTS</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>FDA APPROVED</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>ANTIBODIES</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>ANTIVIRALS</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>CELL-BASED THERAPIES</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>RNA BASED</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>DEVICE</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>SCANNING COMPOUND TO REPURPOSE</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>CLINICAL</button>
                           <button  type="button" class="btn btn-primary"  style={{fontWeight:'bold'}}>PRE CLINICAL</button>
           
                     </div>
                </div>
                    
         </div>
        </div>
    );
}

export default ShowCategories;