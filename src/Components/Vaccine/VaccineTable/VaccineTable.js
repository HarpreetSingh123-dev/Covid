import React, {useState,useEffect} from 'react';
import './VaccineTable.css'
import {Link} from 'react-router-dom'
import Skeleton from '@yisheng90/react-loading';

import DataTable from "react-data-table-component";



const columns = [
  
    {   name:  <h6 className="text-center"><b>Sr No</b> </h6>,
        selector: "number",
        center: true,
        compact:true

      },
  
    {
    name:  <h6 className="text-center"><b>COMPANY</b></h6>,
    selector: "company",
    //allowOverflow: "True",
    center: true,
    
  
  },

  {
    name: <h6 className="text-center">CATEGORY</h6>,
    selector: "category",
    center: true,
    sortable:true
    
    
  },

  {
    name: <h6 className="text-center">PHASE</h6>,
    selector: "phase",
    center: true,
    
    
  },

  {
    name: <h6 className="text-center">DESCRIPTION</h6>,
    selector: "description",
    center: true,
   
    
  },

  {
    name: <h6 className="text-center">ANTICIPATED NEXT STEPS</h6>,
    selector: "nextsteps",
    center: true,
    
    
  },

  {
    name: <h6 className="text-center">FDA APPROVED INDICATIONS</h6>,
    selector: "fdaindications",
    center: true,
    
    
  },

  {
    name: <h6 className="text-center">FUNDER</h6>,
    selector: "funder",
    center: true,
    
    
  },

  {
    name: <h6 className="text-center">LAST UPDATE</h6>,
    selector: "update",
    center: true,
   
    
  },

];

const customStyles = {
    headCells: {
      style: {
        backgroundColor: "dimgrey",
      },
    },

    /*rows:{

       style:{
           backgroundColor:'red',
           display:'flex',
           justifyContent:'flex-start'

       }

    }*/
  };

function TreatmentTable(props) {
    
    var table = null

    const [ universalFinalTableData , setUniversalFinalTableData] = useState()
 
    const [ finalTableData , setFinalTableData] = useState()


  useEffect(()=>{

         setData(props.data)
  
  },[props.data])
   


function setData(data) {

    var finalObject = []

    var dataToSet = data

    for(var i = 0 ; i<dataToSet.length ; i++){
  
         var obj ={

            number : i+1,
            company : <Link style={{color:'white'}} to={`/Treatment-Information/${dataToSet[i].trimedCategory}/${dataToSet[i].trimedName}`}>{dataToSet[i].developerResearcher}</Link>,
            category: dataToSet[i].category,
            phase: dataToSet[i].phase,
            description:<Link style={{color:'white'}} to={`/Treatment-Information/${dataToSet[i].trimedCategory}/${dataToSet[i].trimedName}`}>{dataToSet[i].description}</Link>,
            nextsteps:dataToSet[i].nextSteps,
            fdaindications:dataToSet[i].FDAApproved,
            funder:dataToSet[i].funder,
            update:dataToSet[i].lastUpdated.slice(0, 10)
         }

         finalObject.push(obj)

    }

    
    setFinalTableData(finalObject)

    setUniversalFinalTableData(finalObject)
}  



function searchFind(value){

      if(value === ""){
              //console.log('no value')
            setFinalTableData(universalFinalTableData)
          }

          else {
 
            var a = finalTableData.filter((data)=>{
  
                if (data.company.props.children.toLowerCase().includes(value.toLowerCase()) ){
                    console.log("triggered")
                    return data
                   }
                   //console.log(data.treatments.props.children.toLowerCase().includes(value.toLowerCase()))
       
                 })
           
                 setFinalTableData(a)
          }  



}


/* Below we are rendering table component based on props */
 if(props.loaderState){
          table = <Skeleton rows={25} height={20} color="lightgray"></Skeleton>
  }

   else{

          table =  <div>

                         <div class="input-group input-group-sm mb-3">
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search Based On Company" onChange={ (event)=>{searchFind(event.target.value)} }></input>
                         </div>

                    <DataTable

                           title={<h3><b>{props.title.heading}</b></h3>}

                           highlightOnHover={true}
                           pointerOnHover={true}
                           fixedHeader={true}
                           highlightOnHover={true}
                           responsive={true}
                           dense={true}
                           subHeader={true}
                           fixedHeader={true}
                           theme={"dark"}
                           subHeaderAlign={"left"}
                           subHeaderComponent={<h6 style={{color:'white'}}>For more information, click on specific treatment</h6>}
                           fixedHeaderScrollHeight={"500px"}
                           columns={columns}
                           data={finalTableData} 
                           customStyles={customStyles}
                           >

                  </DataTable>

                  </div>
       }

    return (
      
            <div>

                
            
               {table}

              {console.log(finalTableData)}
           </div>
    );
}

export default TreatmentTable;