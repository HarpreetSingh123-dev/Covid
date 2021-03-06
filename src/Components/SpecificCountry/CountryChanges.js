import React from 'react';
import './CountryChanges.css'
import Skeleton from '@yisheng90/react-loading';
function Totals(props) {


  var a = null 

  if(props.loader){

   a =( <Skeleton rows={8} height={14} color="lightgray"></Skeleton> )
  }

  else {

    a =(<div>
           
           <div className="row">

                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                        
                        <div className="set shadow-lg  bg-white rounded"> 
                          <h3 className="text-center">TOTAL CASES</h3>
                          <div className="text-center font text-info">{props.totalCases}</div>
                        </div>
                       </div>
                  
                       <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset0.6">

                          <div className="set shadow-lg  bg-white rounded"> 
                          <h3 className="text-center">ACTIVE CASES</h3>
                          <div className="text-center font text-warning">{props.activeCases}</div>
                          </div>
                      </div>
                  
                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                          
                          <div className="set shadow-lg  bg-white rounded">
                          <h3 className="text-center">DEATHS</h3>
                          <div className="text-center font text-danger">{props.totalDeaths}</div>
                          </div>

                     </div>

                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                         
                          <div className="set shadow-lg  bg-white rounded"> 
                          <h3 className="text-center">TESTED</h3>
                          <div className="text-center font text-info">{props.tested}</div>
                          </div>

                     </div>

                     <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                         
                         <div className="set shadow-lg  bg-white rounded">
                         <h3 className="text-center">RECOVERED</h3>
                         <div className="text-center font text-warning">{props.recovered}</div>
                         </div>

                     </div>
                  
                    <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                         
                         <div className="set shadow-lg  bg-white rounded">
                         <h3 className="text-center ">CRITICAL</h3>
                         <div className="text-center font text-danger">{props.critical}</div>
                         </div>

                    </div>

                  
           </div>

       </div>)
  }
    
  return (

      <div className="TotalWrapper">
           
            {a}
 
      </div>

    );
}

export default Totals;