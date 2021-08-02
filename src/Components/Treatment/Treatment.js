import React, {useEffect,useState,useRef} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import './Treatment.css'

import Skeleton from '@yisheng90/react-loading';

import SmallScreenCategories from './ShowCategories/ShowCategories'

import SideNavigationLinks from './SideNavigationLinks/SideNavigationLinks'
import UpperNavigationLinks from './UpperNavigationLinks/UpperNavigationLinks.';
import TreatmentJumbotron from './TreatmentJumbotron/TreatmentJumbotron';
import Table from '../Treatment/TreatmentDataTable/TreatmentTable'


import Navbar from '../Navbar/Navbar'


function Treatment(props) {

///Below state is used in switch statement to filter based on category//////////////    
const [ universalTreatmentData , setUniversalTreatmentData] = useState()

////Below state is used to store initial rendered data///////////////////////
const [allData , setAllData]  = useState([])   

////Below two states are used to set stae of category box when screen is of small size (1)/////////
const [showCategory , setShowCategory] = useState('')

const [ showCategoryButton , setShowCategoryButton] = useState(true)
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////Below state is used to handle heading box over the table when treatment type is changed//////
const [jumboHeading , setJumboHeading] = useState()
////////////////////////////////////////////////////////////////

const [ loader , setLoader] = useState(true)

useEffect(()=>{

    

    var options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-treatment',
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
                
        setAllData(response.data)

        setUniversalTreatmentData(response.data)


             var heading = "ALL-TREATMENTS"
             var subHeading ="Here you can find all of the developing or approved treatments and drugs in every stage. You can sort the table based on each columns or search for a unique treatment name."
             var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}

             setJumboHeading(jumbotronHeadingsData)
             setLoader(false)
       })
        .catch(function (error) {
        console.error(error);
    })
    
    console.log("mounted")

    
},[])


/* Below logic is used to set state of category box when screen is of small size (1)*/
var categoryBox = null

    var categoryBoxButton = null

       if(showCategory){
             categoryBox = (<SmallScreenCategories close={()=>setCategoryButtonState(false,true)}></SmallScreenCategories>)
         }

       if(showCategoryButton){
            categoryBoxButton =  (<button type="button" className="btn btn-info" style={{width:'100%'}} onClick={()=> setCategoryButtonState(true,false)}>Click To Choose Category </button>)
        } 
        
        function setCategoryButtonState(a,b){

                setShowCategory(a)
                setShowCategoryButton(b) 
            }
/*///////////////////////////////////////////////////////////////////////////////////////// */



/*//////////////////////////////////////////////////////////////////////////////////////////////*/

function testClicked(e){

    setLoader(true)

    var type = e

    switch(type){

        case "FDA APPROVED" :
            
             
           var options = {
            method: 'GET',
            url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-fda-approved-treatment',
            headers: {
              'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
              'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
          };

          axios.request(options).then(function (response) {
            
            setAllData(response.data)

             var heading = "FDA-APPROVED"
             var subHeading ="it means that the U.S. Food and Drug Administration has determined that the benefits of the product outweigh the known risks for the intended use."

             var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}

             setJumboHeading(jumbotronHeadingsData)
             setLoader(false)

            }).catch(function (error) {
               console.error(error);
             });


             break;


        case "ALL TREATMENTS":     


            var options = {
               method: 'GET',
               url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-treatment',
                headers: {
                  'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
                  'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
                }
             };


            axios.request(options).then(function (response) {
               
                setAllData(response.data)

                var heading = "ALL-TREATMENTS"
                var subHeading ="Here you can find all of the developing or approved treatments and drugs in every stage. You can sort the table based on each columns or search for a unique treatment name."
                var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}
   
                setJumboHeading(jumbotronHeadingsData)
                setLoader(false)

            }).catch(function (error) {
                console.error(error);
            });

            break;



        case "Antibodies" :
            
          var data = universalTreatmentData
          
            var reqData = data.filter((value)=>{

                return value.category === 'Antibodies'

            })

               setAllData(reqData)

               var heading = "ANTIBODIES"
                var subHeading ="Antibodies are a key component of the body’s natural immune response to invading pathogens. In case of Covid-19, the antibodies can directly bind to viral proteins and prevent the virus from replicating. There are 2 ways to provide the patient with exogenous antibodies. One way is by using blood plasma from people who are recovering from COVID-19 to transfer the antibodies that they have produced to someone else. This method is called convalescent plasma therapy. Another is to manufacture and mass-produce specific antibodies against the virus that could supplement the body’s immune response. The resulting medications are called monoclonal antibodies."
                var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}
   
                setJumboHeading(jumbotronHeadingsData)
                setLoader(false)

           break;


        case "Antivirals" :

           var data = universalTreatmentData

           var reqData = data.filter((value)=>{

               return value.category === 'Antivirals'

            })

           setAllData(reqData)

            var heading = "ANTIVIRALS"
            var subHeading ="There are many medications which have shown whether in vivo or in vitro antiviral effects against SARS-COV2. These drugs either destroy the virus directly or prevent the virus from attachment, infecting the cells or replication."
            var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}

            setJumboHeading(jumbotronHeadingsData)
            setLoader(false)

            
        
        break;


        case "Cell-based therapies":

            var data = universalTreatmentData

            var reqData = data.filter((value)=>{
 
                return value.category === 'Cell-based therapies'
 
             })
 
            setAllData(reqData)
 
             var heading = "CELL-BASED-THERAPIESS"
             var subHeading ="In this method, some human cell lineages are prepared or cultured in lab. Infusing these cells into a covid-19 patient can boost immune system or prevent lethal inflammatory process during the disease course. Examples so far include Natural killer (NK), Dendritic cells (DN), and exosomes. In addition Mesenchymal stem cells (MSCs) due to their pro/anti-inflammatory and immune-modulatory behavior have been promising in moderate to severe stages of the disease when the lethal cytokine storm is about to begin."
             var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}
 
             setJumboHeading(jumbotronHeadingsData)
             setLoader(false)


        break;


        case "RNA-based treatments":

            var data = universalTreatmentData

            var reqData = data.filter((value)=>{
 
                return value.category === 'RNA-based treatments'
 
             })
 
            setAllData(reqData)
 
             var heading = "RNA-BASED"
             var subHeading ="This method is a branch of a novel therapeutic approach called Nucleic acid-based therapies. In addition to mRNA, we have several other types of RNA which are able to carry instructions for making proteins, help to turn genes on and off, aid chemical reactions, slice and dice other RNAs, and even build proteins. Most RNA therapies can be sorted into one of three broad categories: those that target nucleic acids (either DNA or RNA), those that target proteins, and those that encode proteins. RNA-based therapies like RNAi (RNA interference), siRNAs (small interfering RNA) and RNA aptamers, Ribozymes and ASOs (antisense oligonucleotides) target and neutralize the crucial components of the virus-like specific mRNA molecules, viral proteins like E (envelope), M (membrane), or N (nucleocapsid), or SARS helicase, etc."
             var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}
 
             setJumboHeading(jumbotronHeadingsData)
             setLoader(false)

        break;


        case "Device":

            var data = universalTreatmentData

            var reqData = data.filter((value)=>{
 
                return value.category === 'Device'
 
             })
 
            setAllData(reqData)
 
             var heading = "DEVICE"
             var subHeading ="Some devices are introduced for decreasing the lethal consequences of covid-19. These include Extracorporeal Blood Purification devices that are able to clean inflammatory cytokines from blood, Devices for directly inhaling Nitric Oxide, Artificial Heart pump in those who have Right heart failure due to pulmonary emboli, vagus nerve stimulation device to alleviate respiratory distress in some patients, etc."
             var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}
 
             setJumboHeading(jumbotronHeadingsData)
             setLoader(false)

        break;

        case "Scanning compounds to repurpose" :

            var data = universalTreatmentData

            var reqData = data.filter((value)=>{
 
                return value.category === 'Scanning compounds to repurpose'
 
             })
 
            setAllData(reqData)
 
             var heading = "SCANNING-COMPOUNDS-TO-REPURPOSE"
             var subHeading ="Multiple research teams and institutes have systematically scanned all present drug molecules that can theoretically affect SARS-COV2 pathogenesis. These systematic scanning attempts were conducted on drugs either in clinical phase or FDA approved. Such attempts have led to some promising therapies like remdesivir, Lopinavir, Hydroxychloroquie, Baricitinib, etc. This section provides the description of these scans."
             var jumbotronHeadingsData = {heading : heading,subHeading: subHeading}
 
             setJumboHeading(jumbotronHeadingsData)
             setLoader(false)


        break;




    }

       
}

    return (
        
        <div className="Treatment">

            <Navbar treatmentPage={true}></Navbar>
           
              <div className="treatmentMarginSet container-fluid">
               
                <div className="row">

 
                    <div className="col-lg-2 col-md-2 col-sm-12 testCol">
                         
                        <div className="categoryScroll">
                         
                           <div className="categories"> 

                              <div className="fullScreen">
                                <SideNavigationLinks clicked ={testClicked}></SideNavigationLinks>
                              </div>

                              <div className="smallScreen">

                                    {categoryBoxButton}

                                    {categoryBox}


                              </div>

                         </div> 
                        
                       </div>
                    
                    </div>

                    <div className="col-lg-10 col-md-10 col-sm-12 testCol">

                         <div className="row">
                          
                            <UpperNavigationLinks></UpperNavigationLinks>
                      
                         </div>

                         <div className="row">
                           
                            <TreatmentJumbotron  data={jumboHeading} loaderState={loader}></TreatmentJumbotron>

                         </div>
                     
                         <div className="row">
                           
                           <div style={{width:'100%'}}>
                               <Table data={allData} loaderState={loader}></Table>
                           </div>
                         </div>
                       
                             {console.log(allData)}
                    </div>


                </div>

        
             </div>

        </div>
    );
}

/*const mapStateToProps = state =>{

    return {

        allTreatmentData:state.treatment
    }

}

const mapActionsToProps = dispatch =>{

    return {

           fetchAllTreatmentsData: () => dispatch({type:'FETCH_All_TREATMENTS_DATA'}),

           clearAllData : () => dispatch({type:'CLEAR_ALL_DATA'}),

           forTest : () => dispatch({type:"TEST"})



    }


}*/

//export default connect(mapStateToProps,mapActionsToProps) (Treatment);

export default Treatment