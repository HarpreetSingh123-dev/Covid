import React from 'react';
import {useState , useEffect} from 'react'
import axios from 'axios'
import Skeleton from '@yisheng90/react-loading';
import { Chart } from "react-google-charts"
import { keys } from 'ramda';


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

    whatToDisplay = (<Chart
                          width={'100%'}
                          height={'400px'}
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={data[0]}
                          options={{
                                   hAxis: {
                                            title: 'Date',
                                          },
                                   vAxis: {
                                            title: 'Cases',
                                          },
                                   series: {
                                            1: { curveType: 'function' },
                                           },
                                  }}
                           rootProps={{ 'data-testid': '2' }}
                     />




     )

  }

    return (
        
              <div className="container">
         
                  <h2 className="text-center">Trends Of Last 30 Days</h2>
                  
                      <hr className="rule"></hr>
                 
                         <div>
                             {whatToDisplay}
                         </div>
                           {console.log("to check data")}
                           {console.log(data)}
             </div>
    );
}

export default LowerChart;