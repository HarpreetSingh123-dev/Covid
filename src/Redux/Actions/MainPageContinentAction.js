export default function fetchContinentsData(data){

    console.log("action fired in continents")

    console.log(data)
    return{
   
        type:"FETCH_CONTINENTS_DATA",
        payload: data
  
    }
}