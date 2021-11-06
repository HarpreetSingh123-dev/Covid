var countryAndCodes = []

export default function setCountriesAndCodes(state = countryAndCodes, action ={}) {

     console.log("to check action type")
     console.log(action.type)

    if(action.type === "FETCH_COUNTRIES"){

      
        var a = action.payload

        for( var i = 0 ; i < a.length ; i++ ){

               countryAndCodes.push(a[i].Country)
               console.log("pushing")
        }

        
    }
   
   console.log("state below")
   console.log(state)
   
    return state
    
}