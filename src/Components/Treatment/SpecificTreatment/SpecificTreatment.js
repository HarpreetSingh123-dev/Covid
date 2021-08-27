import React, {useState, useEffect} from 'react';
import './SpecificTreatment.css'
import ReactTimeAgo from 'react-time-ago'
import Image1 from '../../../Images/treatment.jpg'
import axios from 'axios'

import Navbar from '../../Navbar/Navbar'
import Skeleton from '@yisheng90/react-loading';
import Footer from '../../Footer/Footer'

function SpecificTreatment(props) {

const [fetchedData , setFetchedData]  = useState('')    
    
const  [ links , setLinks ] = useState([])

const [loader , setLoader ] = useState(true)
    
useEffect(()=>{

    console.log(props.match.params)

    var fetchingParameters = props.match.params

    var trimedCategory = fetchingParameters.trimedCategory
    var trimedName = fetchingParameters.trimedName

    var options = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-vaccines/${trimedCategory}/${trimedName}`,
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log("data in specific treatment")  
        console.log(response.data);


        setFetchedData(response.data[0])
        setLinks(response.data[0].publishedResults)
      })
      
      .then(setLoaderState)
      
      .catch(function (error) {
          console.error(error);
      });

},[])    
    

function setLoaderState(){

    setLoader(false)

}

var display = null

    if(loader) {  
 
                display = <Skeleton rows={30} height={20} color="lightgray"></Skeleton>

               }

    else {

        display =( 
        
        
        <div className="specificTreatmentMarginSet">
            
         
             <div className="container-fluid" style={{width:'95%'}}>

                 <div className="row upperContent">

                     <div className="col-lg-8" style={{color:'white'}}>
                         <h1 style={{marginTop:'15px'}}>{fetchedData.description}</h1>
                         <h3 style={{marginTop:'15px'}}>{fetchedData.category}</h3>
                     </div>
                     

                     <div className="col-lg-4">

                     <img src={Image1} class="img-fluid" alt="Responsive image"></img>
                     </div>


                    <div className="container-fluid" style={{width:'98.5%'}}> 

                     <div className="row lowerContent">
                          
                          <div className="col-lg-8 col-sm-12" >

                              <table className="table">

                                      <tr> 

                                          
                                          <td><h4><b>TYPE :</b></h4></td>
                                          <td><h6>{fetchedData.treatmentVsVaccine}</h6></td>

                                      </tr>

                                      <tr>
                                          
                                          <td><h4><b>STAGE :</b></h4></td>
                                          <td><h6>{fetchedData.phase}</h6></td>

                                      </tr>


                                      <tr>
                                          
                                          <td><h4><b>FDA APPROVED :</b></h4></td>
                                          <td><h6>{fetchedData.FDAApproved}</h6></td>

                                      </tr>


                                      <tr> 
                                          
                                          <td><h4><b>FUNDER :</b></h4></td>
                                          <td><h6>{fetchedData.funder}</h6></td>

                                      </tr>

                                      <tr>

                                          <td><h4><b>LAST UPDATE :</b></h4></td>
                                          <td><h6><ReactTimeAgo date={fetchedData.lastUpdated} locale="en-US"></ReactTimeAgo></h6></td>

                                      </tr>

                                      <tr>

                                          <td><h4><b>PUBLISHED RESULTS :</b></h4></td>
                                          <td className="breakWords">{links.map((value,index)=>{
                                                   
                                                   if(value === 'undefined'){
                                                     
                                                     return <h6>No Published Results</h6> 
                                                   }

                                                   else{

                                                       var i = 1
                                                       return <a href={value}>Link{i+index} &nbsp;</a>
                                                   }

                                                   

                                          })}</td>

                                      </tr>

                                      <tr>

                                          <td><h4><b>DESCRIPTION :</b></h4></td>
                                          <td><h6>{fetchedData.developerResearcher}</h6></td>

                                      </tr>


                                      <tr>

                                          <td><h4><b>NEXT STEPS :</b></h4></td>
                                          <td className="breakWords"><h6>{fetchedData.nextSteps}</h6></td>

                                      </tr>

                                      <tr>

                                          <td><h4><b>CLINICAL TRIALS FOR COVID-19 :</b></h4></td>
                                          <td><h6>{fetchedData.clinicalTrialsForCovid19}</h6></td>

                                      </tr>

                                      <tr> 

                                          <td><h4><b>CLINICAL TRIALS FOR OTHER DISEASES :</b></h4></td>
                                          <td><h6>{fetchedData.clinicalTrialsForOtherDiseases}</h6></td>

                                      </tr>


                              </table>

                          </div>

                          <div className="col">


                          </div>

                     </div>
                     
                     </div>


                 </div>
        

            </div>

        </div> )

         }
    
    return (
        
        <div className="specificTreatment">
         
            <Navbar></Navbar>
         
             {display}

             <div className="footerSet">
           
                <Footer></Footer>      

             </div>

        </div>
    );
}

export default SpecificTreatment;