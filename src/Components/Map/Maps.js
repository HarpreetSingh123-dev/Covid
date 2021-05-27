import React, { Component } from 'react';
import { Chart } from "react-google-charts"
import Ramda from 'ramda'
import axios from 'axios'


class Maps extends Component {

  constructor(props){

    super(props)

    this.state={

      countries:[],
      countryData:[]

    }


    this.fetchDataFromBackend=this.fetchDataFromBackend.bind(this)
    this.setCountryStats=this.setCountryStats.bind(this)
    this.setCountries=this.setCountries.bind(this)
    this.setFinalMapData=this.setFinalMapData.bind(this)
  }

componentDidMount(){

      this.fetchDataFromBackend()

  }

fetchDataFromBackend(){

//////////////First axios request for fetching latest country stats/////////////////////////  
  var options1 = {
    method: 'GET',
    url: 'https://coronavirus-map.p.rapidapi.com/v1/summary/latest',
    headers: {
      'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
      'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com'
    }
  };

////////////////////////////////////////////////////////////////////////////////////////////

/////////////Second axios request for fetching list of Countries///////////////////////////
var options2 = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
  headers: {
    'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
    'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
};




//////////////////////////////////////////////////////////////////////////////////////////


  axios.request(options1).then(function (response) {
    
    const countries = response.data.data.regions
    //console.log(countries.afghanistan)
    return countries
    
  }).then(this.setCountryStats)
    .catch(function (error) {
               console.error(error);
     });
//////////////////////////////////////////////////////////////////////////////////////

 axios.request(options2).then(function (response) {
  //console.log("countries below")    
//  console.log(response.data);
   
   const country = response.data

   return country
 
    }).then(this.setCountries)

      .then(this.setFinalMapData)
      .catch(function (error) {
          console.error(error);
    })

}



setCountryStats(countries){

 console.log(countries)
  this.setState({countryData:countries})

}

setCountries(country){

      var a =[]  
      var countrySet = country

      countrySet.map((p)=>{
               
                  var b = p.Country

                  var c = b.charAt(0).toLowerCase() + b.slice(1);

                  a.push(c)
              })



      this.setState({countries:a})


}


setFinalMapData(){

  console.log(this.state.countryData)
  console.log(this.state.countries)

}



  render() {
 
 
    return (
 
 
       <div>
          <h1>Map Component</h1>      

          <Chart
                 width={'100%'}
                 height={'90%'}
                 chartType="GeoChart"
                 data={[
                         ['Country', 'Cases' , 'Total'],
                         ['Germany', 200, 600],
                         ['United States', 300, 600],
                         ['Brazil', 400 , 600],
                         ['Canada', 500, 600],
                         ['France', 600 , 600],
                         ['india', 700, 600],
                         ['Pakistan', 1700, 600],
                         ['suriname', 1700, 600]
                      ]}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
               mapsApiKey="YOUR_KEY_HERE"
               rootProps={{ 'data-testid': '1' }} />
            </div>
        );
    }
}

export default Maps;