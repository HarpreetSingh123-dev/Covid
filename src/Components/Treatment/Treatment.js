import React, {useEffect,useState,useRef} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import './Treatment.css'

import SmallScreenCategories from './ShowCategories/ShowCategories'

import SideNavigationLinks from './SideNavigationLinks/SideNavigationLinks'
import UpperNavigationLinks from './UpperNavigationLinks/UpperNavigationLinks.';
import TreatmentJumbotron from './TreatmentJumbotron/TreatmentJumbotron';
import Table from '../Treatment/TreatmentDataTable/TreatmentTable'


import Navbar from '../Navbar/Navbar'

function Treatment(props) {

const [allData , setAllData]  = useState([])   

const [showCategory , setShowCategory] = useState('')

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

        }).catch(function (error) {
        console.error(error);
    })
    

},[])



var a = null

 if(showCategory){

    a = (<SmallScreenCategories close={()=>setShowCategory(false)}></SmallScreenCategories>)
 }



function testClicked(e){

    console.log(e.target.value)
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

                                 <button type="button" className="btn btn-info" style={{width:'100%'}} onClick={()=> setShowCategory(true)}>Click To Choose Category </button>

                                    {a}


                              </div>

                         </div> 
                        
                       </div>
                    
                    </div>

                    <div className="col-lg-10 col-md-10 col-sm-12 testCol">

                         <div className="row">
                          
                            <UpperNavigationLinks></UpperNavigationLinks>
                      
                         </div>

                         <div className="row">
                           
                            <TreatmentJumbotron></TreatmentJumbotron>

                         </div>
                     
                         <div className="row">
                           
                            <Table></Table>

                         </div>
                       

                    </div>


                </div>

             {console.log("all data below")}
             {console.log(allData)}

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