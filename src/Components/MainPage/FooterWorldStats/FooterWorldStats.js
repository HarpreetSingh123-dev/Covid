import React from 'react';
import './FooterWorldStats.css'

function FooterWorldStats(props) {
    return (


        <div>
            
            <div className="TotalWrapper">
           
              <div className="row">   
  
                     <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                        
                         <div className="set shadow-lg  bg-white rounded"> 
                             <h1 className="text-center">TOTAL RECOVERED</h1>
                             <div className="text-center font text-info">{props.totalRecovered}</div>
                        </div>
                     
                     </div>
                  
                       <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset0.6">

                          <div className="set shadow-lg  bg-white rounded"> 
                             <h1 className="text-center">NEW RECOVERED</h1>
                             <div className="text-center font text-warning">{props.newRecovered}</div>
                          </div>
                      
                      </div>
                  
                      <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                          
                          <div className="set shadow-lg  bg-white rounded">
                              <h1 className="text-center">DEATHS PER MILLION</h1>
                              <div className="text-center font text-danger">{props.deathsPerMillion}</div>
                          </div>

                     </div>



              </div>

             </div>   
        
        
        
        
        
        </div>


    );
}

export default FooterWorldStats;