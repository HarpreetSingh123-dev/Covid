import React, { Component } from 'react';
import Skeleton from '@yisheng90/react-loading';
import './MainPage.css'
import Navbar from '../Navbar/Navbar'
import LiveCurrentTotals from './Totals/Totals'
import Countries from './Countries/Countries'
import ShowCountries from './Countries/ShowCountries'
import Table from '../MainPageTable/MainPageTable'
import Jumbotron from '../Jumbotron/Jumbotron'
import Footer from '../Footer/Footer'
import axios from 'axios'

import {Link} from 'react-router-dom'
import Countdown from 'react-countdown';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import setRegionAction from '../../Redux/Actions/RegionAction'



class MainPage extends Component {
    
    constructor(props){

      super(props)

      this.state={

        liveCovidStats:[],
        countries:[],
        loader:true,
        showRegions:false,

        region:''
        
       
        }
   
        this.setTotalData= this.setTotalData.bind(this)
        this.setCountries= this.setCountries.bind(this)
        this.showRegions= this.showRegions.bind(this)
        this.closeRegions= this.closeRegions.bind(this)

        this.fetchDataFromBackend=this.fetchDataFromBackend.bind(this)
        
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

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 setTotalData(data){

      var totalCases= data.TotalCases
      var totalDeaths=data.TotalDeaths
      var totalRecovered=data.TotalRecovered
      var activeCases=data.ActiveCases
      var newCases=data.NewCases
      var newDeaths=data.NewDeaths
      var newRecovered=data.NewRecovered
      var seriousCritical=data.Serious_Critical 
  
     const p =[{totalCases,totalDeaths,totalRecovered,activeCases,newCases,newDeaths,newRecovered,seriousCritical}]

     
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
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
showRegions(){

this.setState({showRegions:true})

}

closeRegions(){

  this.setState({showRegions:false})

}

    render() {

      var a = null
     
      
        if(this.state.loader) {

                     a = (<Skeleton rows={6} color="lightgray"></Skeleton>)
                   
               }

         else{


           a= (
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
                 
                 <button type="button" class="close " aria-label="Close" onClick={this.closeRegions}>
                     <span aria-hidden="true">&times;</span>
                   </button>
                   
                   {/*
                    <div className="showContinents">
                              
                               <h2 className="text-center"><b>Continents</b></h2>
                            
                              
                                <ul class="nav nav-pills nav-stacked">
                    
                                    <li class="nav-item">
                                       <a class="nav-link active">World</a>
                                       <a class="nav-link active">Asia</a>
                                       <a class="nav-link active">Africa</a>
                                       <a class="nav-link active">Australia</a>
                                       <a class="nav-link active">Europe</a>
                                       <a class="nav-link active">North America</a>
                                       <a class="nav-link active">South America</a>
                                      
                                    </li>

                               </ul>    


                   </div>  */}

                    {/*/////////////////////////////////////////////////////////////////*/} 

                    <div className="showMostViewed">

                              <h2 className="text-center" style={{color: "white"}} ><b>Most Viewed</b></h2>
                               <hr className="ruleThree"></hr>
                                <ul class="nav nav-pills nav-stacked">

                                   <li class="nav-item">
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/USA/usa`}><b>UNITED STATES</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/CANADA/can`}><b>CANADA</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/AUSTRALIA/aus`}><b>AUSTRALIA</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}}><Link style={{color: "white"}} to={`/Country/UK/gbr`}><b>UNITED KINGDOM</b></Link></a>
                                        <a class="nav-link active" style={{color: "black",backgroundColor:'steelblue'}} ><Link style={{color: "white"}} to={`/Country/INDIA/ind`}><b>INDIA</b></Link></a>
        
                                   </li>

                                </ul>    

                    </div>

                   {/*/////////////////////////////////////////////////////////////////*/}
   
                   <div> 
                              
                              <h2 className="text-center" style={{color: "white"}} ><b>Countries</b></h2>
                              <hr className="ruleThree"></hr>
                                 { this.state.countries.map((cntry)=>
                
                                     <ShowCountries
                                     country={cntry.Country}
                                     threeDigitCode={cntry.ThreeLetterSymbol}
                                             ></ShowCountries> ) 
                                            
                                    }

                          </div>  

              
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

            }
          


        return (
           
           <div className="MainPage">

                <Navbar></Navbar>

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
    
                                  <Table></Table>

                                  
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
                
               
               <div className="footerSet">
 
                   <Footer></Footer>


       </div>
               
             
                
  </div>
        );
    }
}

const mapActionsToProps =(dispatch) =>{

   return bindActionCreators({
 
   setRegionAction  ,
     
   }, dispatch)
 
 }

export default connect(null, mapActionsToProps) (MainPage);