import React,{useState , useEffect} from 'react';
import axios from 'axios'
import './Vaccine.css'
import Navbar from '../Navbar/Navbar'
import VaccineSideNavigationLinks from './SideNavigationLinks/SideNavigationLinks'
import VaccineUpperNavigationLinks from './UpperNavigationLinks/UpperNavigationLinks'

import VaccineSmallScreenCategories from './ShowCatrgories/ShowCategories'
import VaccineJumbotron from './VaccineJumbotron/VaccineJumbotron'

import VaccineTable from './VaccineTable/VaccineTable'


function Vaccine(props) {

  const [ universalVaccineData ,  setUniversalVaccineData ] = useState()

  const [ vaccineData , setAllVaccineData ] = useState([])

  const [ jumboHeading , setJumboHeading ] = useState('')

  const [ loader , setLoader ] = useState(true)

  const [showCategory , setShowCategory] = useState('')

  const [showCategoryButton , setShowCategoryButton] = useState(true)


useEffect(()=>{


  var options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines',
    headers: {
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36'
    }
  };
  
       axios.request(options).then(function (response) {
           console.log(response.data);
     
           setAllVaccineData(response.data)
           setUniversalVaccineData(response.data)
           setLoader(false)

           var heading = "ALL-VACCINES"
           var subHeading = "Here you can find all of the developing or approved vaccines in every phase. You can sort the table based on each columns or search for a unique vaccine name." 
           var jumbotronHeadingData = {heading:heading, subHeading:subHeading}
           setJumboHeading(jumbotronHeadingData)

  }).catch(function (error) {
    console.error(error);
  });



},[])  


/* logc for side navigation links for small screen  */
function setCategoryButtonState(a,b){
                
       setShowCategory(a)
       setShowCategoryButton(b) 
}

var categoryBox = null

var categoryBoxButton = null

       if(showCategory){
             categoryBox = (<VaccineSmallScreenCategories close={()=>setCategoryButtonState(false,true)} /*clicked ={testClicked} buttonClicked={whichButtonClicked}*/></VaccineSmallScreenCategories>)
         }

       if(showCategoryButton){
            categoryBoxButton =  (<button type="button" className="btn btn-info" style={{width:'100%'}} onClick={()=> setCategoryButtonState(true,false)}>Click To Choose Category </button>)
        }
/*///////////////////////////////////////////////// */


/**//////////////////////////////////////////////////////////// */

function changeCategory(e){

  console.log(e)

  setLoader(true)

  switch(e){

         case 'ALL VACCINES':

               var data = universalVaccineData

               setAllVaccineData(data)

               var heading = "ALL-VACCINES"
               var subHeading = "Here you can find all of the developing or approved vaccines in every phase. You can sort the table based on each columns or search for a unique vaccine name." 
               var jumbotronHeadingData = {heading:heading, subHeading:subHeading}
               setJumboHeading(jumbotronHeadingData)

               setLoader(false)

         break;

         case 'FDA APPROVED':

              var options = {
                        method: 'GET',
                        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines',
                        headers: {
                                 'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
                                 'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36'
                            }
                     };

                     axios.request(options).then(function (response) {
                      //console.log(response.data);
                      setAllVaccineData(response.data)
                    }).catch(function (error) {
                      console.error(error);
                    });       

             
             var heading = "FDA-APPROVED"
             var subHeading = "It means that the U.S. Food and Drug Administration has determined that the benefits of the product outweigh the known risks for the intended use."
             var jumbotronHeadingData = {heading:heading, subHeading:subHeading}
             setJumboHeading(jumbotronHeadingData)

             setLoader(false)
        
             break;

         case 'RNA BASED':

         break;

         case 'DNA BASED':

         break;

         case 'INACTIVATED VIRUS':

         break;

         case 'LIVE ATTENUATED VIRUS':

         break;

         case 'REPLICATING VIRAL VECTOR':

         break;

         case 'NON-REPLICATING VIRAL VECTOR':

         break;

         case 'PROTIEN SUBUNIT':

         break;




  }

}

/**////////////////////////////////////////////////////////////// */
 
  return (

         <div className="Vaccine">

           <Navbar></Navbar>

              <div className="mainContent">

                 <div className="container-fluid">

                    <div className="row">

                       <div className="col-lg-2 col-md-2 col-sm-12">
                       
                         <div className="vaccineCategoryScroll">
                         
                           <div className="vaccineCategories"> 

                              <div className="fullScreen">
                                 <VaccineSideNavigationLinks  clicked={changeCategory}></VaccineSideNavigationLinks>
                              </div>

                              <div className="smallScreen">

                                 {categoryBoxButton}

                                 {categoryBox}


                              </div>

                           </div> 

                          </div>   


                       </div>

                       <div className="col-lg-10 col-md-10 col-sm-12">

                            <div className="container-fluid">
                           
                                  <div className="row">

                                      <VaccineUpperNavigationLinks ></VaccineUpperNavigationLinks>
                   
                                  </div>

                                  <div className="row">

                                      <VaccineJumbotron  headings={jumboHeading} loaderState={loader}></VaccineJumbotron>

                                  </div>


                                  <div className="row">
                           
                                     <div style={{width:'100%'}}>
                               
                                       <VaccineTable data={vaccineData}  loaderState={loader}  title={jumboHeading} ></VaccineTable>
                            
                                     </div>
                         
                         </div>

                            </div>

                      </div>
                
                 </div>

              </div>
             
             </div>

         </div>
  );
}

export default Vaccine;