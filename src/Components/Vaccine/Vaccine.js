import React,{useState , useEffect} from 'react';
import axios from 'axios'
import './Vaccine.css'
import Navbar from '../Navbar/Navbar'
import VaccineSideNavigationLinks from './SideNavigationLinks/SideNavigationLinks'
import VaccineUpperNavigationLinks from './UpperNavigationLinks/UpperNavigationLinks'

import VaccineSmallScreenCategories from './ShowCatrgories/ShowCategories'
import VaccineJumbotron from './VaccineJumbotron/VaccineJumbotron'

import VaccineTable from './VaccineTable/VaccineTable'
import { values } from 'ramda';


function Vaccine(props) {

  const [ universalVaccineData ,  setUniversalVaccineData ] = useState()

  const [ vaccineData , setAllVaccineData ] = useState([])

  const [ jumboHeading , setJumboHeading ] = useState('')

  const [ loader , setLoader ] = useState(true)

  const [ showCategory , setShowCategory] = useState('')

  const [ showCategoryButton , setShowCategoryButton] = useState(true)

  const [ whichButtonClicked , setWhichButtonClicked ] = useState('')


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
             categoryBox = (<VaccineSmallScreenCategories close={()=>setCategoryButtonState(false,true)} clicked ={changeCategory}  buttonClicked={whichButtonClicked}></VaccineSmallScreenCategories>)
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
               setWhichButtonClicked('ALL VACCINES')
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
             setWhichButtonClicked('FDA APPROVED')
             setLoader(false)
        
             break;

         case 'RNA BASED':

              var data = universalVaccineData

              var reqData = data.filter((value)=>{

                   return value.category ==="RNA-based vaccine"

              })

              setAllVaccineData(reqData)
              var heading = "RNA-BASED"
              var subHeading = "This is a form of nucleic acid vaccine technology. This is the newest technology in vaccine producing industry and has been only used for making corona virus vaccines. Instead of a virus, a protein antigen, or a virus expressing the protein, nucleic acid coding for the antigen is injected. mRNA responsible for corona spike protein is encased in a lipid coat and injected into the body. mRNA acts more directly but is less stable than DNA vaccines. Compared with the viral-vector platform, the mRNA provides the most specific and minimal immunogenic response which allows repeated administration of the vaccine."
              var jumbotronHeadingData={heading:heading , subHeading:subHeading}

              setJumboHeading(jumbotronHeadingData)
              setWhichButtonClicked('RNA BASED')
              setLoader(false)
         break;

         case 'DNA BASED':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

                 return value.category === "DNA-based"

             })

             setAllVaccineData(reqData)
             var heading = "DNA-BASED"
             var subHeading ="This is a form of nucleic acid vaccine technology. This is the newest technology in vaccine producing industry and has been only used for making corona virus vaccines. Instead of a virus, a protein antigen, or a virus expressing the protein, nucleic acid coding for the antigen is injected. DNA plasmid enters nucleus and is translated to mRNA for expression of protein. DNA based vaccines provide more stable and long-term immunity."
             var jumbotronHeadingData = {heading:heading , subHeading:subHeading}

             setJumboHeading(jumbotronHeadingData)
             setWhichButtonClicked('DNA BASED')
             setLoader(false)

         break;

         case 'INACTIVATED VIRUS':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

                  return value.category === "Inactivated virus"
             })

             setAllVaccineData(reqData)

             var heading = "INACTIVATED-VIRUS"
             var subHeading= "Whole inactivated virus is in fact the dead virus which induces strong antibody response. The problem is that this platform needs large quantities of virus for production. The examples so far are vaccines for Influenza, rabies hepatitis A."
             var jumbotronHeadingData = {heading:heading, subHeading:subHeading}

             setJumboHeading(jumbotronHeadingData)
             setWhichButtonClicked('INACTIVATED VIRUS')
             setLoader(false)


         break;

         case 'LIVE ATTENUATED VIRUS':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

               return value.category === "Live attenuated virus"

             })

             setAllVaccineData(reqData)

             var heading ="LIVE-ATTENUATED-VIRUS"
             var subHeading = "Attenuated live virus induces same response as natural infection but is not recommended for pregnant women and immunocompromised persons as it is possible that the weak virus develops the disease. The examples so far are vaccines for Measles, rubella, mumps, yellow fever and smallpox."
             var jumbotronHeadingData ={heading:heading, subHeading:subHeading}

             setJumboHeading(jumbotronHeadingData)
             setWhichButtonClicked('LIVE ATTENUATED VIRUS')
             setLoader(false)

         break;

         case 'REPLICATING VIRAL VECTOR':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

                return value.category === "Replicating viral vector"

             })

             setAllVaccineData(reqData)

             var heading = "REPLICATING-VIRAL-VECTOR"
             var subHeading = "The gene for a pathogen protein (most commonly the corona virus spike gene) is inserted into a different virus that can infect someone without causing disease. The safe virus serves as a ‘platform’ or ‘vector’ to deliver the protein that triggers an immune response. The safe virus is then injected as a vaccine. Some viral vectors replicate (reproduce) in the body and some do not."
             var jumbotronHeadingData = {heading:heading, subHeading:subHeading}

             setJumboHeading(jumbotronHeadingData)
             setWhichButtonClicked('REPLICATING VIRAL VECTOR')
             setLoader(false)


         break;

         case 'NON-REPLICATING VIRAL VECTOR':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

               return value.category === "Non-replicating viral vector"

             })

              setAllVaccineData(reqData)

              var heading = "NON-REPLICATING-VIRAL-VECTOR"
              var subHeading = "The gene for a pathogen protein (most commonly the corona virus spike gene) is inserted into a different virus that can infect someone without causing disease. The safe virus serves as a ‘platform’ or ‘vector’ to deliver the protein that triggers an immune response. The safe virus is then injected as a vaccine. Some viral vectors replicate (reproduce) in the body and some do not."
              var jumbotronHeadingData = {heading:heading, subHeading:subHeading}

              setJumboHeading(jumbotronHeadingData)
              setWhichButtonClicked('NON-REPLICATING VIRAL VECTOR')
              setLoader(false)

         break;

         case 'PROTIEN SUBUNIT':

            var data = universalVaccineData

            var reqData = data.filter((value)=>{

               return value.category === "Protein subunit"

            })

            setAllVaccineData(reqData)

            var heading = "PROTEIN-SUBUNIT"
            var subHeading = "This is a category of Protein-based vaccines. A protein-based vaccine is based on the synthetic peptides or recombinant antigenic proteins. A protein is extracted from the virus (alive or inactivated), purified, and injected as a vaccine. For coronavirus the S- Protein and its antigenic fragments are the prime targets for the institution of the subunit vaccine.The extracted proteins may be introduced directly into the body(protein - subunit vaccine) or may be placed on a lipid - like structure that mimics the virus(Virus - Like Particle or VLP).The problem is that memory for future responses is doubtful."
            var jumbotronHeadingData = {heading:heading,subHeading:subHeading}

            setJumboHeading(jumbotronHeadingData)
            setWhichButtonClicked('PROTIEN SUBUNIT')
            setLoader(false)


         break;

         case 'REPLICATING BACTERIAL VECTOR':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

                 return value.category === "Replicating bacterial vector"

             })

             setAllVaccineData(reqData)

             var heading = "REPLICATING-BACTERIAL-VECTOR"
             var subHeading = "The gene for a pathogen protein (most commonly the corona virus spike gene) is inserted into a bacterium that can infect someone without causing disease. The safe bacteria serve as a ‘platform’ or ‘vector’ to deliver the protein that triggers an immune response. This platform is not popular among covid-19 vaccine platforms."
             var jumbotronHeadingData = {heading:heading,subHeading:subHeading}

             setJumboHeading(jumbotronHeadingData)
             setWhichButtonClicked('REPLICATING BACTERIAL VECTOR')
             setLoader(false)



         break;

         case 'VIRUS-LIKE PARTICLE':

             var data = universalVaccineData

             var reqData = data.filter((value)=>{

                return value.category === "Virus-like particle"

             })

             setAllVaccineData(reqData)

             var heading = "VIRUS-LIKE-PARTICLE"
             var subHeading = "This is a category of Protein-based vaccines. A protein-based vaccine is based on the synthetic peptides or recombinant antigenic proteins. A protein is extracted from the virus (alive or inactivated), purified, and injected as a vaccine. For coronavirus the S-Protein and its antigenic fragments are the prime targets for the institution of the subunit vaccine. The extracted proteins may be introduced directly into the body (protein-subunit vaccine) or may be placed on a lipid-like structure that mimics the virus (Virus-Like Particle or VLP). The problem is that memory for future responses is doubtful."
             var jumbotronHeadingData = {heading:heading,subHeading:subHeading}

             setJumboHeading(jumbotronHeadingData)
             setWhichButtonClicked('VIRUS-LIKE PARTICLE')
             setLoader(false)

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
                                 <VaccineSideNavigationLinks  clicked={changeCategory}  buttonClicked={whichButtonClicked}></VaccineSideNavigationLinks>
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