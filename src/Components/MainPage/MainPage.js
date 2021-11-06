import React, { Component } from 'react';
import Skeleton from '@yisheng90/react-loading';
import './MainPage.css'
import Navbar from '../Navbar/Navbar'
import LiveCurrentTotals from './Totals/Totals'
import Countries from './Countries/Countries'
import ShowCountries from './Countries/ShowCountries'
import MainPageChart from '../MainPageChart/MainPageChart'
import FooterWorldStats from './FooterWorldStats/FooterWorldStats';
import FooterContinentStats from './FooterContinentStats/FooterContinentStats';
import MainPageNews from './MainPageNews/MainPageNews';
import Table from '../MainPageTable/MainPageTable'
import Jumbotron from '../Jumbotron/Jumbotron'
import Footer from '../Footer/Footer'
import Regions from '../Regions/Regions'

import axios from 'axios'

import {Link} from 'react-router-dom'
import Countdown from 'react-countdown';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import setCountryAndCodes from '../../Redux/Actions/SetCountryAndCodesAction'



class MainPage extends Component {
    
    constructor(props){

      super(props)

      this.state={

        liveCovidStats:[],
        countries:[],
        loader:true,
        showRegions:false,

        region:'',

        worldFooter:true,

        footerTrendsHeadLine:'The World',

        footerValue:'World',

        otherContinentData:''
        
       
        }
   
        this.setTotalData= this.setTotalData.bind(this)
        this.setCountries= this.setCountries.bind(this)
        this.showRegions= this.showRegions.bind(this)
        this.closeRegions= this.closeRegions.bind(this)

        this.fetchDataFromBackend=this.fetchDataFromBackend.bind(this)
        this.setFooterDataType=this.setFooterDataType.bind(this)
        this.setContinentsData=this.setContinentsData.bind(this)      
    }
    
///////////////////////////////////////////////////////////////////////////////////    
componentDidMount(){

 this.fetchDataFromBackend()

} 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchDataFromBackend(){

   this.setState({loader:true})
   var options1 = {
              
      method: 'GET',
      url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
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
      url: 'https://covid-19-coronavirus-statistics2.p.rapidapi.com/continentData',
      headers: {
        'x-rapidapi-host': 'covid-19-coronavirus-statistics2.p.rapidapi.com',
        'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36'
      }
    };

  /////////////////////////////////////////FIRST API REQUEST/////////////////////////  
    axios.request(options1).then(function (response) {
     
     
      const data =response.data[0]
      return data
      
      }).then(this.setTotalData)
    
    
        .catch(function (error) {
                console.error(error);
             });
  ////////////////////////////////////////////////////////////////////////////////////
  
   axios.request(options2).then(function (response) {
   
       const countries = response.data
       return countries 
  
      }).then(this.setCountries)
      
      
      .catch(function (error) {
            console.error(error);
          });
  ///////////////////////////////////////////////////////////////////////////////////////
  
  axios.request(options3).then(function (response) {
    
     const continentData = response.data.result

     //console.log("to check continent data is null")
     //console.log(continentData)

     return continentData
     
    }).then(this.setContinentsData)
    
    .catch(function (error) {
       console.error(error);
      });

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 setTotalData(data){

      var totalCases= data.TotalCases
      var totalDeaths=data.TotalDeaths
      var totalRecovered=data.TotalRecovered
      //var newRecovered = data.NewRecovered
      var deathsPerMillion = data.Deaths_1M_pop
      var activeCases=data.ActiveCases
      var newCases=data.NewCases
      var newDeaths=data.NewDeaths
      var newRecovered=data.NewRecovered
      var seriousCritical=data.Serious_Critical 
  
     const p =[{totalCases,totalDeaths,totalRecovered,activeCases,newCases,newDeaths,newRecovered,seriousCritical,deathsPerMillion}]

     
      this.setState({liveCovidStats:p})
      this.setState({loader:false})

 }  


 setCountries(countries){

    var a =[]
  
    for(var i=0; i<countries.length; i++){

          var b = countries[i]

          a.push(b)
      }
  
    this.setState({countries:a}) 

     // console.log("to check length of array")
     //console.log(this.props.countryAndCodes.length)
    if(this.props.countryAndCodes.length === 0){
      
       this.props.setCountryAndCodes(a) // used in redux to set countries and codes as global states
    }

    else{
      
      console.log("no data needs to be fetched")
    
    }
}


setContinentsData(data){

 
    
  
this.setState({otherContinentData:data})

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
showRegions(){

this.setState({showRegions:true})

}

closeRegions(){

  this.setState({showRegions:false})

}


setFooterDataType(value){

   if(value ==="WORLD")
     
     { 
        this.setState({worldFooter:true , footerValue:value , footerTrendsHeadLine:"The World"})
         
     }

   else
      { 
        var headline = null

          switch(value){

             case 'ASIA':
                  
             headline="Asian Continent"

             break;

             case 'AFRICA':
             
              headline ="African Continent"

             break;

             case 'AUSTRALIA':

              headline="Australian Continent"

             break;

             case 'EUROPE':

              headline = "European Continent"
             
             break;

             case 'NORTH_AMERICA':

              headline ="North American Continent"

             break;

             case 'SOUTH_AMERICA':

              headline ="South American Continent"

             break;


             

          }


        this.setState({worldFooter:false , footerValue:value , footerTrendsHeadLine:headline})
      }

}

    render() {

      var a = null
     
      
        if(this.state.loader) {

                     a = (<Skeleton rows={6} color="lightgray"></Skeleton>)
                   
               }

         else{


           a = (
                <div>
                    <h2 className="text-center">Live Covid Status Of The World</h2>

                     <hr className="rule"></hr>
              
                     <h4 className="text-center" style={{color: "black"}}>Next Update In&nbsp;:&nbsp; <Countdown
                                                     date={Date.now() + 600000}           
                                                     onComplete={this.fetchDataFromBackend}
                                                     ></Countdown>
                                                     
                                                     </h4>
                     
                       { this.state.liveCovidStats.map((p)=>
                                       
                            <LiveCurrentTotals
                                  
                                           totalCases={p.totalCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                           activeCases={p.activeCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                           totalDeaths={p.totalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}

                                           newCases={p.newCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                           seriousCritical={p.seriousCritical.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                           newDeaths={p.newDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}  >

                           </LiveCurrentTotals>
                        )}
                </div>)


          

              }

      var b = null

           if(this.state.showRegions){
              
            b =(<div className="showRegions">
                 
                <Regions
                
                clicked={this.closeRegions}
                countries={this.state.countries}
                  ></Regions>

              
                 </div>
                 
               )
         
          }


          var c = null 
          
          if(this.state.loader){

            c = (<Skeleton rows={80} height={20} color="lightgray"></Skeleton>)

          }

          else{

            
             c = (    <div>  
                   
                           
                         <div className="mostViewed">

                                 <h2 className="text-center" style={{color: "white"}}><b>Most Viewed</b></h2>
                                 <hr className="ruleThree"></hr>
                                     <ul class="nav nav-pills nav-stacked">
                      
                                        <li class="nav-item">
                                           <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}}  to={`/Country/USA/usa`} ><b>UNITED STATES</b></Link></a>
                                           <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}}><Link  style={{color: "white"}} to={`/Country/CANADA/can`} ><b>CANADA</b></Link></a>
                                           <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/AUSTRALIA/aus`} ><b>AUSTRALIA</b></Link></a>
                                           <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/UK/gbr`} ><b>UNITED KINGDOM</b></Link></a>
                                           <a class="nav-link" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/INDIA/ind`} ><b>INDIA</b></Link></a>
                                         
                                        </li>

                                    </ul>    

                        </div>
                            
                           
                         <div> 
                              
                                 <h2 className="text-center"style={{color: "white"}} ><b>Countries</b></h2>
                                 <hr className="ruleThree"></hr>
                                    { this.state.countries.map((cntry)=>
                   
                                        <Countries
                                                   country={cntry.Country}
                                                   threeDigitCode={cntry.ThreeLetterSymbol}
                                               
                                                   ></Countries> ) 
                                               
                                       }

                        </div>    
             
                  </div>  
            
              )


              var d = null

              if(this.state.loader){

                   d = (<Skeleton rows={6} color="lightgray"></Skeleton>)
              }

              else {

                   if(this.state.worldFooter){

                        d= (    <div> 
                          
                                { this.state.liveCovidStats.map((data)=>

                                    <FooterWorldStats
                                 
                                     totalRecovered = {data.totalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                     newRecovered = {data.newRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                     deathsPerMillion={data.deathsPerMillion.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                 
                                    ></FooterWorldStats>

                                    )}
                          
                                 </div>
                             )
                     }

                    else{


                        d=(  <div><FooterContinentStats  value={this.state.footerValue} data={this.state.otherContinentData}></FooterContinentStats></div> )
                        
                    }

                    }
                    

   }
          


        return (
           
           <div className="MainPage">

                <Navbar  page={"Covid_Live"} countries={this.state.countries} ></Navbar>
            <marquee>Website still under development, some things may not work</marquee>
                <Jumbotron></Jumbotron>
          {/*//////////////////////////////////////////////////////////////////*/ }    
                <div className="total">
                   
                    <div className="container-fluid">
                            
                        {a}

                    </div>

               </div>

          {/*///////////////////////////////////////////////////////////////////*/}     

               <div className="countries">

                    <div className="container-fluid"> 
                    <h2 className="text-center">Individual Country Mapping Of Covid-19 Cases</h2>
                    <hr className="rule"></hr>
                        <div className="row">
                    
                       {/*///FIRST COLUMN STARTS HERE FOR DESKTOP /////////////////////////*/}
                          <div className="col-lg-2  col-md-3 countryScroll">

                          
                              
                             {c}
                          
                          </div>  
                   
                        {/*//////////////////////////////////////////////////////*/}

                       {/*///FIRST COLUMN STARTS HERE (For Mobiles Devices)/////////////////////////////////*/}
                            
                            <div className="col-sm-12 chooseRegion">

                                
                                <div className="chooseButton">
                                
                                    <button type="button" className="btn btn-info" onClick={this.showRegions}>Click To Choose Your Region</button>
                                
                                </div>
 
                                <div className="box">

                                   {b}

                                </div>

                                <div className="continentBar">
                                <h2 className="text-center">Choose Your Continent</h2>
                                <hr className="rule"></hr>
                                </div>

                            </div>
                        {/* ////////////////////////////////////////////////////////////////////////////////*/}    
                            
                            <div className="col-lg-10 col-md-9">
    
                                  <Table clicked={this.setFooterDataType}></Table>
                                
                           {/*    <div className="row"> 
                               <div className="col">
                                <MainPageChart></MainPageChart>
                                </div>
                                </div>*/}
                                  
                              <div className="scientificTerms">

                                  <div className="container-fluid">
                              
                                      <div className="row"> 
                              
                                         <div className=" col-sm col-lg">  
                                           
                                            <p style={{color: "white"}}> <span style={{color: "#1F9D63"}}><b>INFECTION RISK</b></span><span>&nbsp;:</span>&nbsp;<span className="text">Total Number of covid-19 cases divided by Total Population since the beginning of outbreak. Those who are at risk of developing more severe disease or outcomes from COVID-19 are people: who are an older adult (increasing risk with each decade, especially over 60 years)
                                              of any age with chronic medical conditions</span></p>
                                            </div>

                                 
                                         <div className="col-lg col-sm">
                                    
                                            <p style={{color: "white",}}> <span style={{color: "#1AB0DA"}}><b>TEST PERCENTAGE</b></span><span>&nbsp;:</span>&nbsp;<span className="text">Total number of tests divided by total population.  Along with laboratory testing, chest CT scans may be helpful to diagnose COVID-19 in individuals with a high clinical suspicion of infection</span></p>
                                         </div>

                                      </div>

                               
                                      <div className="row">

                                 
                                         <div className="col-lg col-sm">
                                    
                                            <p style={{color: "white"}}> <span style={{color: "#F7384F"}}><b>CASE FATALITY RATE (CFR)</b></span><span>&nbsp;:</span>&nbsp;<span className="text">Total Number of Deaths due to Covid-19 divided by Total 
                                                Number of confirmed cases since the beginning of outbreak
                                               (It shows that how lethal covid-19 is in any country). Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</span></p>

                                         </div>

                                 
                                        <div className="col-lg col-sm">
                                
                                             <p style={{color: "white"}}> <span style={{color: "#19DAA4"}}><b>RECOVERY PERCENTAGE</b></span><span>&nbsp;:</span>&nbsp;<span className="text">Total number of recovered cases divided by Total number of covid-19 cases. People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days</span></p>
                                        
                                        </div>
                                
                                      </div>
                               
                              </div>
                        
                  
                            </div>

                        </div>

                       </div>

                    </div>

               </div>

               
               <div className="MainPageChart">
               
                    <div className="container-fluid">
               
                        <h2  className="text-center">More trends of {this.state.footerTrendsHeadLine} Covid-19 cases</h2>
                
                           <hr className="rule"></hr>
                         
                                 {/* CHARTS REMOVED AS API IS DOWN <div className="MainChartSet">
                                    <MainPageChart></MainPageChart>
                              </div>*/}
                               
                             {d}
                   
                    </div>
               
               </div>

               {/*
               <div className="SecondChart">
                 <h1>Chart No 2</h1>
               </div>

               <div className="ThirdChart">
                 <h1>Chart No 3</h1>
               </div> */}
               <div className="MainPageNewsSection container-fluid" style={{width:"85%"}}>
               
                   <h2  className="text-center">Latest Covid-19 News</h2>

                   <h2  className="text-center"></h2>

                   <hr className="rule"></hr>
                    
                   <MainPageNews></MainPageNews>

               </div>


               <div className="footerSet">
 
                   <Footer></Footer>


       </div>
               
             
                
  </div>
        );
    }
}

const mapStateToProps = (state) =>{

  return {

      countryAndCodes:state.countryAndCodes
  }

}


const mapActionsToProps =(dispatch) =>{

   return bindActionCreators({
 
   setCountryAndCodes  ,
     
   }, dispatch)
 
 }

export default connect(mapStateToProps , mapActionsToProps) (MainPage);

//export default MainPage;