import React,{useEffect, useState} from 'react';
import './MainPageNews.css'
import axios from 'axios'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import ErrorImage from '../../../Images/Covid_2.jpg'
import ReactTimeAgo from 'react-time-ago'


//import { waitFor } from '@testing-library/dom';

function MainPageNews(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const [data , finalData ] = useState([])


    const items = [
        {
          src: ErrorImage,
          altText: 'Slide 1 kkkkkn',
          header: 'Slide 1 Header',
          caption: 'Slide 1 lllll'
        },
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ];

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

         console.log("in fetched data")
         console.log(value)

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
    }



    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }


      const slides = data.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
           
           <div class="card">
  <div class="card-body">
    <h3 class="card-title text-center"><b>{item.header}</b></h3>
    <p class="card-text">{item.caption}</p>

    <a href={item.link} target="_blank">Click To Know More</a>
    <p class="card-text"><small class="text-muted">{item.lastUpdate}</small></p>
    
  </div>
  <a href={item.link} target="_blank" ><img class="card-img-bottom imgg" src={item.src} alt="Card image cap"></img></a>
</div>

                
              {/*<a href={item.link} target="_blank"><img className="imgg" src={item.src} alt={item.altText} ></img></a>*/}
            
            {/*<CarouselCaption  className="tt" captionText={item.caption} captionHeader={item.header} />*/}
          </CarouselItem>
        );
      });

 





return (
 
        <div className="container-fluid offset-0.9" style={{width:'80%', marginTop:'70px'}} >

      <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
           >
                 <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {slides}
                 <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                 <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
        
      
        </div>
    
    );
}

export default MainPageNews;