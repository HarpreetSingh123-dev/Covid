import React,{ useState, useEffect} from 'react';
import './FooterContinentStats.css'
//import axios from 'axios'

function FooterContinentStats(props) {

  const [ continentData , setContinentData ] = useState(props.data)  

  const [ dataToDisplay , setDataToDisplay ] = useState('')

useEffect(()=>{


continentDisplayHandler(props.value)


},[props.value])    


function continentDisplayHandler(value){

    setDataToDisplay('')

    switch(value){

       case 'ASIA':

             setDataToDisplay(continentData[1])

       break;

       case 'AFRICA':
            
             setDataToDisplay(continentData[4])
       break;

       case 'AUSTRALIA':

             setDataToDisplay(continentData[5])

       break;

       case 'EUROPE':

             setDataToDisplay(continentData[3])
       break;


       case 'NORTH_AMERICA':
 
             setDataToDisplay(continentData[0])

       break;

       case 'SOUTH_AMERICA':

             setDataToDisplay(continentData[2])
       break;






    }



}

    return (
        <div>
             
             <div className="TotalWrapper">
           
           <div className="row">   

                  <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                     {console.log(props.data)}
                      <div className="set shadow-lg  bg-white rounded"> 
                          <h1 className="text-center">ACTIVE CASES</h1>
                          <div className="text-center font text-info">{dataToDisplay.activeCases}</div>
                     </div>
                  
                  </div>
               
                    <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset0.6">

                       <div className="set shadow-lg  bg-white rounded"> 
                          <h1 className="text-center">NEW CASES</h1>
                          <div className="text-center font text-warning">{dataToDisplay.newCases}</div>
                       </div>
                   
                   </div>
               
                   <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                       
                       <div className="set shadow-lg  bg-white rounded">
                           <h1 className="text-center">NEW DEATHS</h1>
                           <div className="text-center font text-danger">{dataToDisplay.newDeaths}</div>
                       </div>

                  </div>

                  <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                       
                       <div className="set shadow-lg  bg-white rounded">
                           <h1 className="text-center">TOTAL CASES</h1>
                           <div className="text-center font text-danger">{dataToDisplay.totalCases}</div>
                       </div>

                  </div>

                  <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                       
                       <div className="set shadow-lg  bg-white rounded">
                           <h1 className="text-center">TOTAL DEATHS</h1>
                           <div className="text-center font text-danger">{dataToDisplay.totalDeaths}</div>
                       </div>

                  </div>

                  <div className="col-lg-4 col-sm-12 col-md-6 col-12 offset-0.6">
                       
                       <div className="set shadow-lg  bg-white rounded">
                           <h1 className="text-center">TOTAL RECOVERED</h1>
                           <div className="text-center font text-danger">{dataToDisplay.totalRecovered}</div>
                       </div>

                  </div>



           </div>

          </div>   
            
        </div>
    );
}

export default FooterContinentStats;