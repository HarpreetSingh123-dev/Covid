

export default function fetchChartData(data){

    console.log("action fired in chart")

    console.log(data)
    return{
   
        type:"FETCH_CHART",
        payload: data
  
    }
}