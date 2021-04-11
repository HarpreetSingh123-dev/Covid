import React, { Component } from 'react';
import axios from 'axios'
import { Chart } from "react-google-charts"


class MainPageChart extends Component {
    

    constructor(props){

        super(props)


        this.state={
            
            test:[ ['Year', 'Cases'],
                          
            ['2014', 76819],
            ['2015', 19237447],
            ['2016', 88737839],
            ['2017', 1030],

            ['2014', 1000],
            ['2015', 1170],
            ['2016', 660],
            ['2017', 1030],

            ['2014', 1000],
            ['2015', 1170],
            ['2016', 660],
            ['2017', 1030],

            ['2014', 1000],
            ['2015', 1170],
            ['2016', 660],
           ],
 
           test2:[ ],
           data:[]
        }

        this.setDataModel= this.setDataModel.bind(this)
        this.setFinalData = this.setFinalData.bind(this)

    }
    
componentDidMount(){


    var options = {
        method: 'GET',
        url: 'https://coronavirus-map.p.rapidapi.com/v1/spots/summary',
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
         
      //  var k = "2020-01-21"
       // console.log("bar data below")
       
       //console.log(response.data.data[k]);

       const data = response.data

       return data

      }).then(this.setDataModel)
      
         .then(this.setFinalData)
      
      .catch(function (error) {
          console.error(error);
      });




}    

setDataModel(data){

    

    var recData = data


   this.setState({data:data})

    
  
 /* var k = "2020-02-21"
    var length = data.elements 
   
    var finalObject =[]
   
    for(var i=1; i<= length; i++){

        //var k = "2020-02-21"

       

        var c = new Date(k)

        var f= c.toISOString()

        var test  = f.toString().slice(0,10)

        var p = recData.data[test].total_cases
        console.log(recData.data[test].total_cases)
        finalObject.push([k,p])
        k= c.setDate(c.getDate()+1)

        

    }

    this.setState({test2:finalObject})
   */ 
}


setFinalData(){

    var recData = this.state.data
    var k = "2020-02-21"
    var length = recData.elements 
    var lengthFinal = recData.data.length


    var finalObject =[['Year', 'Cases']]
   
    for(var i=1; i<= length; i++){

        //var k = "2020-02-21"

       

        var c = new Date(k)

        var f= c.toISOString()

        var test  = f.toString().slice(0,10)

       var p = recData.data[test].total_cases
        console.log(recData.data[test].total_cases,test,i,length,lengthFinal)
        finalObject.push([test,p])

        if(i==405){
            this.setState({test2:finalObject})
            //this.state.test2.push(finalObject)
            return
        }

        else{
            k= c.setDate(c.getDate()+1)

        }
        
        
    }

    
    

}

    render() {
    
    
        return (
            <div>
                <h1>Chart here</h1>
                <Chart
                   
                   width={'100%'}
                   height={'300px'}
                   chartType="Bar"
                   loader={<div>Loading Chart</div>}
                   data={
                         
                         this.state.test2
                       
                         }
  
                  options={{
                             // Material design options
                             chart: {
                                      title: 'Company Performance',
                                      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                    },
                          }}
                           
                          // For tests
                          rootProps={{ 'data-testid': '2' }}
                         />

                         {console.log(this.state)}
            </div>
        );
    }
}

export default MainPageChart;