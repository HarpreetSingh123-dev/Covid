import React,{useEffect, useState} from 'react';
import './Navbar.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SearchBar from './NavbarSearch'
import Image1 from '../../Images/symbol1.jpg'

function Navbar(props) {
   
  
   const [ covidLiveBackground , setCovidLiveBackground ] = useState()

   const [ vaccineBackground , setVaccineBackground ] = useState()

   const [ treatmentBackground , setTreatmentBackground ] = useState()

   const [ mapBackground , setMapBackground ] = useState()

   const [ newsBackground , setNewsBackground ] = useState()

   const [ aboutBackground , setAboutBackground ] = useState()

   /* */

   const [ countriesForSearchBar , setCountriesForSearchBar ] = useState([])

   
   useEffect(()=>{

       changeBackgroundOfClicked(props.page)


       var options2 = {
         method: 'GET',
         url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
         headers: {
           'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
           'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
         }
       };


       axios.request(options2).then(function (response) {
   
         const countries = response.data
         return countries 
    
        }).then(setFetchedCountries)
        
        
        .catch(function (error) {
              console.error(error);
            });

   },[props.page])


   function setFetchedCountries(countries){

      var a =[]
  
      for(var i=0; i<countries.length; i++){
  
            var b = countries[i]
  
            a.push(b)
        }
    
      setCountriesForSearchBar(a)




   } 


  
  function changeBackgroundOfClicked(value){

    switch(value){

       case 'Covid_Live':
              
              setCovidLiveBackground("lightslategrey")
              setVaccineBackground("")
              setTreatmentBackground("")
              setMapBackground("")
              setNewsBackground("")
              setAboutBackground("")
       break;

       case 'Vaccine':

             setCovidLiveBackground("")
             setVaccineBackground("lightslategrey")
             setTreatmentBackground("")
             setMapBackground("")
             setNewsBackground("")
             setAboutBackground("")
         
              
       break;

       case 'Treatment':

            setCovidLiveBackground("")
            setVaccineBackground("")
            setTreatmentBackground("lightslategrey")
            setMapBackground("")
            setNewsBackground("")
            setAboutBackground("")
 
              
       break;

       case 'Map':

            setCovidLiveBackground("")
            setVaccineBackground("")
            setTreatmentBackground("")
            setMapBackground("lightslategrey")
            setNewsBackground("")
            setAboutBackground("")

       break;

       case 'News':

           setCovidLiveBackground("")
           setVaccineBackground("")
           setTreatmentBackground("")
           setMapBackground("")
           setNewsBackground("lightslategrey")
           setAboutBackground("")

       break;

       case 'About':

          setCovidLiveBackground("")
          setVaccineBackground("")
          setTreatmentBackground("")
          setMapBackground("")
          setNewsBackground("")
          setAboutBackground("lightslategrey")

       break;

    }
  } 
  
  
   var b =   "fixed-top"
   
   return (
        <div className="navbarWrapper">
            
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${b}`}>
  
               
                  <a className="navbar-brand">
                     <img src={Image1} width="60" height="50" alt=""></img>
                  </a>
  
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                     <ul className="navbar-nav mr-auto">
                     
                        <li className="nav-item active">
                        <Link to={'/'} className="nav-link" style={{backgroundColor:covidLiveBackground}} onClick={()=>changeBackgroundOfClicked("Covid_Live")}>Covid-Live</Link>
                        </li>
     
                        <li className="nav-item active">
                        <Link to={'/Vaccine'} className="nav-link" style={{backgroundColor:vaccineBackground}} onClick={()=>changeBackgroundOfClicked("Vaccine")}>Vaccine</Link>
                        </li>
      
                        <li className="nav-item active">
                        <Link to={'/Treatment'} className="nav-link" style={{backgroundColor:treatmentBackground}} onClick={()=>changeBackgroundOfClicked("Treatment")}>Treatment</Link>
                        </li>   

                            
                        <li className="nav-item active">
                         <Link to={'/Map'} className="nav-link" style={{backgroundColor:mapBackground}} onClick={()=>changeBackgroundOfClicked("Map")}>Map</Link>
                        </li> 
                        
                       
                        <li className="nav-item active">
                         <Link to={'/News'} className="nav-link" style={{backgroundColor:newsBackground}} onClick={()=>changeBackgroundOfClicked("News")}>News</Link>
                        </li>
                        
                       
                        <li className="nav-item active">
                         <Link to={'/About'} className="nav-link disabled" style={{backgroundColor:aboutBackground}} onClick={()=>changeBackgroundOfClicked("About")}>About</Link>
                        </li>
    
                </ul>

                 <SearchBar countries={countriesForSearchBar}></SearchBar>

 
            </div>

       </nav>


  </div>
    );
}

export default Navbar;