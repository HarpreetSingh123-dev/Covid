

export default function fetchTreatmentData(data){

    console.log("action fired here")

    console.log(data)
    return{
    type:"FETCH",
    payload: data

    
    }
}