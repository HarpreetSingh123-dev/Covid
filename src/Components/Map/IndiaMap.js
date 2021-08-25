import React,{useState , useEffect} from 'react';
import axios from 'axios'
import ReactDatamaps from 'react-datamaps-india';
import { prop, values } from 'ramda';



function IndiaMap(props) {
    
console.log(props.update)

 
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
                                            <p><b>{value.name}</b></p>
                                            <p> Active Cases: &nbsp;{value.value}</p>
                                            <p> Deaths: &nbsp;{value.deaths}</p>
                                            <p> Delta Cases: &nbsp;{value.delta}</p>
                                            <p> Delta Deaths: &nbsp;{value.deltaDeaths}</p>
                                            <p> Recovered: &nbsp;{value.recovered}</p>
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