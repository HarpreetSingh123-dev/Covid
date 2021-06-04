import React, { Component } from 'react';
import './SpecificCountry.css'
import axios from 'axios'
import Skeleton from '@yisheng90/react-loading';
import ReactCountryFlag from 'react-country-flag'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Countries from '../MainPage/Countries/Countries'
import CountryChanges from '../SpecificCountry/CountryChanges'
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
         changesSinceLastUpdate:[],
         showRegions: false,
         codeForFlag:'',

         changeInTotalCases:'',
         changeInActveCases:'',
         changeInCriticalCases:'',
         changeInRecoveredCases:'',
         changeInDeaths:'',
         ChangeInTested:''


    }

    this.fetchDataFromBackend = this.fetchDataFromBackend.bind(this)
    this.setSpecificCountryData= this.setSpecificCountryData.bind(this)
    this.setCountries= this.setCountries.bind(this)

    this.setStatesData = this.setStatesData.bind(this)

    this.setChanges = this.setChanges.bind(this)

    this.showRegions = this.showRegions.bind(this)
    this.closeRegions = this.closeRegions.bind(this)

    this.myRef = React.createRef()
 }   

////////////////////////////////////////////////////////////////////////////////// 
componentDidMount(){  

    this.fetchDataFromBackend()

   this.myRef.current.scrollTo(0, 0);
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

   this.setState({dataLoader:true})

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
  
  var options4 = {
   method: 'GET',
   url: 'https://coronavirus-map.p.rapidapi.com/v1/summary/region',
   params: {region: setCountry},
   headers: {
     'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
     'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com'
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
  
    const states = response.data

    return states
  
  }).then(this.setStatesData)
  
    .catch(function (error) {
  
    console.error(error);
  });

//////////////Fourth axios request for fetchinf changes since last update
  axios.request(options4).then(function (response) {
	
   const changes = response.data
   
   return changes

  }).then(this.setChanges)
    
    .catch(function (error) {
    	console.error(error);

   });
 
}
 
/////////////////////////////////////////////////////////////////////////////////////////////
 setSpecificCountryData(data){

    console.log("data below");
    console.log(data);

    var country = data.Country;
    var totalCases = data.TotalCases;
    var newCases = data.NewCases;
    var infectionRisk = data.Infection_Risk;
    var activeCases = data.ActiveCases;
    var seriousCritical = data.Serious_Critical;
    var totalRecovered = data.TotalRecovered;
    var totalDeaths = data.TotalDeaths;
    var newDeaths = data.NewDeaths;
    var caseFatilityRate = data.Case_Fatality_Rate;
    var totalTests = data.TotalTests;
    var testPercentage = data.Test_Percentage;
    var recoveryProportion = data.Recovery_Proporation;
    var flagSymbol = data.TwoLetterSymbol;

    const p = [
      {
        country,
        totalCases,
        totalDeaths,
        totalRecovered,
        activeCases,
        newCases,
        newDeaths,
        seriousCritical,
        infectionRisk,
        caseFatilityRate,
        totalTests,
        testPercentage,
        recoveryProportion,
      },
    ];

    this.setState({ specificCountryData: p });
    this.setState({ codeForFlag: flagSymbol.toUpperCase() });
    this.setState({ dataLoader: false });
    

 }   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 setCountries(countries){

    var a = [];

    for (var i = 0; i < countries.length; i++) {
      var b = countries[i];

      a.push(b);
    }

    this.setState({ countries: a });
    this.setState({ loader: false });
 }

//////////////////////////////////////////////////////////////////////////////////////////////

setStatesData(states){

   console.log("specific country states below  in function")
   console.log(states);
}

/////////////////////////////////////////////////////////////////////////////////////////////

setChanges(changes){

   console.log("changes below")
   console.log(changes.data.change)

var dataSet = changes.data.change

  function check(value) {
    if (value > 0) {
      var a = "+";

      var k = a.concat(value);

      return k;
    } else {
      return value;
    }
  }
   
  var totalCases= dataSet.total_cases
  var activeCases= dataSet.active_cases
  var criticalCases= dataSet.critical
  var recoveredCases=dataSet.recovered
  var newdeaths= dataSet.deaths
  var newtested =dataSet.tested

  var newCases = check(totalCases)
  var newActiveCases =check(activeCases)
  var newCriticalCases=check(criticalCases)
  var newRecoveredCases=check(recoveredCases)
  var newUpdatedDeaths=check(newdeaths)
  var newUpdatedtested = check(newtested)

  this.setState({

   changeInTotalCases: newCases,
   changeInActveCases: newActiveCases ,
   changeInCriticalCases: newCriticalCases,
   changeInRecoveredCases:newRecoveredCases ,
   changeInDeaths:newUpdatedDeaths ,
   ChangeInTested: newUpdatedtested


  })
  

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

            b=(<Skeleton rows={15} height={19} color="lightgray"></Skeleton>)
        }

        else{

             b=(<div className="topCountryStats shadow p-3 mb-5  rounded">
               
                <div className="row">

                <div className="col-lg-8 col-md-12 col-sm-12">
                   <h1  className="text-center" style={{color: "white"}}><b>{this.state.specificCountryData[0].country.toUpperCase()}</b></h1>
                  
                   <div>

                         <div className="row">

                        
                           <div className=" test col col-lg-6 col-sm-12">
                                
                              
                                <table className="test2">
 
                                 <tr >
                                    <td ><h5  style={{color: "white"}} ><b>Total Cases:</b>&nbsp;</h5></td>
                                    <td className="test3"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].totalCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>
  
                                 <tr>
                                    <td><h5  style={{color: "white"}}><b>New Cases:&nbsp;</b></h5></td>
                                    <td className="test3"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].newCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>

                                 <tr>
                                     <td><h5  style={{color: "white"}}><b>Infection Risk:&nbsp;</b></h5></td>
                                     <td className="test3"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].infectionRisk}%</h5></td>
                                     
                                 </tr>
                                 
                                 <tr>
                                    <td><h5  style={{color: "white"}}><b>Active Cases:&nbsp;</b></h5></td>
                                    <td className="test3"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].activeCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>

                                 <tr>
                                    <td><h5  style={{color: "white"}}><b>Serious Critical:&nbsp;</b></h5></td>
                                    <td className="test3"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].seriousCritical.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>

                                 <tr>
                                    <td><h5  style={{color :"white"}} ><b>Total Recovered:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h5></td>
                                    <td className="test3"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].totalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>


                               </table>
                            
                                
                           
                           </div>

                        
                           <div className="test col col-lg-6 col-sm-12">
  
                               <table className="test2">

                                 <tr>
                                    <td><h5 style={{color: "white"}} ><b>Total Deaths:&nbsp;</b></h5></td>
                                    <td className="test4"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].totalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>


                                 <tr>
                                     <td><h5 style={{color: "white"}}><b>New Deaths:&nbsp;</b></h5></td>
                                     <td className="test4"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].newDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h5></td>
                                 </tr>

                                 <tr>
                                    <td><h5 style={{color: "white"}}><b>Case Fatility&nbsp;</b></h5></td>
                                    <td className="test4"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].caseFatilityRate}</h5></td>
                                 </tr>

                                 <tr>
                                    <td><h5 style={{color: "white"}} ><b>Total Tests:&nbsp;</b></h5></td>
                                    <td className="test4"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].totalDeaths}</h5></td>
                                 </tr>

                                 <tr>
                                    <td><h5 style={{color: "white"}} ><b>Test Percentage:&nbsp;</b></h5></td>
                                    <td className="test4"><h5 style={{color: "white"}} >{this.state.specificCountryData[0].testPercentage}%</h5></td>
                                 </tr>

                                 <tr>
                                    <td><h5 style={{color: "white"}}><b>Recovery Fraction:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h5></td>
                                    <td className="test4"><h5 style={{color: "white"}}>{this.state.specificCountryData[0].recoveryProportion}%</h5></td>
                                 </tr>


                               </table>

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


        var table = (<h1>Table here</h1>)

        return (
            <div className="specificCountry" ref={this.myRef} >
                
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

                              <div className="lowerCountryContent">

                               <CountryChanges
                               
                                           totalCases={this.state.changeInTotalCases}
                                           activeCases={this.state.changeInActveCases}
                                           totalDeaths={this.state.changeInDeaths}

                                           tested={this.state.ChangeInTested}
                                           recovered={this.state.changeInRecoveredCases}
                                           critical={this.state.changeInCriticalCases}  
                               
                               ></CountryChanges>

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