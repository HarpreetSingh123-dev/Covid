var allChartData = []

export default function chart(state = allChartData, action ={}) {

    if(action.type === "FETCH_CHART"){

        console.log("in fetch")
        allChartData.push(action.payload)
    }
   
   
    return state
    
}