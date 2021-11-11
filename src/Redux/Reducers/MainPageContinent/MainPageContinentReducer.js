var continentStats = []

export default function region(state = continentStats, action ={}) {



    if(action.type === "FETCH_CONTINENTS_DATA"){

     
           var a = action.payload

           for( var i =0 ; i < a.length ; i++ ){

               continentStats.push(a[i])

           }
    }
   
   
   
    return state
    
}