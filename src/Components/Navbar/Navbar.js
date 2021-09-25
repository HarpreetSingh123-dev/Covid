import React,{useEffect, useState} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import Image1 from '../../Images/symbol1.jpg'

function Navbar(props) {
   
  
   const [ covidLiveBackground , setCovidLiveBackground ] = useState()

   const [ vaccineBackground , setVaccineBackground ] = useState()

   const [ treatmentBackground , setTreatmentBackground ] = useState()

   const [ mapBackground , setMapBackground ] = useState()

   const [ newsBackground , setNewsBackground ] = useState()

   const [ aboutBackground , setAboutBackground ] = useState()

   
   useEffect(()=>{

       changeBackgroundOfClicked(props.page)

   },[props.page])

  
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

                <form className="form-inline my-2 my-lg-0">
                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
 
            </div>

       </nav>


  </div>
    );
}

export default Navbar;