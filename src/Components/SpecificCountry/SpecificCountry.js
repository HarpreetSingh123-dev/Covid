import React, { Component } from 'react';
import './SpecificCountry.css'
import axios from 'axios'
import Skeleton from '@yisheng90/react-loading';
import ReactCountryFlag from 'react-country-flag'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Countries from '../MainPage/Countries/Countries'
import Regions from '../Regions/Regions'
import Footer from '../Footer/Footer'

class SpecificCountry extends Component {
    
    
 constructor(props){
    
    super(props)
    
    this.state={
         loader:true,
         dataLoader:true,
         countries:[],
         specificCountryData:[],
         showRegions: false,
         codeForFlag:''

    }

    this.fetchDataFromBackend = this.fetchDataFromBackend.bind(this)
    this.setSpecificCountryData= this.setSpecificCountryData.bind(this)
    this.setCountries= this.setCountries.bind(this)

    this.showRegions = this.showRegions.bind(this)
    this.closeRegions = this.closeRegions.bind(this)

   
 }   

////////////////////////////////////////////////////////////////////////////////// 
componentDidMount(){

    this.fetchDataFromBackend()
   
}    

////////////////////////////////////////////////////////////////////////////////

componentDidUpdate(prevProps){

   // console.log("previous props below")
    //console.log(prevProps)

    if(this.props.match.params.id !== prevProps.match.params.id){

        this.fetchDataFromBackend()
    }
}

//////////////////////////////////////////////////////////////////////////////////   

fetchDataFromBackend(){

    var country = this.props.match.params.id.toLowerCase()
    var countryCode = this.props.match.params.type
    var setCountry 
     
   if ( country === 'usa' || country === 'uk'){
  
            var b = country.toUpperCase()
            setCountry= b
 
          }
 
  else{
 
       const myCountry = country
       const words = myCountry.split(" ")
 
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
 
     var k = words.join(" ")
 
     console.log("country below")
    
 
    console.log(k)
    setCountry = k
 
 }
    
  var options1 = {
     method: 'GET',
     url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${setCountry}/${countryCode}`,
     headers: {
       'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
       'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
     }
   };
   
   var options2 = {
     method: 'GET',
     url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
     headers: {
       'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
       'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
     }
   };

   var options3 = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/${countryCode}`,
    headers: {
      'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
   
   //First axios request for specific country stats//
   axios.request(options1).then(function (response) {
      
       const data = response.data[0]
       return data
 
     }).then(this.setSpecificCountryData)
   
       .catch(function (error) {
      
          console.error(error);
    });
 
      //////////////////////////////////////////////////////////////////////////////
 
     //Second axios request for list of countries///////////////////////////////////
     axios.request(options2).then(function (response) {
     
           const data = response.data
 
           return data
 
      }).then(this.setCountries)
 
        .catch(function (error) {
         
         console.error(error);
      });
 
  /////////////////////////////////////////////////////////////////////////////

  //////////Third axios request for fetching sates of particular country///////

  axios.request(options3).then(function (response) {
  
    console.log("specific country states below")
    console.log(response.data);
  
  }).catch(function (error) {
  
    console.error(error);
  });
 
}
 
/////////////////////////////////////////////////////////////////////////////////////////////
 setSpecificCountryData(data){

    console.log("data below")
    console.log(data)

    var country= data.Country
    var totalCases= data.TotalCases
    var newCases=data.NewCases
    var infectionRisk =data. Infection_Risk
    var activeCases=data.ActiveCases
    var seriousCritical=data.Serious_Critical 
    var totalRecovered=data.TotalRecovered
    var totalDeaths=data.TotalDeaths
    var newDeaths=data.NewDeaths
    var caseFatilityRate = data.Case_Fatality_Rate
    var totalTests = data.TotalTests
    var testPercentage = data.Test_Percentage
    var recoveryProportion = data.Recovery_Proporation
    var flagSymbol =data.TwoLetterSymbol
    

   const p =[{country,totalCases,totalDeaths,totalRecovered,activeCases,newCases,newDeaths,seriousCritical,infectionRisk, caseFatilityRate,totalTests,testPercentage,recoveryProportion}]

   
    this.setState({specificCountryData:p})
    this.setState({codeForFlag:flagSymbol.toUpperCase()})
    this.setState({dataLoader:false})
    

 }   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 setCountries(countries){

    var a =[]
  
    for(var i=0; i<countries.length; i++){

          var b = countries[i]

          a.push(b)
      }
  
    this.setState({countries:a})
    this.setState({loader:false})
 }

////////////////////////////////////////////////////////////////////////////////////////////// 

 showRegions(){

    this.setState({showRegions:true})
 }

///////////////////////////////////////////////////////////////////////////////////////////// 
 closeRegions(){

    this.setState({showRegions:false})
 }
   
///////////////////////////////////////////////////////////////////////////////////////////// 
    
    render() {

        var a = null

        if(this.state.loader){

             a = (<Skeleton rows={80} height={20} color="lightgray"></Skeleton>)
        
        }

        

        else{

           a = ( <div className="showRegions">  
                
                  <div className="mostViewed">

                    <h2 className="text-center" style={{color: "white"}}><b>Most Viewed</b></h2>
            
                      <ul class="nav nav-pills nav-stacked">
 
                         <li class="nav-item">
                      
                          <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/USA/usa`} ><b>UNITED STATES</b></Link></a>
                          <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}}><Link  style={{color: "white"}} to={`/Country/CANADA/can`} ><b>CANADA</b></Link></a>
                          <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/AUSTRALIA/aus`} ><b>AUSTRALIA</b></Link></a>
                          <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/UK/gbr`} ><b>UNITED KINGDOM</b></Link></a>
                          <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/INDIA/ind`} ><b>INDIA</b></Link></a>
                    
                        </li>

                     </ul>    

                 </div>
       
      
                 <div> 
         
                    <h2 className="text-center"style={{color: "white"}} ><b>Countries</b></h2>
            
                       { this.state.countries.map((cntry)=>

                           <Countries
                                 country={cntry.Country}
                                 threeDigitCode={cntry.ThreeLetterSymbol}
                          
                              ></Countries> ) 
                          
                       }

                </div>  
                
              </div> 
            
             ) 


             var c = null
            
             if(this.state.showRegions){

               c =( <div className="showRegions">
               
                     <Regions
                
                            clicked={this.closeRegions}
                            countries={this.state.countries}
                
                     ></Regions>

                    </div> )
            }

          
        }


        var b = null

        if(this.state.dataLoader){

            b=(<Skeleton rows={80} height={20} color="lightgray"></Skeleton>)
        }

        else{

             b=(<div className="topCountryStats shadow p-3 mb-5  rounded">
               
                <div className="row">

                <div className="col-lg-8 col-md-12 col-sm-12">
                   <h1 style={{color: "white"}}><b>{this.state.specificCountryData[0].country.toUpperCase()}</b></h1>
                  
                   <div>

                         <div className="row">

                           <div className="col-lg-6">
                                
                                
                                <ul>
                                     <h5 style={{color: "white"}} ><b>Total Cases:</b>&nbsp;{this.state.specificCountryData[0].totalCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                     <h5 style={{color: "white"}}><b>New Cases:&nbsp;</b>{this.state.specificCountryData[0].newCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                     <h5 style={{color: "white"}}><b>Infection Risk:&nbsp;</b>{this.state.specificCountryData[0].infectionRisk}</h5>
                                     <h5 style={{color: "white"}}><b>Active Cases:&nbsp;</b>{this.state.specificCountryData[0].activeCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                     <h5 style={{color: "white"}}><b>Serious Critical:&nbsp;</b>{this.state.specificCountryData[0].seriousCritical.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                     <h5 style={{color: "white"}} ><b>Total Recovered:&nbsp;</b>{this.state.specificCountryData[0].totalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                
                                </ul>
                           
                           </div>

                           <div className="col-lg-6">

                                <ul>
                                    <h5 style={{color: "white"}} ><b>Total Deaths:&nbsp;</b>{this.state.specificCountryData[0].totalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                    <h5 style={{color: "white"}}><b>New Deaths:&nbsp;</b>{this.state.specificCountryData[0].newDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5>
                                    <h5 style={{color: "white"}}><b>Case Fatility Rate:&nbsp;</b>{this.state.specificCountryData[0].caseFatilityRate}</h5>
                                    <h5 style={{color: "white"}} ><b>Total Tests:&nbsp;</b>{this.state.specificCountryData[0].totalDeaths}</h5>
                                    <h5 style={{color: "white"}} ><b>Test Percentage:&nbsp;</b>{this.state.specificCountryData[0].testPercentage}</h5>
                                    <h5 style={{color: "white"}}><b>Recovery Proportion:&nbsp;</b>{this.state.specificCountryData[0].recoveryProportion}</h5>


                                </ul>
                           
                           </div>


                         </div>

                   </div>


                </div>
                
                <div className="col-lg-4 col-md-12 col-sm-12">
                <ReactCountryFlag countryCode={this.state.codeForFlag} 
                
                svg
                style={{
                    width: 'auto',
                    height: 'auto',
                }}
                
                
                />
               </div>
               </div>
               </div>
               
               )
        }

        return (
            <div className="specificCountry">
                
                <Navbar></Navbar>
               
                  <div className="container-fluid">
               
                     <div className="row">
               
                         <div className="col-lg-2  col-md-3 scrolling shadow p-3 mb-5  rounded">
                
                         <div>  
                   
                           {a}
                  
                        </div> 

                        </div>

                        <div className="col-sm-12 chooseRegion">
                         
                            <div className="chooseButton">
                                
                                <button type="button" className="btn btn-info" onClick={this.showRegions}>Click To Choose Your Region</button>
                            
                            </div>

                       

                        <div className="box">

                             {c}
                        </div>

                        </div>
                         <div className="col-lg-10 col-md-9">

                              <div className="upperCountryContent">
                              
                              {b}
                                {console.log(this.state)}
                             
                              </div>

                              <div className="tableCountryContent">
                              <div className="row">


                              </div>
                              </div>

               
                         </div>
                
                    </div> 
               
                </div>
                
                <div className="footerSet">
                <Footer></Footer>
                </div>
            
            </div>
        );
    }
}

export default SpecificCountry;