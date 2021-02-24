import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import CurrentTotals from './Totals/Totals'
import axios from 'axios'

class MainPage extends Component {
    
    constructor(props){

      super(props)

      this.state={

        totalsToday:[],
       
        }
   

    }
    
///////////////////////////////////////////////////////////////////////////////////    
   componentDidMount(){
/*
    var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/totals',
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
      
       axios.request(options).then((response)=> {
    
            //console.log(response.data)
            const data = response.data[0]

            var d =[]

            const confirmed = data.confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            const recovered = data.recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            const critical = data.critical.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            const deaths = data.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
           
            const lastChange = data.lastChange
            
            const lastUpdate = data.lastUpdate

            d=[confirmed,recovered,critical,deaths,lastChange,lastUpdate]
          
           // console.log(data)
          
            this.setState({totalsToday:d})
         
           
        }).then(
          
        
          
          )
        
          .catch(function (error) {
       
              console.error(error);

            });

            console.log("in second")
            console.log(this.state)
  */
 
 var options = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/provinces',
  params: {iso: 'CAN'},
  headers: {
    'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
   } 
//////////////////////////////////////////////////////////////////////////////////////////////////    

/*
setInStorage(){
   
            console.log("set in storage")

            if(sessionStorage!=null){
         
               console.log("yayyy")

            }
             else{

                console.log("whyy")


            }
}*/
/*
changed(){

  console.log("woww")

  console.log(this.state.totalsToday[0])
  console.log("jj")
  console.log(this.state.casesConfirmedStartValue)


  if(this.state.totalsToday[0] === this.state.casesConfirmedStartValue
         
    
    ){

    console.log("same")

    return
  
  }
  
  
  else{
         console.log("updated")

         var p 
         var s
         
        //////////////////////////////////////////////////////////////////////////////////////////////////// 
         const totalCasesStartValue = this.state.casesConfirmedStartValue // on 22 feb hard coded value
         const totalCasesUpdatedValue =this.state.totalsToday[0]
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
        


         const difference = totalCasesUpdatedValue - totalCasesStartValue
         
         console.log(difference)

         p = difference
         
         this.setState({differenceSinceLastUpdate:p})

         if(difference<0){

          console.log("cases reduced by" + difference)

         } else{
 
             console.log("cases increases by" + (difference))

         }
          s = p + startValue
           
         this.setState({casesConfirmedStartValue:startValue+p})
        
        
     }
        

  

}*/



    render() {
        return (
            <div>

                <Navbar></Navbar>
               <h1>Current Covid Stats</h1>
               <hr></hr>
               {/*console.log("below")*/}
               {/*console.log(this.state.totalsToday[1])*/}
              
              
                 <div>
                 <CurrentTotals confirmed={this.state.totalsToday[0]}
                               recovered={this.state.totalsToday[1]}
                               critical={this.state.totalsToday[2]}
                               deaths={this.state.totalsToday[3]}
                               lastChange={this.state.totalsToday[4]}
                               lastUpdate={this.state.totalsToday[5]}
              
                
                ></CurrentTotals>
                </div>
                
                
               
                {/*console.log(this.state)*/}
               
                {/*console.log(this.state)*/}
                
            </div>
        );
    }
}

export default MainPage;