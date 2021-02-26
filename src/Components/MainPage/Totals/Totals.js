import React from 'react';
import './Total.css'

function Totals(props) {
    return (

      <div className="TotalWrapper">
           
           <div className="row">

                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                        
                        <div className="set shadow-lg  bg-white rounded"> 
                          <h1 className="text-center">TOTAL CASES</h1>
                          <div className="text-center font text-info">{props.totalCases}</div>
                        </div>
                       </div>
                  
                       <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset0.6">

                          <div className="set shadow-lg  bg-white rounded"> 
                          <h1 className="text-center">ACTIVE CASES</h1>
                          <div className="text-center font text-warning">{props.activeCases}</div>
                          </div>
                      </div>
                  
                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                          
                          <div className="set shadow-lg  bg-white rounded">
                          <h1 className="text-center">TOTAL DEATHS</h1>
                          <div className="text-center font text-danger">{props.totalDeaths}</div>
                          </div>

                     </div>

                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                         
                          <div className="set shadow-lg  bg-white rounded"> 
                          <h1 className="text-center">NEW CASES</h1>
                          <div className="text-center font text-info">{props.newCases}</div>
                          </div>

                     </div>

                     <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                         
                         <div className="set shadow-lg  bg-white rounded">
                         <h1 className="text-center">CRITICAL</h1>
                         <div className="text-center font text-warning">{props.seriousCritical}</div>
                         </div>

                     </div>
                  
                    <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                         
                         <div className="set shadow-lg  bg-white rounded">
                         <h1 className="text-center ">NEW DEATHS</h1>
                         <div className="text-center font text-danger">{props.newDeaths}</div>
                         </div>

                    </div>

                  
           </div>

      </div>

    );
}

export default Totals;