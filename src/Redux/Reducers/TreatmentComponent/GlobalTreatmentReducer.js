import axios from "axios";

var allTreatments = []

export default function region(state = allTreatments, action ={}) {

   
    switch (action.type) {

        case "FETCH_All_TREATMENTS_DATA": {

            var a = []




        }

        break;

     case "CLEAR_ALL_DATA":{

           allTreatments.length = 0

           //console.log("whyyyyyyy")
        }

        break;

        case "TEST":{

            console.log("wtffff")
        }

        break;


    }
   
   
   
   
    

    return state
    
}