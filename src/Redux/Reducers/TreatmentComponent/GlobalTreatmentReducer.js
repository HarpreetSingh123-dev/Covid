


var allTreatments = []

export default function region(state = allTreatments, action ={}) {

     console.log(action.payload)

    if(action.type === "FETCH"){

        console.log("in fetch")
        allTreatments.push(action.payload)
    }
   
   
   
    return state
    
}