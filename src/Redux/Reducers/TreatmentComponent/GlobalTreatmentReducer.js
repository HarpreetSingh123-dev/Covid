var allTreatments = []

export default function region(state = allTreatments, action ={}) {



    if(action.type === "FETCH"){

        console.log("in fetch")
        allTreatments.push(action.payload)
    }
   
   
   
    return state
    
}