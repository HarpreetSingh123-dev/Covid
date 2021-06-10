import React, { Component } from 'react';
import './SpecificCountryChart.css'
import axios from 'axios'
import Skeleton from '@yisheng90/react-loading';
import { Chart } from "react-google-charts"

class SpecificCountryCharts extends Component {

 constructor(props){

    super(props)

    this.state={

        dataSet:[],

        newCasesChart:"",
        newDeathsChart:[],
        totalCasesChart:[],
        totalDeathsChart:[],
        loader:true
    }    

this.fetchData=this.fetchData.bind(this)
this.setData= this.setData.bind(this)
this.setNewCasesChart=this.setNewCasesChart.bind(this)
this.setNewDeathsChart=this.setNewDeathsChart.bind(this)
this.setTotalCasesChart=this.setTotalCasesChart.bind(this)
this.setTotalDeathsChart=this.setTotalDeathsChart.bind(this)

}

/////////////////////////////////////////////////////////////////////////
componentDidMount(){
      this.fetchData()
 }

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
 componentDidUpdate(prevProps) {
    if (this.props.t.type != prevProps.t.type) {
      console.log("change detected in chart");
      this.fetchData();
    }
  }
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
 fetchData(){

    var country = this.props.t.type

    var options = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/${country}`,
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
      
        var data = response.data

        return data

    }).then(this.setData)
   
      .then(this.setNewCasesChart)

      .then(this.setNewDeathsChart)

      .then(this.setTotalCasesChart)

      .then(this.setTotalDeathsChart)

      .catch(function (error) {
        console.error(error);
    });
 }
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////


setData(data){
    
   this.setState({dataSet:data})
}

setNewCasesChart(){
   
    var set =[['Date', 'New Cases']]
    
    var data = this.state.dataSet

    /////////////very imp concept of array below(pass by reference)////////////////////
    let r = [...data]
   //////////////////////////////////////////////////////////////////////////////////
    var reverseSet = r.reverse()

    console.log("reverse set length")
    console.log(reverseSet.length)
  
    reverseSet.map((value)=>{

      var date = value.date
      var newCases = value.new_cases

      var p = [date,newCases]
      set.push(p)
    })
    
  this.setState({newCasesChart:set})
}
    
setNewDeathsChart(){

  var set =[['Date', 'New Deaths']]
    
  
  var data = this.state.dataSet

  var r = [...data]
  var reverseSet = r.reverse()

  console.log("reverse set length")
  console.log(reverseSet.length)

  reverseSet.map((value)=>{

    var date = value.date
    var newDeath = value.new_deaths

    var p = [date,newDeath]
    set.push(p)
  })
  
this.setState({newDeathsChart:set})

}

setTotalCasesChart(){

  var set =[['Date', 'Total Cases']]
    
  
  var data = this.state.dataSet

  var r = [...data]
  var reverseSet = r.reverse()

  reverseSet.map((value)=>{

    var date = value.date
    var newCase = value.total_cases

    var p = [date,newCase]
    set.push(p)
  })
  
this.setState({totalCasesChart:set})


}

setTotalDeathsChart(){

  var set =[['Date', 'Total Deaths']]
    
  
  var data = this.state.dataSet

  var r = [...data]
  var reverseSet = r.reverse()

  reverseSet.map((value)=>{

    var date = value.date
    var newDeath = value.total_deaths

    var p = [date,newDeath]
    set.push(p)
  })
  
this.setState({totalDeathsChart:set, loader:false})


}


 render() {
        

   var a = null

   if(this.state.loader){

     a=(<Skeleton rows={8} height={14} color="lightgray"></Skeleton>)
   }

   else{

    a= (  <div>
            
            <h2 className="text-center">Trends Of Covid Cases</h2>
             <hr className="rule"></hr>
             <div className="row">
               {/* <h1>Charts Here{this.props.t.type}</h1>*/}

               <div className="col-lg-6 tt">
                <Chart
                     width={'100%'}
                     height={'350px'}
                     chartType="AreaChart"
                     loader={<div>Loading Chart</div>}
                     data={this.state.newCasesChart}

                     options={{
                               title: 'New cases since last six months',
                               hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                               vAxis: { minValue: 0 },
                               // For the legend to fit, we make the chart area smaller
                              //chartArea: { width: '60%' },
                              // lineWidth: 25
                             }}
                             // For tests 
                             rootProps={{ 'data-testid': '1' }}
                      />
            </div>

            <div className="col-lg-6 tt">

            <Chart
                     width={'100%'}
                     height={'350px'}
                     chartType="AreaChart"
                     loader={<div>Loading Chart</div>}
                     data={this.state.newDeathsChart}

                     options={{
                               title: 'New deaths last six months',
                               hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                               vAxis: { minValue: 0 },
                               // For the legend to fit, we make the chart area smaller
                             // chartArea: { width: '60%'},
                              // lineWidth: 25
                             }}
                             // For tests 
                             rootProps={{ 'data-testid': '1' }}
                      />
            </div>

            <div  className="col-lg-6 tt">

            <Chart
                     width={'100%'}
                     height={'350px'}
                     chartType="AreaChart"
                     loader={<div>Loading Chart</div>}
                     data={this.state.totalCasesChart}

                     options={{
                               title: 'Total cases of country for last six months',
                               hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                               vAxis: { minValue: 0 },
                               // For the legend to fit, we make the chart area smaller
                             // chartArea: { width: '60%'},
                              // lineWidth: 25
                             }}
                             // For tests 
                             rootProps={{ 'data-testid': '1' }}
                      />
            </div>

            <div  className="col-lg-6 tt">

            <Chart
                     width={'100%'}
                     height={'350px'}
                     chartType="AreaChart"
                     loader={<div>Loading Chart</div>}
                     data={this.state.totalDeathsChart}

                     options={{
                               title: 'Total deaths of country for last six months',
                               hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                               vAxis: { minValue: 0 },
                               // For the legend to fit, we make the chart area smaller
                             // chartArea: { width: '60%'},
                              // lineWidth: 25
                             }}
                             // For tests 
                             rootProps={{ 'data-testid': '1' }}
                      />


            </div>

            </div>


         </div>
    )
   }



   return (
             <div className="chartSet" >
             {a}
            </div>
        );
    }
}

export default SpecificCountryCharts;