import React, {useState,useEffect} from 'react';
import './TreatmentTable.css'
import {Link} from 'react-router-dom'
import Skeleton from '@yisheng90/react-loading';

import DataTable from "react-data-table-component";



const columns = [
  
    {   name:  <h6 className="text-center"><b>Sr No</b> </h6>,
        selector: "number",
        center: true,
      },
  
    {
    name:  <h6 className="text-center"><b>TREATMENTS</b></h6>,
    selector: "treatments",
    //allowOverflow: "True",
    center: true,
  },

  {
    name: <h6 className="text-center">CATEGORY</h6>,
    selector: "category",
    center: true,
  },

  {
    name: <h6 className="text-center">STAGE</h6>,
    selector: "stage",
    center: true,
  },

  {
    name: <h6 className="text-center">COMPANIES</h6>,
    selector: "companies",
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
  };

function TreatmentTable(props) {
    
    var table = null
 
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
            treatments : <Link to={`/Treatment-Information/${dataToSet[i].trimedCategory}/${dataToSet[i].trimedName}`}>{dataToSet[i].description}</Link>,
            category: dataToSet[i].category,
            stage: dataToSet[i].phase,
            companies:dataToSet[i].developerResearcher,
            nextsteps:dataToSet[i].nextSteps,
            fdaindications:dataToSet[i].FDAApproved,
            funder:dataToSet[i].funder,
            update:dataToSet[i].lastUpdated.slice(0, 10)
        }

        finalObject.push(obj)

    }

    setFinalTableData(finalObject)
}  

/* Below we are rendering table component based on props */
 if(props.loaderState){
          table = <Skeleton rows={25} height={20} color="lightgray"></Skeleton>
  }

   else{

          table = <DataTable

                           title={<h3><b>{props.title.heading}</b></h3>}

                           highlightOnHover={true}
                           pointerOnHover={true}
                           fixedHeader={true}
                           highlightOnHover={true}
                           
                           subHeader={true}
                           fixedHeader={true}
                           theme={"dark"}
                           subHeaderAlign={"left"}
                           fixedHeaderScrollHeight={"500px"}
                           columns={columns}
                           data={finalTableData} 
                           customStyles={customStyles}
                           >

                  </DataTable>
       }

    return (
      
            <div>
            
               {table}

           </div>
    );
}

export default TreatmentTable;