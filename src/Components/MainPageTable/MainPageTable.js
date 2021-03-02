import React, { Component } from 'react';
import './MainPageTable.css'
import DataTable from 'react-data-table-component'
import Skeleton from '@yisheng90/react-loading';
import axios from 'axios'
import './MainPageTable.css'

const columns = [
    {
      name: 'Number',
      selector: 'number',
     
    },
    {
      name: 'Country',
      selector: 'country',
      sortable: true,
      right: true,
    },

    {
        name: 'Total Cases',
        selector: 'totalcases',
        sortable: true,
        right: true,
      },

      {
        name: 'New Cases',
        selector: 'newcases',
        sortable: true,
        right: true,
      },

      {
        name: 'Infection Risk',
        selector: 'infectionrisk',
        sortable: true,
        right: true,
      },

      {
        name: 'Serious Critical',
        selector: 'seriouscritical',
        sortable: true,
        right: true,
      },

      {
        name: 'Active Cases',
        selector: 'activecases',
        sortable: true,
        right: true,
      },

      {
        name: 'Total Deaths',
        selector: 'totaldeaths',
        sortable: true,
        right: true,
      },

      {
        name: 'New Deaths',
        selector: 'newdeaths',
        sortable: true,
        right: true,
      },

      {
        name: 'Case Fatility Rate',
        selector: 'casefatilityrate',
        sortable: true,
        right: true,
      },

      {
        name: 'Total Tests',
        selector: 'totaltests',
        sortable: true,
        right: true,
      },

      {
        name: 'Test Percentage',
        selector: 'testpercentage',
        sortable: true,
        right: true,
      },

      {
        name: 'Total Recovered',
        selector: 'totalrecovered',
        sortable: true,
        right: true,
      },

      {
        name: 'Recovery Percentage',
        selector: 'recoverypercentage',
        sortable: true,
        right: true,
      },

      {
        name: 'Population',
        selector: 'population',
        sortable: true,
        right: true,
      },

  ];

  

class MainPageTable extends Component {
    
    constructor(props){

        super(props)

        this.state={
           
            table:[],
            data:[],
            loader:true
       
        }

        this.setTable= this.setTable.bind(this)
        this.pp= this.pp.bind(this)
    }
 
/*//////////////////////////////////////////////////////////////////////////////////*/ 
componentDidMount(){

    var options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries',
        headers: {
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
         
        const tableData = response.data

        return tableData
     
     
        })
        
        .then(this.setTable)

        .then(this.pp)
        
        .catch(function (error) {
          console.error(error);
      });
    
}



setTable(tableData){

    var a = []

    for(var i=0; i<tableData.length; i++){

        var b = tableData[i]

        a.push(b)
    }

    this.setState({table:a})

    
}


pp(){

    var data =[]

    var length = this.state.table.length
    console.log("length below")

    console.log(length)
    for (var i =0 ; i<length; i++){


       var obj = { number:[i+1], 
                   country: this.state.table[i].Country,
                   totalcases: this.state.table[i].TotalCases,
                   
                 }
      data.push(obj)
  }

  this.setState({data:data})
  this.setState({loader:false})
}

 
/*/////////////////////////////////////////////////////////////////////////////////*/  
    render() {
       
        var a = null

        if(this.state.loader){


            a =(<Skeleton rows={38} color="lightgray"></Skeleton>)
        }

        else{

            a= (

               
                
                  <div className="tableSet">

                      <DataTable
                
                                title="World Data -Live Update"
                                columns={columns}
                                data={this.state.data}
                                 >


                     </DataTable>

                 </div>
             
            )
        }
         
        return (
            <div className="mainTable">
                
                {a}

                {console.log(this.state)}
            </div>
        );
    }
}

export default MainPageTable;