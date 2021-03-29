import React from 'react';
import {Link} from 'react-router-dom'
import ShowCountries from '../MainPage/Countries/ShowCountries'


function Regions(props) {
    return (
        <div>
            
            <button type="button" class="close " aria-label="Close" onClick={props.clicked}>
                     <span aria-hidden="true">&times;</span>
                   </button>
                   
                  

                    {/*/////////////////////////////////////////////////////////////////*/} 

                    <div className="showMostViewed">

                              <h2 className="text-center" style={{color: "white"}} ><b>Most Viewed</b></h2>
                               <hr className="ruleThree"></hr>
                                <ul class="nav nav-pills nav-stacked">

                                   <li class="nav-item">
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/USA/usa`}><b>UNITED STATES</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/CANADA/can`}><b>CANADA</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/AUSTRALIA/aus`}><b>AUSTRALIA</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/UK/gbr`}><b>UNITED KINGDOM</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/INDIA/ind`}><b>INDIA</b></Link></a>
        
                                   </li>

                                </ul>    

                    </div>

                   {/*/////////////////////////////////////////////////////////////////*/}
   
                   <div> 
                              
                              <h2 className="text-center" style={{color: "white"}} ><b>Countries</b></h2>
                              <hr className="ruleThree"></hr>
                                 { props.countries.map((cntry)=>
                
                                     <ShowCountries
                                     country={cntry.Country}
                                     threeDigitCode={cntry.ThreeLetterSymbol}
                                             ></ShowCountries> ) 
                                            
                                    }

                          </div>  


        </div>
    );
}

export default Regions;