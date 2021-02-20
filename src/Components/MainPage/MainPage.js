import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
class MainPage extends Component {
    
    constructor(props){

      super(props)

      this.state={

      }
   

    }
    
    
   componentDidMount(){

    var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/totals',
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
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

                <Navbar></Navbar>
                
            </div>
        );
    }
}

export default MainPage;