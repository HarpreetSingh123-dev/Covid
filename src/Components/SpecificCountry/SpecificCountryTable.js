import React, { Component } from 'react';
import './SpecificCountryTable.css'
import axios from 'axios'
class SpecificCountryTable extends Component {

 constructor(props){


    super(props)

    this.state={

    
    }

   this.fetchData=this.fetchData.bind(this)
 }


    componentDidMount(){

        this.fetchData()

       
    }

    componentDidUpdate(prevProps){

       //console.log("check previous props")
        //console.log(prevProps.t)

        if(this.props.t != prevProps.t){

            console.log("change detected")
            this.fetchData()
    
    
        }

    }
    

   fetchData(){

    var k = this.props.t.toLowerCase()

    var t = k.charAt(0).toUpperCase() + k.slice(1)

    var options = {
        method: 'GET',
        url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
        params: {country: t},
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log("fetch output below") 
        console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

   }
    

    
    render() {
        return (
            <div>
                <h1>Table Here</h1>
            </div>
        );
    }
}

export default SpecificCountryTable;