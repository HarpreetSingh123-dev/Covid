import React from 'react';
import {useState,useEffect} from 'react'
import './News.css'
import Skeleton from '@yisheng90/react-loading';
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function News(props) {

 var display 

 const [vaccineNews , setVaccineNews] = useState([])

 const [healthNews , setHealthNews] = useState([])

 const [covidNews , setCovidNews] = useState([])

 const [vaccineComponent , setVaccineComponent] = useState(true) 

 const [healthComponent , setHealthComponent] = useState(false)

 const [covidComponent ,  setCovidComponent] = useState(false)
 
 const [pageNumber, setPageNumber] = useState(0)

 const [vaccineButtonColor , setVaccineButtonColor] = useState('grey')

 const [covidButtonColor, setCovidButtonColor] = useState('')

 const [healthButtonColor , setHealthButtonColor] = useState('')

 const [loader, setLoader] = useState()


 

  
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
        

    })
     .catch(function (error) {
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


    

    },[pageNumber])



    

if(vaccineComponent){

       
             var previousButton

             if(pageNumber === 0){
                        previousButton = null
                     }

             else{
                    previousButton =(<button type="button" class="btn btn-info" onClick={ ()=>setPageNumber(  prevState => prevState - 1)}>Previous</button>)
                 }

  
              display = ( <div> 

                           <div className="navigationButtonSet">
                           {previousButton}
                           <button type="button" class="btn btn-info" onClick={ ()=>setPageNumber( prevState => prevState + 1)}>Next</button>
                           </div>

                           <div className="setScroll">
                           {vaccineNews.map((news)=>{

                                return <div class="card mb-3">
                                       <img class="card-img-top" src={news.urlToImage} alt="Card image cap"></img>
                                       <div class="card-body">
                                       <h5 class="card-title">{news.title}</h5>
                                       <p class="card-text">{news.content}</p>
                                       <p class="card-text"><a href={news.link} target="_blank">Click Here for more</a></p>
                                       <p class="card-text"><small class="text-muted" >{news.pubDate}</small></p>
                                       </div>
                                       </div>
                           })}
                          </div>
                      </div> 
                     )}       
          

if(healthComponent){

       

             var previousButton

             if(pageNumber === 0){
               previousButton = null
                }

            else{
              previousButton =(<button type="button" class="btn btn-info" onClick={ ()=>setPageNumber(prevState => prevState - 1)}>Previous</button>)
             }

            display = ( <div>

                       <div className="navigationButtonSet">
                       {previousButton}
                       <button type="button" class="btn btn-info" onClick={ ()=>setPageNumber(prevState => prevState + 1)}>Next</button>
                       </div>

                         <div className="setScroll">
                          {healthNews.map((news)=>{

                                 return <div class="card mb-3">
                                        <img class="card-img-top" src={news.urlToImage} alt="Card image cap"></img>
                                        <div class="card-body">
                                        <h5 class="card-title">{news.title}</h5>
                                        <p class="card-text">{news.content}</p>
                                        <p class="card-text"><a href={news.link} target="_blank">Click Here for more</a></p>
                                        <p class="card-text"><small class="text-muted" >{news.pubDate}</small></p>
                                        </div>
                                       </div>
                                       
         
                         })}
                         </div>
                       
                      
                      </div>
                     )
}

if(covidComponent){
           
                

                var previousButton

                if(pageNumber === 0){
                     previousButton = null
                  } 

                else{
                    previousButton =(<button type="button" class="btn btn-info "  style={{marginLeft:'0'}} onClick={ ()=>setPageNumber(prevState => prevState - 1)}>Previous</button>)
                   }
  
               display = ( <div>
                          
                          <div className="navigationButtonSet">
                          {previousButton}
                          <button type="button" class="btn btn-info" style={{marginRight:'0'}} onClick={ ()=>setPageNumber(prevState => prevState + 1)}>Next</button>
                          </div>

                          <div className="setScroll">
                           {covidNews.map((news)=>{

                                 return <div class="card mb-3">
                                        <img class="card-img-top" src={news.urlToImage} alt="Card image cap"></img>
                                        <div class="card-body">
                                        <h5 class="card-title">{news.title}</h5>
                                        <p class="card-text">{news.content}</p>
                                        <p class="card-text"><a href={news.link} target="_blank">Click Here for more</a></p>
                                        <p class="card-text"><small class="text-muted" >{news.pubDate}</small></p>
                                        </div>
                                        </div>
        
                            })}

                          </div>
                          </div>
                        )

}

  const vaccineNewsSet = ()=>{
  
    

    setHealthComponent(false)
    setCovidComponent(false)
    setVaccineComponent(true)

    setPageNumber(0)

    /* side button color logic */

    setVaccineButtonColor('grey')
    setCovidButtonColor('')
    setHealthButtonColor('')


    

    
    
  }  

  const healthNewsSet = ()=>{
  
    

    setHealthComponent(true)
    setCovidComponent(false)
    setVaccineComponent(false)

    setPageNumber(0)

    setVaccineButtonColor('')
    setCovidButtonColor('')
    setHealthButtonColor('grey')
    
}


  const covidNewsSet = ()=>{
   
    
    setHealthComponent(false)
    setCovidComponent(true)
    setVaccineComponent(false)

    setPageNumber(0)

    setVaccineButtonColor('')
    setCovidButtonColor('grey')
    setHealthButtonColor('')
   
  }

 


    return (
        
        <div>
          
         <div className="News"> 

            <Navbar newsPage={true}></Navbar>

            <div className="marginSet container-fluid">

              <div className="row">

                  <div className="col-lg-2 col-md-3 col-sm-12 sideButtons test ">


                    <div className="row">
                    <button type="button" class="btn btn-primary btn-lg btnSet" style={{backgroundColor: vaccineButtonColor}} onClick={vaccineNewsSet}>VACCINE</button>
                    </div>

                    <div className="row">
                    <button type="button" class="btn btn-primary btn-lg btnSet " style={{backgroundColor: covidButtonColor}} onClick={covidNewsSet}>COVID-19</button>
                    </div>

                    <div className="row">
                    <button type="button" class="btn btn-primary btn-lg btnSet " style={{backgroundColor: healthButtonColor}} onClick={healthNewsSet}>HEALTH</button>
                    </div>
                
                 


                  </div>

                  <div className="col-lg-10 col-md-9 col-sm-12 test">
                    
                        <div className="display">
                          {display}
                        </div>

                  </div>   

              </div>

            

            </div> 

              <div className="breakSet">


              </div>

              <div className="footerSet">
                <Footer></Footer>
              </div> 
        
        </div>
      </div>

    );
}

export default News;