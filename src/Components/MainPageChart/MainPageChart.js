import React, { Component } from 'react';
import './MainPageChart.css'
import axios from 'axios'
import { Chart } from "react-google-charts"
import Skeleton from '@yisheng90/react-loading';
//import Loader from "react-loader-spinner";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class MainPageChart extends Component {
    

    constructor(props){

        super(props)


        this.state={

           totalCases:[],
           activeCases:[],
           criticalCases:[],
           ratio:[],
           data:[],

           totalCasesLoader:true,
           activeCasesLoader:true,
           criticalCasesLoader:true,
           ratioLoader:true
           
        }

        this.setDataModel= this.setDataModel.bind(this)
        this.setTotalCasesData = this.setTotalCasesData.bind(this)
        this.setActiveCasesData = this.setActiveCasesData.bind(this)
        this.setCriticalCasesData = this.setCriticalCasesData.bind(this)
        this.setRatioComparison = this.setRatioComparison.bind(this)

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

         .then(this.setRatioComparison)
      
      .catch(function (error) {
          console.error(error);
      });

}    

setDataModel(data){

   this.setState({data:data})
   
}


setTotalCasesData(){


    var recData = this.state.data;
    var k = "2020-02-20";
    var length = recData.elements;

    var finalObjectOne = [["Year", "Recovered Cases", "Reported Cases"]];

    for (var i = 1; i <= length; i++) {
      var c = new Date(k);

      var f = c.toISOString();

      var test = f.toString().slice(0, 10);

      var p = recData.data[test].total_cases;

      var r = recData.data[test].recovered;
      //console.log(recData.data[test].total_cases,test,i,length,lengthFinal)
      finalObjectOne.push([test, r, p]);

      var steps = length - 30;

      if (i == steps) {
        this.setState({ totalCases: finalObjectOne });
        //this.state.test2.push(finalObject)
        //totalChart =finalObjectOne
        return;
      } else {
        k = c.setDate(c.getDate() + 1);
      }

      this.setState({ totalCasesLoader: false });
    } 

}

setActiveCasesData(){
    var recData = this.state.data;
    var k = "2020-02-20";
    var length = recData.elements;

    var finalObjectTwo = [["Year", "Active Cases"]];

    for (var i = 1; i <= length; i++) {
      var c = new Date(k);

      var f = c.toISOString();

      var test = f.toString().slice(0, 10);

      var p = recData.data[test].active_cases;

      finalObjectTwo.push([test, p]);

      var steps = length - 30;

      if (i == steps) {
        this.setState({ activeCases: finalObjectTwo });
        //this.state.test2.push(finalObject)
        return;
      } else {
        k = c.setDate(c.getDate() + 1);
      }

      this.setState({ activeCasesLoader: false });
    }
}

setCriticalCasesData(){

    var recData = this.state.data;
    var k = "2020-02-20";
    var length = recData.elements;

    var finalObjectThree = [["Year", "Critical Cases", "Deaths"]];

    for (var i = 1; i <= length; i++) {
      var c = new Date(k);

      var f = c.toISOString();

      var test = f.toString().slice(0, 10);

      var p = recData.data[test].critical;

      var g = recData.data[test].deaths;

      finalObjectThree.push([test, p, g]);

      var steps = length - 30;

      if (i == steps) {
        this.setState({ criticalCases: finalObjectThree });
        //this.state.test2.push(finalObject)
        return;
      } else {
        k = c.setDate(c.getDate() + 1);
      }

      this.setState({ criticalCasesLoader: false });
    }


}


setRatioComparison(){

    
    var recData = this.state.data;
    var k = "2020-02-20";
    var length = recData.elements;

    var finalObjectFour = [["Year", "Recovery Ratio", "Death Ratio"]];

    for (var i = 1; i <= length; i++) {
      var c = new Date(k);

      var f = c.toISOString();

      var test = f.toString().slice(0, 10);

      var p = recData.data[test].recovery_ratio;

      var g = recData.data[test].death_ratio;

      finalObjectFour.push([test, p, g]);

      var steps = length - 30;

      if (i == steps) {
        this.setState({ ratio: finalObjectFour });
        //this.state.test2.push(finalObject)
        return;
      } else {
        k = c.setDate(c.getDate() + 1);
      }

      this.setState({ ratioLoader: false });
    }

}


    render() {

        var a = null

           if(this.state.totalCasesLoader){
              a =(<Skeleton rows={12} color="lightgray"></Skeleton>)
              }
              
              else {
                   a = (<Chart
                   width={'100%'}
                   height={'450px'}
                   chartType="AreaChart"
                   loader={<div>Loading Chart</div>}
                   data={this.state.totalCases}
                   options={{  title: 'Total Cases', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                   
                   />)
                 }
    
        var b = null

            if(this.state.activeCasesLoader){
               b =(<Skeleton rows={12} color="lightgray"></Skeleton>)
             }
            
            else {
                 b = (<Chart
                   
                    width={'100%'}
                    height={'450px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
              
                    data={this.state.activeCases}
 
                    options={{  title: 'Active Cases', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                      
               />)
               }

        var c = null
            
        if(this.state.criticalCasesLoader){
            c=(<Skeleton rows={12} color="lightgray"></Skeleton>)
          }
         
         else {
              c= (<Chart
                   
                width={'100%'}
                height={'450px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
          
                data={this.state.criticalCases}

                options={{  title: 'Critical Cases', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                  
           />)
            }
            
        var d = null
             
        if(this.state.ratioLoader){
            d=(<Skeleton rows={12} color="lightgray"></Skeleton>)
          }
         
         else {
              d= (<Chart
                   
                width={'100%'}
                height={'450px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
          
                data={this.state.ratio}

                options={{  title: 'Recovery Ratio VS Death Ratio', hAxis: { title: 'Day', titleTextStyle: { color: '#333' } }, }}
                  
           />)
            }
         
        return (
            <div className="MainChart">
               
               <div className="Set shadow-lg rounded">
                
                   {a}
               
               </div>          

               <div className="Set shadow-lg rounded">

                  {b}

               </div>

               <div className="Set shadow-lg rounded">

               

                  {c}


               </div>

               <div className="Set shadow-lg rounded">

               {d}

               </div>
              
                        
          </div>

            
        );
    }
}

export default MainPageChart;