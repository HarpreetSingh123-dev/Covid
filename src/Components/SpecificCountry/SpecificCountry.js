import React, { Component } from 'react';
import axios from 'axios'

class SpecificCountry extends Component {
    
    
 constructor(props){

    super(props)

    this.state={


    }

 }   
    
componentDidMount(){

   //console.log(this.props.match.params.id)
   var country = this.props.match.params.id.toLowerCase()
   var countryCode = this.props.match.params.type
   var setCountry 
   
  // function capitalizeFirstLetter(string) {
  //  return string.charAt(0).toUpperCase() + string.slice(1);
 //}


  if ( country === 'usa' ){

    
       var b = country.toUpperCase()

       //setCountry = capitalizeFirstLetter(b)

       setCountry= b

}

else{

    const myCountry = country
    const words = myCountry.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var k = words.join(" ")

    console.log("country below")
    //console.log(capitalizeFirstLetter(country))
   // setCountry = capitalizeFirstLetter(country)

   console.log(k)
   setCountry = k

}
   

 
    
   
   

 var options = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${setCountry}/${countryCode}`,
    headers: {
      'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });





}    
    
    
    
    
    
    
    render() {
        return (
            <div>
                <h1>boooooooo</h1>
            </div>
        );
    }
}

export default SpecificCountry;