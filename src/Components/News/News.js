import React from 'react';
import {useState,useEffect} from 'react'
import './News.css'
import Skeleton from '@yisheng90/react-loading';
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

function News(props) {

 var display 

 const [vaccineNews , setVaccineNews] = useState([])

 const [healthNews , setHealthNews] = useState([])

 const [covidNews , setCovidNews] = useState([])

 const [vaccineComponent , setVaccineComponent] = useState(true) 

 const [healthComponent , setHealthComponent] = useState(false)

 const [covidComponent ,  setCovidComponent] = useState(false)
 
 const [pageNumber, setPageNumber] = useState(0)

 const [loader , setLoader] = useState(true)

 

  
 useEffect(()=>{

    
     
    var options1 = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/${pageNumber}`,
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };

      axios.request(options1).then(function (response) {
        
        
        setVaccineNews(response.data.news)
        

    }).catch(function (error) {
        console.error(error);
    });

    var options2 = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/${pageNumber}`,
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };


      axios.request(options2).then(function (response) {
        
        setHealthNews(response.data.news)

     }).catch(function (error) {
        console.error(error);
     });


     var options3 = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/${pageNumber}`,
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };

      axios.request(options3).then(function (response) {
        
        setCovidNews(response.data.news)

    }).catch(function (error) {
        console.error(error);
    }); 

setLoader(false)
  

    },[pageNumber])



    

if(vaccineComponent){

              var previousButton

             if(pageNumber === 0){
                        previousButton = null
                     }

             else{
                    previousButton =(<button onClick={ ()=>setPageNumber(pageNumber-1)}>Previous</button>)
                 }

               if(loader){
                display =(<div><Skeleton rows={6} color="lightgray"></Skeleton></div>)
               }

               else{
              display = ( <div>

                           {vaccineNews.map((news)=>{

                                return <li>{news.title}</li>
                           })}

                           {previousButton}
                           <button onClick={ ()=>setPageNumber(pageNumber+1)}>Next</button>
                     
                      </div> 
                     )}
}

if(healthComponent){

             var previousButton

             if(pageNumber === 0){
               previousButton = null
                }

            else{
              previousButton =(<button onClick={ ()=>setPageNumber(pageNumber-1)}>Previous</button>)
             }

            display = ( <div>

                          {healthNews.map((news)=>{

                                 return <li>{news.title}</li>
         
                         })}

                       {previousButton}
                       <button onClick={ ()=>setPageNumber(pageNumber+1)}>Next</button>
                      
                      </div>
                     )
}

if(covidComponent){

                var previousButton

                if(pageNumber === 0){
                     previousButton = null
                  } 

                else{
                    previousButton =(<button onClick={ ()=>setPageNumber(pageNumber-1)}>Previous</button>)
                   }
  
               display = ( <div>

                           {covidNews.map((news)=>{

                                 return <li>{news.title}</li>
        
                            })}

                          {previousButton}
                          <button onClick={ ()=>setPageNumber(pageNumber+1)}>Next</button>
                          </div>
                        )

}

  const vaccineNewsSet = ()=>{

    setHealthComponent(false)
    setCovidComponent(false)
    setVaccineComponent(true)
  }  

  const healthNewsSet = ()=>{

    setHealthComponent(true)
    setCovidComponent(false)
    setVaccineComponent(false)
     
}


  const covidNewsSet = ()=>{
  
    setHealthComponent(false)
    setCovidComponent(true)
    setVaccineComponent(false)
      
  }

 


    return (
        
        <div>
          
         <div className="News"> 

            <Navbar newsPage={true}></Navbar>

            <div className="marginSet container-fluid">

              <div className="row">

                  <div className="col-lg-2 col-md-3 col-sm-12 test sideButtons">

                    <div className="row">
                    <button type="button" class="btn btn-primary btn-lg btnSet" onClick={vaccineNewsSet}>VACCINE</button>
                    </div>

                    <div className="row">
                    <button type="button" class="btn btn-primary btn-lg btnSet" onClick={covidNewsSet}>COVID-19</button>
                    </div>

                    <div className="row">
                    <button type="button" class="btn btn-primary btn-lg btnSet" onClick={healthNewsSet}>HEALTH</button>
                    </div>
                  
                  
                 


                  </div>

                  <div className="col-lg-10 col-md-9 col-sm-12 test">
                      <h1>Content here</h1>

                      {display}

                  </div>   

            {/*

            {console.log("vaccine news below")}
            {console.log(vaccineNews)}
            {console.log(healthNews)}
            {console.log(covidNews)}  */}
{console.log(vaccineNews)}
              </div>

            

            </div> 

        </div>

      </div>

    );
}

export default News;