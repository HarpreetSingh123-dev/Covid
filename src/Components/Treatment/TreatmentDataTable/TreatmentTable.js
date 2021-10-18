import React, {useState,useEffect} from 'react';
import './TreatmentTable.css'
import ReactTimeAgo from 'react-time-ago'
import {Link} from 'react-router-dom'
import Skeleton from '@yisheng90/react-loading';

import DataTable from "react-data-table-component";



const columns = [
  
    {   name:  <h5 className="text-center"><b>Sr No</b> </h5>,
        selector: "number",
        center: true,
        compact:true

      },
  
    {
    name:  <h5 className="text-center"><b>TREATMENTS</b></h5>,
    selector: "treatments",
    //allowOverflow: "True",
    center: true,
    
  
  },

  {
    name: <h5 className="text-center">CATEGORY</h5>,
    selector: "category",
    center: true,
    sortable:true
    
    
  },

  {
    name: <h5 className="text-center">STAGE</h5>,
    selector: "stage",
    center: true,
    
    
  },

  {
    name: <h5 className="text-center">COMPANIES</h5>,
    selector: "companies",
    center: true,
   
    
  },

  {
    name: <h5 className="text-center">ANTICIPATED NEXT STEPS</h5>,
    selector: "nextsteps",
    center: true,
    
    
  },

  {
    name: <h5 className="text-center">FDA APPROVED INDICATIONS</h5>,
    selector: "fdaindications",
    center: true,
    
    
  },

  {
    name: <h5 className="text-center">FUNDER</h5>,
    selector: "funder",
    center: true,
    
    
  },

  {
    name: <h5 className="text-center">LAST UPDATE</h5>,
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

    const [ universalFinalTableData , setUniversalFinalTableData] = useState()
 
    const [ finalTableData , setFinalTableData] = useState()


  useEffect(()=>{

         setData(props.data)
  
  },[props.data])
   


function setData(data) {

    var finalObject = []

    var dataToSet = data

    for(var i = 0 ; i<dataToSet.length ; i++){

        var fdaApproved 
 
        var funder 
      
        if(dataToSet[i].FDAApproved === "undefined"){ fdaApproved = "No Data"}

           else { fdaApproved = dataToSet[i].FDAApproved}


        if(dataToSet[i].funder === "undefined"){funder = "No Data"}

           else { funder = dataToSet[i].funder }
  
         var obj ={

            number : i+1,
            treatments : <Link style={{color:'white'}} to={`/Treatment-Information/${dataToSet[i].trimedCategory}/${dataToSet[i].trimedName}`}>{dataToSet[i].description}</Link>,
            category: dataToSet[i].category,
            stage: dataToSet[i].phase,
            companies:<Link style={{color:'white'}} to={`/Treatment-Information/${dataToSet[i].trimedCategory}/${dataToSet[i].trimedName}`}>{dataToSet[i].developerResearcher}</Link>,
            nextsteps:dataToSet[i].nextSteps,
            fdaindications:fdaApproved,
            funder:funder,
            update:<ReactTimeAgo date={dataToSet[i].lastUpdated.slice(0, 10)} locale="en-US"></ReactTimeAgo>
         }

         finalObject.push(obj)

    }

    setFinalTableData(finalObject)

    setUniversalFinalTableData(finalObject)
}  

function searchFind(value){

     //console.log(value)

       if(value === ""){

                 console.log('no value')

                setFinalTableData(universalFinalTableData)
          }

  else {
 
          var a = finalTableData.filter((data)=>{

              if (data.treatments.props.children.toLowerCase().includes(value.toLowerCase()) ){
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
                           <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search Based On Treatment Type" onChange={ (event)=>{searchFind(event.target.value)} }></input>
                              
                      </div>

                    <DataTable

                           title={<h3><b>{props.title.heading}</b></h3>}

                           highlightOnHover={true}
                           pointerOnHover={true}
                           fixedHeader={true}
                           highlightOnHover={true}
                           responsive={true}
                           //dense={true}
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

           </div>
    );
}

export default TreatmentTable;