import React, { Component } from 'react';
import Skeleton from '@yisheng90/react-loading';
import './MainPage.css'
import Navbar from '../Navbar/Navbar'
import LiveCurrentTotals from './Totals/Totals'
import Countries from './Countries/Countries'
import Jumbotron from '../Jumbotron/Jumbotron'
import axios from 'axios'

class MainPage extends Component {
    
    constructor(props){

      super(props)

      this.state={

        liveCovidStats:[],
        countries:[],
        loader:true
        
       
        }
   
        this.setTotalData= this.setTotalData.bind(this)
        this.setCountries= this.setCountries.bind(this)

    }
    
///////////////////////////////////////////////////////////////////////////////////    
componentDidMount(){

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

          var b = countries[i].Country

          a.push(b)
      }
  
    this.setState({countries:a})
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


    render() {

      var a = null
         
      
        if(this.state.loader) {

                     a= (<Skeleton rows={6} color="lightgray"></Skeleton>)
               }

         else{


           a= (
                <div>
                    <h2 className="text-center">Live Covid Status Of The World</h2>

                     <hr></hr>
            
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
                    <hr></hr>
                        <div className="row">
                    
                   {/*///FIRST COLUMN STARTS HERE/////////////////////////*/}
                          <div className="col-lg-2  col-md-3 countryScroll">

                           {/*//////////////////////////////////////////////////////*/}
                              <div className="continents">
                              
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

 
                               </div> 
                           {/*//////////////////////////////////////////////////////*/}
                           
                           {/*//////////////////////////////////////////////////////*/}

                              <div className="mostViewed">

                                 <h2 className="text-center"><b>Most Viewed</b></h2>
                                 
                                     <ul class="nav nav-pills nav-stacked">
                      
                                        <li class="nav-item">
                                           <a class="nav-link active">United States</a>
                                           <a class="nav-link active">Canada</a>
                                           <a class="nav-link active">Australia</a>
                                           <a class="nav-link active">United Kingdom</a>
                                           <a class="nav-link active">India</a>
                                         
                                        </li>

                                    </ul>    

                             </div>
                            
                           {/*//////////////////////////////////////////////////////*/} 

                           {/*//////////////////////////////////////////////////////*/}
                              
                             
                             <div> 
                              
                                 <h2 className="text-center"><b>Countries</b></h2>
                                 
                                    { this.state.countries.map((cntry)=>
                   
                                        <Countries
                                                   country={cntry}
                                                ></Countries> ) 
                                               
                                       }

                             </div>    
                    
                          </div>  
                   
                        {/*//////////////////////////////////////////////////////*/}

                       {/*///SECOND COLUMN STARTS HERE/////////////////////////*/}
                            
                            <div className="col-sm-12">

                               <p>wohooooooo</p>

                            </div>
                            
                            
                            <div className="col-lg-10 col-md-9">
    
                                  <p>jdjdjdjdjdj</p>
                  
                            </div>

                        </div>

                    </div>

               </div>
                
               
               {console.log(this.state)}
               
              
                
            </div>
        );
    }
}

export default MainPage;