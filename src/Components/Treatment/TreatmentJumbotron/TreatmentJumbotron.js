import React from 'react';
import './TreatmentJumbotron.css'
import Skeleton from '@yisheng90/react-loading';
import { prop } from 'ramda';


function TreatmentJumbotron(props) {
    
    var data = props.data
    var heading = null
    var subHeading = null
    var a

    if(!data){

       heading = "kk"
       subHeading = "jj"
      }

    else{

        heading = props.data.heading
        subHeading = props.data.subHeading

    }

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
       
       <div className="treatmentJumbotron">
            
        {a}
        </div>
    );
}

export default TreatmentJumbotron;