import React, { Component } from 'react';
import { Chart } from "react-google-charts"
//import DatamapsIndia from 'react-datamaps-india'
//import ReactDatamaps from "react-india-states-map";
import './Map.css'

import IndiaMap from './IndiaMap'
import Skeleton from '@yisheng90/react-loading'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import axios from 'axios'


class Maps extends Component {

  constructor(props){

    super(props)

    this.state={

     
      countryData:[],
      mapDataSet:'',
      loader:true,

      fetchedIndiaData:'',
      indiaMapData:'',

      showWorldMap:true,
      showIndiaMap:false,

      indiaButtonColor:'',
      worldButtonColor:'black'



    }


    this.fetchDataFromBackend=this.fetchDataFromBackend.bind(this)
    this.setCountryStats=this.setCountryStats.bind(this)
   // this.setCountries=this.setCountries.bind(this)
    this.setFinalMapData=this.setFinalMapData.bind(this)
    this.showIndiaMap = this.showIndiaMap.bind(this)
    this.showWorldMap = this.showWorldMap.bind(this)

    //this.test = this.test.bind(this)

    this.setIndiaMapData = this.setIndiaMapData.bind(this)
    this.setFinalIndiaMapData = this.setFinalIndiaMapData.bind(this)

    //this.objectMaker = this.objectMaker.bind(this)

  }

componentDidMount(){

      this.fetchDataFromBackend()

  }

fetchDataFromBackend(){

//////////////First axios request for fetching latest country stats of world map/////////////////////////  
 
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
/////////Second axios request for fetching india map data/////////////////////////

  var options2 = {
        method: 'GET',
        url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
        headers: {
              'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
              'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36'
               }
       };

  axios.request(options2).then(function (response) {
       console.log("in india map")  
      //console.log(response.data.state_wise['Maharashtra']);
         //setFetchedData(response.data.state_wise)
         return response.data.state_wise
        //console.log(response.data.state_wise['Maharashtra']);
 })

   .then(this.setIndiaMapData) 

   .then(this.setFinalIndiaMapData)

  
  .catch(function (error) {
    console.error(error);
});


//////////////////////////////////////////////////////////////////////////////////////
}

/* below functions are for world map*/
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
    //var activeCases = countryData[i].ActiveCases
    
    var d = [country,totalCases,totalDeaths]

    finalSet.push(d)

  }
  this.setState({mapDataSet:finalSet})
  console.log(this.state.mapDataSet)
  this.setState({loader:false})

}
/*///////////////////////////////////////////////////////////////////////*/

/* Below functions are for setting india map*/
setIndiaMapData(data){

  this.setState({fetchedIndiaData:data})

}

 

setFinalIndiaMapData(){

 
  function objectMaker(statee , activeCases , deaths , deltaCases , deltaDeaths , recovered){

    return {
  
         [statee]:{
  
            value: activeCases,
            deaths:deaths,
            delta: deltaCases,
            deltaDeaths: deltaDeaths,
            recovered:recovered
         }
    }
  }


    var finalSetData = {}

    var data = this.state.fetchedIndiaData
    console.log("data below")
    console.log(data)

    Object.entries(data).map(([type, d])=>{

      //  console.log(type,d.active)

       var d = objectMaker(type , d.active, d.deaths , d.deltaconfirmed , d.deltadeaths , d.recovered)

       Object.assign(finalSetData,d)

      // finalSetData.push(d)
    })

    console.log("finnnn")

    console.log(finalSetData)

    this.setState({indiaMapData:finalSetData})


}
/* //////////////////////////////////////////////////// */

/* Below functions are for button logic showing maps*/
showWorldMap(){

  this.setState({showWorldMap:true,showIndiaMap:false, worldButtonColor:'black', indiaButtonColor:'#6C757D'})
}


showIndiaMap(){

this.setState({showWorldMap:false,showIndiaMap:true , worldButtonColor:'#6C757D' , indiaButtonColor:'black'})

}

/*///////////////////////////////////////////////////////*/

  render() {
 
    var a = null

    if(this.state.loader){
   
       a =(  <div style={{position:'relative' , top:'100px'}}>
             <Skeleton rows={30}  color="lightgray"></Skeleton>)
             </div>  )
    }

    else{

        if(this.state.showWorldMap){

                  a =(
                  
                       <div className="worldMap">

                        <Chart
                             width={'98%'}
                             height={'92%'}
                             chartType="GeoChart"
                             data={this.state.mapDataSet}
                            // Note: you will need to get a mapsApiKey for your project.
                            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                            //mapsApiKey="AIzaSyBhMvalaSIEsFtlV76QplAaPI614tpVb4k"
                            //rootProps={{ 'data-testid': '1' }} 
                     />

                        <div className="footerSet">
           
                          <Footer></Footer>
   
                        </div>

                     </div>
                     )
                     
                     }

       if(this.state.showIndiaMap){

               a = (

                     <div className="container-fluid">
                    
                        <div style={{position:'relative', top:'90px', width:'100%'}}>
               
                                  <div className="container">  
                                      <IndiaMap update={this.state.indiaMapData}></IndiaMap>
                                  </div>
                          
                                  <div className="indiaMapFooterSet">
                          
                                  <div className="footerSet">
                                       <Footer></Footer>
                                  </div>
                          
                                  </div>
                 
                       </div>

                     
                     </div>
                    
               )

       }              
    }
 
    return (
 
      <div className="mapSet">
 
           <Navbar page={"Map"}></Navbar>   
            
                  <div className="mapButtonsSet">
                         
                         <button   type="button" className="btn btn-secondary" style={{backgroundColor:this.state.worldButtonColor}} onClick={this.showWorldMap}>World Map</button>
                         <button   type="button" className="btn btn-secondary" style={{backgroundColor:this.state.indiaButtonColor}} onClick={this.showIndiaMap}>India Map</button>
                         
                  </div>
         
                  <div>
                   {a}
                  </div>
          
          

           
        

        
 
    </div>
      
      );
    }
}

export default Maps;