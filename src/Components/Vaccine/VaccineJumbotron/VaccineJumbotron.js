import React from 'react';
import './VaccineJumbotron.css'
import Skeleton from '@yisheng90/react-loading';
//import { prop } from 'ramda';


function VaccineJumbotron(props) {
    
    
     console.log("props below")
     console.log(props.headings)

     var heading = props.headings.heading
     var subHeading = props.headings.subHeading
     var a = null

     /*
     if(!props.headings){

      heading = <Skeleton rows={2} height={10} color="lightgray"></Skeleton>
      subHeading = <Skeleton rows={2} height={10} color="lightgray"></Skeleton>

     }

     else{
  
       heading = props.headings.heading
       subHeading = props.headings.subHeading
     }
      
 */

    if(props.loaderState){

         a = <Skeleton rows={7} height={20} color="lightgray"></Skeleton>

    }

    else {

          a = (<div class="jumbotron">
               <h4 class="display-4"><b>{heading}</b></h4>
           
               <hr class="my-4" style={{background:'white'}}></hr>
                 <p>{subHeading}</p>

               
                  
               </div> )
    }
    
    return (
       
       <div className="vaccineJumbotron">
            
        {a}
        </div>
    );
}

export default VaccineJumbotron;