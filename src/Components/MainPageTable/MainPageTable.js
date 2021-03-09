import React, { Component } from 'react';
import './MainPageTable.css'
import DataTable from 'react-data-table-component'
import Skeleton from '@yisheng90/react-loading';
import axios from 'axios'



import './MainPageTable.css'
const R = require('ramda');
const columns = [
    {
      name: <h6>RANKING</h6>,
      selector: 'number',
      center:true
     
    }, 
    {
      name: <h6>COUNTRY</h6>,
      selector: 'country',
      allowOverflow:'True',
      center:true,
      
     
     
    },

    {
        name: <h6>TOTAL CASES</h6>,
        selector: 'totalcases',
        center:true,
       
      
      },

      {
        name: <h6>NEW CASES</h6>,
        selector: 'newcases',
        center:true,
        sortable:true,
        grow:1
      },

      {
        name: <h6>INFECTION RISK</h6>,
        selector: 'infectionrisk',
        center:'True',
        grow:1
      },

      {
        name: <h6>SERIOUS CRITICAL</h6>,
        selector: 'seriouscritical',
        center:'True',
        grow:1
        
      },

      {
        name: <h6>ACTIVE CASES</h6>,
        selector: 'activecases',
        center:'True',
        sortable:'True',
        grow:1
      },

      {
        name: <h6>TOTAL DEATHS</h6>,
        selector: 'totaldeaths',
        center:'True',
        grow:1
      },

      {
        name: <h6>NEW DEATHS</h6>,
        selector: 'newdeaths',
        center:'True',
        grow:1
      },

      {
        name: <h6>CASE FATILITY RATE</h6>,
        selector: 'casefatilityrate',
        center:'True',
        grow:1
      },

      {
        name: <h6>TOTAL TESTS</h6>,
        selector: 'totaltests',
        center:'True',
        grow:6
        
      },

      {
        name: <h6>TEST PERCENTAGE</h6>,
        selector: 'testpercentage',
        center:'True',
        grow:5
      },

      {
        name: <h6>TOTAL RECOVERED</h6>,
        selector: 'totalrecovered',
        center:'True',
        grow:5
      },

      {
        name: <h6>RECOVERY PERCENTAGE</h6>,
        selector: 'recoverypercentage',
        center:'True',
        grow:5
      },

      {
        name: <h6>POPULATION</h6>,
        selector: 'population',
        center:'True',
        grow:5
      },

  ];


class MainPageTable extends Component {
    
    constructor(props){

        super(props)

        this.state={
           
            table:[],
            data:[],
            loader:true,
            searchValue:'', 

            searchData:[],

            search:false
       
        }

        this.setTable= this.setTable.bind(this)
        this.pushingValues= this.pushingValues.bind(this)
        this.sort.bind(this)
        this.change= this.change.bind(this)
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

        .then(this.pushingValues)
        
        .catch(function (error) {
          console.error(error);
      });
    
}

/*/////////////////////////////////////////////////////////////////////////////////////*/

setTable(tableData){

    var a = []

    for(var i=0; i<tableData.length; i++){

        var b = tableData[i]

        a.push(b)
    }

    this.setState({table:a})

    
}

/*//////////////////////////////////////////////////////////////////////////////////// */

pushingValues(){

    var data =[]

    var length = this.state.table.length
    console.log("length below")

    console.log(length)
    for (var i =0 ; i<length; i++){


       var obj = { number:[i+1], 
                   country: this.state.table[i].Country.toUpperCase(),
                   totalcases: this.state.table[i].TotalCases,
                   newcases:this.state.table[i].NewCases,
                   infectionrisk:this.state.table[i].Infection_Risk,
                   seriouscritical:this.state.table[i].Serious_Critical,
                   activecases:this.state.table[i].ActiveCases,
                   totaldeaths:this.state.table[i].TotalDeaths,
                   newdeaths:this.state.table[i].NewDeaths,
                   casefatilityrate:this.state.table[i].Case_Fatality_Rate,
                   totaltests:this.state.table[i].TotalTests,
                   testpercentage:this.state.table[i].Test_Percentage,
                   totalrecovered:this.state.table[i].TotalRecovered,
                   recoverypercentage:this.state.table[i].Recovery_Proporation,
                   population:this.state.table[i].Population
                   
                 }
      
                 data.push(obj)

  }

  this.setState({data:data})
  this.setState({loader:false})
}

/*///////////////////////////////////////////////////////////////////////////////////////////*/

sort(row){

    console.log("row below")
    console.log(row)
    
    
}

change(event){

   
     var d =[]

        if (event.target.value.length>0) {
    
                  this.setState({searchValue:event.target.value.toUpperCase()})

                  var state = this.state.data

                  var searchVal = this.state.searchValue 

                  var k = R.find(R.propEq('country',searchVal))(state)
        
                          if (k===undefined) {

                               console.log("udududu")
                               return
                             } 
    
      
                             else {

                                   d.push(k)
                                   this.setState({searchData:d})
                                   this.setState({search:true})
                                 }       
           }

       else  {
       
           console.log("noooo")
          this.setState({search:false})
          return
       }
   
}


    
/*////////////////////////////////////////////////////////////////////////////////////////*/  
    

  render() {
        
        const conditionalRowStyles = [
         {
            when: row => row.totaldeaths>50000,

            style: {
                backgroundColor: 'darkred',
            }

         }
        ]
     ///////////////////////////////////
        var a = null

        if(this.state.loader){
                 a =(<Skeleton rows={38} color="lightgray"></Skeleton>)
         }

        else {

            if(this.state.search===false){
             
             a= ( <div className="tableSet">
                  
                   <div className="searchInput">

                     <div class="input-group mb-3">
                       
                        <div class="input-group-prepend">
                          
                            <span class="input-group-text" id="inputGroup-sizing-default"><b>Type Name Of The Country For Search</b></span>
                        
                        </div>
                   
                   
                               <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Type here and press space after typing for search" onChange={this.change}></input>

                      </div>
                  
                  
                   </div>


                      <DataTable
                
                                title={<h2>World Data -Live Update</h2>}
                                columns={columns}
                                data={this.state.data}
                                highlightOnHover={true}
                                pointerOnHover={true}
                                fixedHeader={true}
                                theme={'dark'}
                                overflowY={true}
                                subHeader={true}
                                fixedHeaderScrollHeight={'800px'}
                                
                               
                                /*conditionalRowStyles={conditionalRowStyles}*/
                                onRowClicked={(row) => this.sort(row)}
                                
                                 >


                     </DataTable>

                 </div>
             
              )}

              else {


                 a = (

                    <div className="tableSet">
                  
                    <div className="searchInput">
 
                    <div class="input-group mb-3">
                       
                       <div class="input-group-prepend">
                         
                           <span class="input-group-text" id="inputGroup-sizing-default"><b>Type Name Of The Country For Search</b></span>
                       
                       </div>
                        
                        <input type="text" class="form-control" aria-describedby="inputGroup-sizing-default" placeholder="Type here and press space after typing for search" onChange={this.change}></input>
 
                        
                  </div>

                    </div>
 
                      <h4>Following Result Found</h4>
                       <DataTable
                 
                                 title={<h2>World Data -Live Update</h2>}
                                 columns={columns}
                                 data={this.state.searchData}
                                 highlightOnHover={true}
                                 pointerOnHover={true}
                                 fixedHeader={true}
                                 theme={'dark'}
                                 overflowY={true}
                                 subHeader={true}
                                 
                                 
                                
                                 //conditionalRowStyles={conditionalRowStyles}
                                 onRowClicked={(row) => this.sort(row)}
                                 
                                  >
 
 
                      </DataTable>
 
                  </div>

                  )
              }
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