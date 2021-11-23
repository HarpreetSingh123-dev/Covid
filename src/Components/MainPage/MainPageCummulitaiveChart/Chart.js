import React from 'react';
import {useState , useEffect} from 'react'
import axios from 'axios'
import Skeleton from '@yisheng90/react-loading';
import { Chart } from "react-google-charts"
import { keys } from 'ramda';
import './Chart.css'


function LowerChart(props) {

const [ loader , setLoader ] = useState(true)

const [ data , setData ] = useState([])



useEffect(()=>{

    var config = {
        method: 'get',
        url: 'https://corona.lmao.ninja/v2/historical/all',
        headers: {}
      };
      
      axios(config).then(function (response) {

        //console.log("chart data below after fetching")
        //console.log(JSON.stringify(response.data.cases));

        //for (let value of Object.keys(response.data.cases)) {
            
         //   console.log(value)
        //}
        return response.data
      
     }).then(setDataSet)
     
       .catch(function (error) {
        console.log(error);
      });

       setLoader(false)

},[])

/////////////////////////////////////////////////////////////////////
function setDataSet(data){

 console.log("in set data function")
 console.log(data)

    var cases = data.cases
    var deaths = data.deaths
    var recovered = data.recovered

    var cumulativeData =[]

    var casesToArray = Object.entries(cases)
    var deathsToArray = Object.entries(deaths)
    var recoveredToArray = Object.entries(recovered)

    converting(casesToArray,deathsToArray,recoveredToArray)

    function converting(a,b,c){

       var settingArray =[["Date","Cases","Deaths","Recovered"]]

       for( var i = 0 ; i<a.length ; i++ ){

             var l = a[i][0]

             var date = l
             var cases = a[i][1]
             
             var deaths = b[i][1]

             var recovered = c[i][1]

             var final = [date,cases,deaths,recovered]
             settingArray.push(final)
             
       }
     
       //console.log("to test setting array")
       //console.log(settingArray)
       cumulativeData.push(settingArray)

    }
    
   setData(cumulativeData)

}

//////////////////////////////////////////////////////////////////////
 var whatToDisplay = null

 if(loader){

     whatToDisplay =  <Skeleton rows={10} height={20} color="lightgray"></Skeleton>

  }

  else {

    whatToDisplay = (<div className="shadow-lg bg-white  rounded"><Chart
                          width={'80vmax'}
                          height={'420px'}
                          chartType="ScatterChart"
                          
                          loader={<div>Loading Chart</div>}
                          data={data[0]}
                          options={{
                                   title: 'Rise in cases since last month ',
                                   hAxis: {
                                            title: 'Date',
                                          },
                                   vAxis: {
                                            title: 'Cases',
                                          },
                                          

                                   trendlines: { 0: {type: 'exponential'} },
                                   
                                   animation: {
                                    startup: true,
                                    easing: 'linear',
                                    duration: 700,
                                  }
                                  }}
                           rootProps={{ 'data-testid': '2' }}
                     /></div>




     )

  }

    return (
              <div className="chartOuter">
               <div className="container-fluid">
                
                  <h2 className="text-center">Trends Of Last 30 Days</h2>
                  
                      <hr className="rule"></hr>
                 
                         <div className="chart">
                             {whatToDisplay}
                         </div>
                           {console.log("to check data")}
                           {console.log(data)}
             </div>
             </div>
             
    );
}

export default LowerChart;