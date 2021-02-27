import React, { Component } from 'react';
import Skeleton from '@yisheng90/react-loading';
import './MainPage.css'
import Navbar from '../Navbar/Navbar'
import LiveCurrentTotals from './Totals/Totals'
import Jumbotron from '../Jumbotron/Jumbotron'
import axios from 'axios'

class MainPage extends Component {
    
    constructor(props){

      super(props)

      this.state={

        liveCovidStats:[],
        loader:true
        
       
        }
   
        this.setData= this.setData.bind(this)

    }
    
///////////////////////////////////////////////////////////////////////////////////    
componentDidMount(){

  var options = {
              
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
    headers: {
      'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
   
   
    const data =response.data[0]
    console.log("data below")
    console.log(data)
  
    return data
    
   }).then(this.setData)
  
  
     .catch(function (error) {
                  console.error(error);
           });
         
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 setData(data){

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
               
                <div className="total">
                    <div className="container-fluid">
                            
                        { a }
               
               
                  </div>

               
                </div>
                
                {console.log(this.state.liveCovidStats)}
               
              
                
            </div>
        );
    }
}

export default MainPage;