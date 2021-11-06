export default function fetchCountryAndCodes(data){

console.log("in country action")
console.log(data)
    return{
    type:"FETCH_COUNTRIES",
    payload: data
    }
}