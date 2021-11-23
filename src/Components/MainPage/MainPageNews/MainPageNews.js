import React,{useEffect, useState} from 'react';
import './MainPageNews.css'
import axios from 'axios'
//import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
//import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Skeleton from '@yisheng90/react-loading';
import ErrorImage from '../../../Images/Covid_2.jpg'
import ReactTimeAgo from 'react-time-ago'



function MainPageNews(props) {

   

    const [data , finalData ] = useState([])
    const [loader , setLoader ] = useState(true)


    useEffect(()=>{


        var options = {
            method: 'GET',
            url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
            params: {q: 'covid', lang: 'en', sort_by: 'rank', page_size: '10', media: 'True'},
            headers: {
              'x-rapidapi-host': 'covid-19-news.p.rapidapi.com',
              'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36'
            }
          };
    
          axios.request(options).then(function (response) {
           //console.log("carousal data")
            //console.log(response.data);
            return response.data.articles

        }).then(setFetchedData)
        
        .catch(function (error) {
            console.error(error);
        });
    
    
    },[])



    function setFetchedData(value){

       

         var finalDataSet =[]

         value.map((value)=>{

               var src 
               var altText
               var header
               var caption
               var link
               var lastUpdate 

                 if(value.media === null){
                 
                     src = ErrorImage
                    
                 }

                 else {

                    src = value.media
                 }

                 
                 altText = "No Preview Avaliable"
                 header = value.title
                 caption = value.summary
                 link = value.link
                 lastUpdate =  <ReactTimeAgo date={value.published_date} locale="en-US"></ReactTimeAgo>
                 
                 var finalObject = {src,altText,header,caption,link, lastUpdate}

                 finalDataSet.push(finalObject)


         })

         finalData(finalDataSet)
         setLoader(false)
    }

    var d = null

    if(loader){

      d = (<Skeleton rows={6} color="lightgray"></Skeleton>)
             
     }

    else{

         d=(

               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                   <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                   </ol>


                   <div class="carousel-inner">
        
                     <div class="carousel-item active">
                        <img class="imgg" src={data[0].src}   alt="First slide"></img>
                        <div class="carousel-caption">
                         
                          <h4 className="text-center">{data[0].header}</h4>
                          <p className="cutting">{data[0].caption}</p>
                          <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[0].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[0].link}>Click for more information</a></p>
                          
                       </div>
                       
                     </div>

                    <div class="carousel-item">
                       <img class="imgg" src={data[1].src} alt="Second slide"></img>
                       <div class="carousel-caption">
                         <h4 className="text-center">{data[1].header}</h4>
                         <p className="cutting">{data[1].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[1].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[1].link}>Click for more information</a></p>
                       </div>
                    </div>
   
                    <div class="carousel-item">
                      <img class="imgg" src={data[2].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center" >{data[2].header}</h4>
                         <p className="cutting">{data[2].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[2].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[2].link}>Click for more information</a></p>
                       </div>
                    </div>

                    <div class="carousel-item">
                      <img class="imgg" src={data[3].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center" >{data[3].header}</h4>
                         <p className="cutting">{data[3].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[3].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[3].link}>Click for more information</a></p>
                       </div>
                    </div>

                    <div class="carousel-item">
                      <img class="imgg" src={data[4].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center" >{data[4].header}</h4>
                         <p className="cutting" >{data[4].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[4].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[4].link}>Click for more information</a></p>
                       </div>
                    </div>

                    <div class="carousel-item">
                      <img class="imgg" src={data[5].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center">{data[5].header}</h4>
                         <p className="cutting">{data[5].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[5].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[5].link}>Click for more information</a></p>
                         
                       </div>
                    </div>

                    <div class="carousel-item">
                      <img class="imgg" src={data[6].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center">{data[6].header}</h4>
                         <p className="cutting">{data[6].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[6].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[6].link}>Click for more information</a></p>
                       </div>
                    </div>

                    <div class="carousel-item">
                      <img class="imgg" src={data[7].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center">{data[7].header}</h4>
                         <p className="cutting">{data[7].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[7].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[7].link}>Click for more information</a></p>
                       </div>
                    </div>

                    <div class="carousel-item">
                      <img class="imgg" src={data[8].src} alt="Third slide"></img>
                      <div class="carousel-caption">
                         <h4 className="text-center" >{data[8].header}</h4>
                         <p className="cutting">{data[8].caption}</p>
                         <p className="setLowerCarouselLinks"><b>Last Updated:</b>&nbsp;&nbsp;{data[8].lastUpdate}</p>
                          <p className="setLowerCarouselLinks"><a href={data[8].link}>Click for more information</a></p>
                       </div>
                    </div>

                  </div>

                 <a class="carousel-control-prev container" href="#carouselExampleIndicators" role="button" data-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="sr-only">Previous</span>
                 </a>

                 <a class="carousel-control-next container" href="#carouselExampleIndicators" role="button" data-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="sr-only">Next</span>
                 </a>
                 
               </div>

             
          )


    }


return (
 
       <div className=" newsCarousel">

         {d}
      
       </div>
    
    );

}
export default MainPageNews;