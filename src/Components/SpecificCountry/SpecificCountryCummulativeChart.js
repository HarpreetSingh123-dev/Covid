import React from 'react';
import axios from 'axios'
import { useState,useEffect } from 'react';
import './SpecificCountryCummulativeChart.css'
import Skeleton from '@yisheng90/react-loading';
import { Chart } from "react-google-charts"
import { set } from 'ramda';

function SpecificCountryCummulativeChart(props) {


  const [chartData, setChartData ]  = useState([])  

  const [ canChartBeMade , setCanChartBeMade ] = useState([])
  
  const [loader , setLoader ] = useState([true])

  useEffect(()=>{
    setCanChartBeMade([]) 
    setChartData([])
    var config = {
        method: 'get',
        url: `https://api.covid19api.com/total/dayone/country/${props.country}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
          //console.log("cummulative data below")
       // console.log(response.data);

        return response.data
      }).then(setData)
      .catch(function (error) {
        
        setCanChartBeMade(false)
        setLoader(false)
        console.log(error);
      });

  },[props.country])


function setData(data){

console.log("in set data function")
console.log(data)

 if(data.length === 0){
    
    setCanChartBeMade(false)
     return
 
    }
 
    setCanChartBeMade(true)

 var finalObject =[["Date" , "Confirmed" , "Recovered" , "Active" , "Deaths"]]

      data.map((value)=>{

            var date 
            var confirmed
            var recovered
            var active
            var deaths

            date = value.Date.slice(0, 10)
            confirmed = value.Confirmed
            recovered = value.Recovered
            active = value.Active
            deaths = value.Deaths

            var object = [date, confirmed,recovered,active,deaths ]

            finalObject.push(object)
      })


      setChartData(finalObject)
      setLoader(false)
  }


var a = null

if(loader){

  a =(<Skeleton rows={12} color="lightgray"></Skeleton>)

}  
  
else if(canChartBeMade){

        a=   (    <div className="cummulativeCharts">
                  <h2 className="text-center">Cumulative Trends Of Covid Cases In {props.country}</h2>
                  <hr className="rule"></hr>   
               
                <div className="chart">
                 <Chart
                  width={'100%'}
                  height={'700px'}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={chartData}
                  options={{
                            hAxis: {
                                     title: 'Time',
                                   },
                            vAxis: {
                                    title: 'Cases',
                                   },
                            series: {
                                    1: { curveType: 'function' },
                                    },
                           }
                        }
                 rootProps={{ 'data-testid': '2' }}
              /> 
              </div>
              </div>
               )

} else{

     a = (<div></div>)
}


    return (
        <div>
          
          {a}

        </div>
    );
}

export default SpecificCountryCummulativeChart;