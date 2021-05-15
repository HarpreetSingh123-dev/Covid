import React, { Component } from 'react';
import './MainPageChart.css'
import axios from 'axios'
import { Chart } from "react-google-charts"


class MainPageChart extends Component {
    

    constructor(props){

        super(props)


        this.state={

           totalCases:[],
           activeCases:[],
           criticalCases:[],
           data:[]
        }

        this.setDataModel= this.setDataModel.bind(this)
        this.setTotalCasesData = this.setTotalCasesData.bind(this)
        this.setActiveCasesData = this.setActiveCasesData.bind(this)
        this.setCriticalCasesData = this.setCriticalCasesData.bind(this)

    }
    
componentDidMount(){


    var options = {
        method: 'GET',
        url: 'https://coronavirus-map.p.rapidapi.com/v1/spots/summary',
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
         
      //  var k = "2020-01-21"
       // console.log("bar data below")
       
       //console.log(response.data.data[k]);

       const data = response.data

       return data

      }).then(this.setDataModel)
      
         .then(this.setTotalCasesData)

         .then(this.setActiveCasesData)

         .then(this.setCriticalCasesData)
      
      .catch(function (error) {
          console.error(error);
      });

}    

setDataModel(data){

   this.setState({data:data})
   
}


setTotalCasesData(){


    var recData = this.state.data
    var k = "2020-02-20"
    var length = recData.elements 

    var finalObjectOne =[['Year', 'Reported Cases', 'Recovered Cases']]
   
    for(var i=1; i<= length; i++){

        var c = new Date(k)

        var f= c.toISOString()

        var test  = f.toString().slice(0,10)

       var p = recData.data[test].total_cases

       var r = recData.data[test].recovered
        //console.log(recData.data[test].total_cases,test,i,length,lengthFinal)
        finalObjectOne.push([test,p,r])

        var steps = length - 30

        if(i==steps){
            this.setState({totalCases:finalObjectOne})
            //this.state.test2.push(finalObject)
            //totalChart =finalObjectOne
            return
        }

        else{
            k= c.setDate(c.getDate()+1)

        }
        
        
    } 

}

setActiveCasesData(){
    var recData = this.state.data
    var k = "2020-02-20"
    var length = recData.elements 


    var finalObjectTwo =[['Year', 'Active Cases']]

for(var i=1; i<= length; i++){

    var c = new Date(k)

    var f= c.toISOString()

    var test  = f.toString().slice(0,10)

   var p = recData.data[test].active_cases

  
  
    
    finalObjectTwo.push([test,p])

    var steps = length - 30

    if(i==steps){
        this.setState({activeCases:finalObjectTwo})
        //this.state.test2.push(finalObject)
        return
    }

    else{
        k= c.setDate(c.getDate()+1)

    }
    
    



}
}

setCriticalCasesData(){

    var recData = this.state.data
    var k = "2020-02-20"
    var length = recData.elements 


    var finalObjectThree =[['Year', 'Critical Cases' , 'Deaths']]

    
for(var i=1; i<= length; i++){

    var c = new Date(k)

    var f= c.toISOString()

    var test  = f.toString().slice(0,10)

   var p = recData.data[test].critical

   var g = recData.data[test].deaths
   
    finalObjectThree.push([test,p,g])

    var steps = length - 30

    if(i==steps){
        this.setState({criticalCases:finalObjectThree})
        //this.state.test2.push(finalObject)
        return
    }

    else{
        k= c.setDate(c.getDate()+1)

    }
    
    



}


}


    render() {
    
    
        return (
            <div className="MainChart">
               
               <div>
                
                   <Chart
                   
                         width={'100%'}
                         height={'450px'}
                         chartType="AreaChart"
                         loader={<div>Loading Chart</div>}
                   
                         data={this.state.totalCases}
  
                         options={{  title: 'Total Cases', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                           
                    />
               
               </div>          

               <div>

               <Chart
                   
                   width={'100%'}
                   height={'450px'}
                   chartType="AreaChart"
                   loader={<div>Loading Chart</div>}
             
                   data={this.state.activeCases}

                   options={{  title: 'Active Cases', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                     
              />

               </div>

               <div>

               <Chart
                   
                   width={'100%'}
                   height={'450px'}
                   chartType="AreaChart"
                   loader={<div>Loading Chart</div>}
             
                   data={this.state.criticalCases}

                   options={{  title: 'Critical Cases', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                     
              />




               </div>
                         
                         
                         {console.log(this.state)}
            </div>

            
        );
    }
}

export default MainPageChart;