
var allChartData = []

export default function chart(state = allChartData, action ={}) {

     console.log(action.payload)

    if(action.type === "FETCH_CHART"){

        console.log("in fetch")
        allChartData.push(action.payload)
    }
   
   
    return state
    
}