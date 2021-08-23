import React,{useState , useEffect} from 'react';
import axios from 'axios'
import ReactDatamaps from 'react-datamaps-india';
import { prop, values } from 'ramda';



function IndiaMap(props) {
    
console.log(props.update)

    //const [ fetchedData , setFetchedData ] = useState('')

    //const [ indiaMapData , setIndiaMapData] = useState('')

   

/*
  useEffect(()=>{
   
     
    var options = {
        method: 'GET',
        url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
        headers: {
          'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log("in india map")  
        //console.log(response.data.state_wise['Maharashtra']);
        setFetchedData(response.data.state_wise)
        return response.data.state_wise
        //console.log(response.data.state_wise['Maharashtra']);
       })

         .then(setData) 
      
        
        .catch(function (error) {
          console.error(error);
      });


      
  },[props.update])

function test(){



    
}


  function objectMaker(statee , activeCases){

    return {

         [statee]:{

            value: activeCases
         }
    }
  }
/*
function test(data){

    console.log(" in test")
    console.log(data)
  setFetchedData(data)
}
*/
/*
  function setData(data){

    console.log("in set data")
    
    console.log(fetchedData)
    var finalSetData = {}

    var data = fetchedData


    Object.entries(data).map(([type, d])=>{

      //  console.log(type,d.active)

       var d = objectMaker(type , d.active)

       console.log("d below")
       console.log(d)
       
       Object.assign(finalSetData,d)

      // finalSetData.push(d)
    })

    console.log("finnnn")

    console.log(finalSetData)

    setIndiaMapData(finalSetData)
    
  }
*/
 
    return (
        
        <div>

                      <ReactDatamaps 
                             
                             regionData={props.update}
                                                            
                             mapLayout={{
                                       hoverTitle: "Count",
                                       noDataColor: "#D36418",
                                       borderColor: "#ffffff",
                                       hoverBorderColor: "pink",
                                       hoverColor: "green",
                                       hoverTitle: 'Count',
                                       
                                       }}

                                       

                            hoverComponent={({ value }) => {
                                
                                return (    <div>
                                            <p>{value.name}</p>
                                            <p> Active Cases: &nbsp;{value.value}</p>
                                            </div>
                                        );
                                      }}    
                               

                     ></ReactDatamaps>
{console.log("props below")}

{console.log(props.update)}
        </div>
    );
}

export default IndiaMap;