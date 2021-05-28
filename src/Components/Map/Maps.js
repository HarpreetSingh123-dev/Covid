import React, { Component } from 'react';
import { Chart } from "react-google-charts"

import axios from 'axios'
const R = require('ramda');

class Maps extends Component {

  constructor(props){

    super(props)

    this.state={

     
      countryData:[],
      mapDataSet:''

    }


    this.fetchDataFromBackend=this.fetchDataFromBackend.bind(this)
    this.setCountryStats=this.setCountryStats.bind(this)
   // this.setCountries=this.setCountries.bind(this)
    this.setFinalMapData=this.setFinalMapData.bind(this)

    //this.test = this.test.bind(this)
  }

componentDidMount(){

      this.fetchDataFromBackend()

  }

fetchDataFromBackend(){

//////////////First axios request for fetching latest country stats/////////////////////////  
 
  var options1 = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    headers: {
      'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  

////////////////////////////////////////////////////////////////////////////////////////////
/////////////Second axios request for fetching list of Countries///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

  axios.request(options1).then(function (response) {
    
    const countries = response.data
    //console.log(countries.afghanistan)
    return countries
    
  }).then(this.setCountryStats)

    .then(this.setFinalMapData)
    
    .catch(function (error) {
               console.error(error);
     });
//////////////////////////////////////////////////////////////////////////////////////

}



setCountryStats(countries){

 //console.log(countries)
  this.setState({countryData:countries})

}
/*
setCountries(country){

      var a =[]  
      var countrySet = country

      countrySet.map((p)=>{
               
                  var b = p.Country

                  //var c = b.charAt(0).toLowerCase() + b.slice(1);

                  a.push(b)
              })



      this.setState({countries:a})


}*/


setFinalMapData(){

  console.log("in final map data")
  
  console.log("countries data below")
  
  console.log(this.state.countryData)
  
  var countryData = this.state.countryData

  var length = this.state.countryData.length

  var finalSet =[['Country', 'Total Cases' , 'New Cases']]



  for(var i=2 ; i<length ;i++){

   // console.log(countryData[i].Country, length)
   
    var country = countryData[i].Country
    var totalCases =  countryData[i].TotalCases
    var newCases = countryData[i].NewCases

    var d = [country,totalCases,newCases]

    finalSet.push(d)

  }
  this.setState({mapDataSet:finalSet})
  console.log(this.state.mapDataSet)

}



  render() {
 
 
    return (
 
 
       <div>
          <h1>Map Component</h1>      

          <Chart
                 width={'100%'}
                 height={'90%'}
                 chartType="GeoChart"
                 data={
                  this.state.mapDataSet
                      }
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
               mapsApiKey="YOUR_KEY_HERE"
               rootProps={{ 'data-testid': '1' }} />
            </div>
        );
    }
}

export default Maps;