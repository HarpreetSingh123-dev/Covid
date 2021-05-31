import React, { Component } from 'react';
import { Chart } from "react-google-charts"
import './Map.css'

import Skeleton from '@yisheng90/react-loading'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import axios from 'axios'
const R = require('ramda');

class Maps extends Component {

  constructor(props){

    super(props)

    this.state={

     
      countryData:[],
      mapDataSet:'',
      loader:true
      

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



//////////////////////////////////////////////////////////////////////////////////////
}


setCountryStats(countries){


  this.setState({countryData:countries})

}


setFinalMapData(){

  console.log("in final map data")
  
  console.log("countries data below")
  
  console.log(this.state.countryData)
  
  var countryData = this.state.countryData

  var length = this.state.countryData.length

  var finalSet =[['Country', 'Total Cases' , 'Total Deaths']]



  for(var i=2 ; i<length ;i++){

    var country = countryData[i].Country

    if(country==='USA'){

      country = 'United States'

    }

    var totalCases =  countryData[i].TotalCases
    var totalDeaths = countryData[i].TotalDeaths
    
    var d = [country,totalCases,totalDeaths]

    finalSet.push(d)

  }
  this.setState({mapDataSet:finalSet})
  console.log(this.state.mapDataSet)
  this.setState({loader:false})

}



  render() {
 
    var a = null

    if(this.state.loader){
   
       a =(<Skeleton rows={30} color="lightgray"></Skeleton>)

    }

    else{

      a =(<Chart
        width={'98%'}
        height={'92%'}
        chartType="GeoChart"
        data={
         this.state.mapDataSet
             }
            // Note: you will need to get a mapsApiKey for your project.
           // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey=""
        rootProps={{ 'data-testid': '1' }} />)
    }
 
    return (
 
 
       <div className="worldMap">

          <Navbar mapPage={true}></Navbar>   
               
          {a}
                
          <div className="footerSet">
              <Footer></Footer>
          </div>

      </div>
      
      );
    }
}

export default Maps;