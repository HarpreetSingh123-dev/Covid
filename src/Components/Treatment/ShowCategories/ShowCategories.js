import React from 'react';
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
              
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>ALL TREATMENTS</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>FDA APPROVED</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>ANTIBODIES</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>ANTIVIRALS</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>CELL-BASED THERAPIES</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>RNA BASED</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>DEVICE</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>SCANNING COMPOUND TO REPURPOSE</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>CLINICAL</button>
                           <button value="all" type="button" class="btn btn-primary"    style={{backgroundColor:'steelblue',fontWeight:'bold'}} onClick={props.clicked}>PRE CLINICAL</button>
           
                     </div>
                </div>
                    
         </div>
        </div>
    );
}

export default ShowCategories;