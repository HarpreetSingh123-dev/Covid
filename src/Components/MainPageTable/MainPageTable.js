import React, { Component } from 'react';
import './MainPageTable.css'
import DataTable from 'react-data-table-component'
import Skeleton from '@yisheng90/react-loading';
import axios from 'axios'
import Countdown from 'react-countdown'
import {Link} from 'react-router-dom'



import './MainPageTable.css'
const R = require('ramda');
const columns = [
    {
      name: <h6 className="text-center"><b>RANKING</b></h6>,
      selector: 'number',
      center:true
     
    }, 

    

    {
      name: <h6 className="text-center">COUNTRY</h6>,
      selector: 'country',
      allowOverflow:'True',
      center:true,
      
     
     
    },

    {
        name: <h6 className="text-center">TOTAL<br></br> CASES</h6>,
        selector: 'totalcases',
        center:true,
       
      
      },

      {
        name: <h6 className="text-center">NEW <br></br>CASES</h6>,
        selector: 'newcases',
        center:true,
      
        grow:1
      },

      {
        name: <h6 className="text-center">INFECTION <br></br>RISK</h6>,
        selector: 'infectionrisk',
        center:'True',
        grow:1
      },

      {
        name: <h6 className="text-center">SERIOUS <br></br>CRITICAL</h6>,
        selector: 'seriouscritical',
        center:'True',
        grow:1
        
      },

      {
        name: <h6 className="text-center">ACTIVE <br></br>CASES</h6>,
        selector: 'activecases',
        center:'True',
        
        grow:1
      },

      {
        name: <h6 className="text-center">TOTAL <br></br>DEATHS</h6>,
        selector: 'totaldeaths',
        center:'True',
        grow:1
      },

      {
        name: <h6 className="text-center">NEW <br></br>DEATHS</h6>,
        selector: 'newdeaths',
        center:'True',
        grow:1
      },

      {
        name: <h6 className="text-center">CASE <br></br>FATILITY <br></br> RATE</h6>,
        selector: 'casefatilityrate',
        center:'True',
        grow:1
      },

      {
        name: <h6 className="text-center">TOTAL <br></br>TESTS</h6>,
        selector: 'totaltests',
        center:'True',
        grow:6
        
      },

      {
        name: <h6 className="text-center">TEST<br></br> PERCENTAGE</h6>,
        selector: 'testpercentage',
        center:'True',
        grow:5
      },

      {
        name: <h6 className="text-center">TOTAL <br></br>RECOVERED</h6>,
        selector: 'totalrecovered',
        center:'True',
        grow:5
      },

      {
        name: <h6 className="text-center">RECOVERY <br></br>PERCENTAGE</h6>,
        selector: 'recoverypercentage',
        center:'True',
        grow:5
      },

      {
        name: <h6 className="text-center">POPULATION</h6>,
        selector: 'population',
        center:'True',
        grow:5
      },

      {
        name: <h6>COUNTRY CODE</h6>,
        selector: 'countrycode',
        center:'True',
        grow:5,
        omit:'True'
      },

      {
        name: <h6>S COUNTRY</h6>,
        selector: 'searchcountry',
        center:'True',
        grow:5,
        omit:'True'
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

            search:false,

            selectedRowCountry:'',
 
            threeLetterCode:'',
            
            continent:'',

            active:'active',

            noResult: false,

            
        }

        this.setTable= this.setTable.bind(this)
        this.pushingValues= this.pushingValues.bind(this)
        // this.selectedCountry=this.selectedCountry.bind(this)
        this.change= this.change.bind(this)
        
        this.setAsiaData=this.setAsiaData.bind(this)
        this.setWorldData=this.setWorldData.bind(this)
        this.setAfricaData= this.setAfricaData.bind(this)
        this.setAustraliaData= this.setAustraliaData.bind(this)
        this.setEuropeData=this.setEuropeData.bind(this)
        this.setNorthAmericaData=this.setNorthAmericaData.bind(this)
        this.setSouthAmericaData=this.setSouthAmericaData.bind(this)
     
       
        this.fetchDataFromBackend=this.fetchDataFromBackend.bind(this)
        
    }
 
/*//////////////////////////////////////////////////////////////////////////////////*/ 
fetchDataFromBackend(){
  this.setState({loader:true})
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

  this.setState({continent:'World Data - Live Update'})

  

}


componentDidMount(){

 /*   var options = {
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
    
      this.setState({continent:'World Data -Live Update'})

      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });

      this.startTimer()
      setInterval(this.componentDidMount, 10000)*/

      this.fetchDataFromBackend()

     // setInterval(this.fetchDataFromBackend,600000 )
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                   country: <Link style={{color: "white"}}to={`/Country/${this.state.table[i].Country.toUpperCase() }/${this.state.table[i].ThreeLetterSymbol}`}>{this.state.table[i].Country.toUpperCase()}</Link>,
                   searchcountry:this.state.table[i].Country.toUpperCase(),
                   totalcases: this.state.table[i].TotalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   newcases:this.state.table[i].NewCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   infectionrisk:this.state.table[i].Infection_Risk+ "%",
                   seriouscritical:this.state.table[i].Serious_Critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   activecases:this.state.table[i].ActiveCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   totaldeaths:this.state.table[i].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   newdeaths:this.state.table[i].NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   casefatilityrate:this.state.table[i].Case_Fatality_Rate + "%",
                   totaltests:this.state.table[i].TotalTests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   testpercentage:this.state.table[i].Test_Percentage + "%",
                   totalrecovered:this.state.table[i].TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   recoverypercentage:this.state.table[i].Recovery_Proporation + "%",
                   population:this.state.table[i].Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                   countrycode:this.state.table[i].ThreeLetterSymbol,
                  // details:<Link to={`/Country/${this.state.table[i].Country.toUpperCase() }/${this.state.table[i].ThreeLetterSymbol}`}>{this.state.table[i].Country.toUpperCase()}</Link>
                   
                 }
      
                 data.push(obj)

  }

  this.setState({data:data})
  this.setState({loader:false})
 
}

/*///////////////////////////////////////////////////////////////////////////////////////////*/
change(event){

  this.setState({search:true})
     var d =[]

        if (event.target.value.length>0) {
    
                  this.setState({searchValue:event.target.value.toUpperCase()})

                  var state = this.state.data

                  var searchVal = this.state.searchValue 

                  var k = R.find(R.propEq('searchcountry',searchVal))(state)
           
                 /* let myPromise = new Promise(function(myResolve, myReject){

                    var k = R.find(R.propEq('searchcountry',searchVal))(state)

                    if(k===undefined){
                      myReject("no result found")
                    }
                    else{
                    myResolve(k); // when successful
                    }
                  })

                  myPromise.then(
                    function(value) { d.push(value)
                                      this.setState({searchData:d})
                                      this.setState({search:true}) 
                                      this.se
                                     },
                    function(error) {return}
                  );*/
                 


                 
                  if (k==undefined) {
                  
                    this.setState({noResult:true})
                               return
                            } 
    
                       
                             else {

                                   d.push(k)
                                   this.setState({noResult:false})
                                   this.setState({searchData:d})
                                   
                                 }     
             }

       else  {
       
           
          this.setState({search:false})
          return
       }
   
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setWorldData(){

  this.setState({loader:true})

  this.componentDidMount()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setAsiaData(){
  
  this.setState({loader:true})
  this.setState({continent:'Asia -Live Update'})
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
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
////////////////////////////////////////////////////////////////////////////////////////////////////

setAfricaData(){
 
  this.setState({loader:true})
  this.setState({continent:'Africa -Live Update'})
  
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa',
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


/*////////////////////////////////////////////////////////////////////////////////////////*/  
    
setAustraliaData(){
  
  this.setState({loader:true})
  this.setState({continent:'Australia -Live Update'})

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/australia',
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
/////////////////////////////////////////////////////////////////////////////////////////////

setEuropeData(){

  this.setState({loader:true})
  this.setState({continent:'Europe -Live Update'})


  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe',
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
/////////////////////////////////////////////////////////////////////////////////////////////

setNorthAmericaData(){

  this.setState({loader:true})
  this.setState({continent:'North America -Live Update'})
  
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica',
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
////////////////////////////////////////////////////////////////////////////////////////////

setSouthAmericaData(){
  
  this.setState({loader:true})
  this.setState({continent:'South America -Live Update'})
  
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica',
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

/////////////////////////////////////////////////////////////////////////////////////////////
  render() {
      


        var a = null

        if(this.state.loader){
                 a =(<Skeleton rows={38} color="lightgray"></Skeleton>)
         }

        else {

            if(this.state.search===false){
             
             a= ( <div className="tableSet">
                  
                   <div className="searchInput">

                     <div class="input-group mb-3">
                       
                               <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Type here and press space after typing for search" onChange={this.change}></input>

                      </div>
                  
                  
                   </div>


                          <DataTable
              
                                title={<h3><b>{this.state.continent}</b></h3>}
                                columns={columns}
                                data={this.state.data}
                                highlightOnHover={true}
                                pointerOnHover={true}
                                fixedHeader={true}
                                theme={'dark'}
                                overflowY={true}
                                subHeader={true}
                                fixedHeaderScrollHeight={'800px'}
                                subHeaderComponent={<h5 style={{color: "white"}}>Next Update In&nbsp;:&nbsp; <Countdown
                                                     date={Date.now() + 900000}           
                                                     onComplete={this.fetchDataFromBackend}
                                                     ></Countdown>
                                                     
                                                     </h5>                  
                                                    }
                                subHeaderAlign={'left'}
                                
                               
                                /*conditionalRowStyles={conditionalRowStyles}*/
                                //onRowClicked={ (row) => this.selectedCountry(row) }
                                //expandableRows={true}
                                //expandOnRowClicked={true}
                                //expandableRowsHideExpander={true}
                                //expandableRowsComponent={<Link to={`/Country/${this.state.selectedRowCountry }/${this.state.threeLetterCode}`}>KK</Link>}
                                //onRowExpandToggled={(s,p) => this.test(s)} 
                                >


                                 </DataTable>  

                 </div>
             
              )}

              else {


                 a = (

                    <div className="tableSet">
                  
                    <div className="searchInput">
 
                    <div class="input-group mb-3">
                       
                        <input type="text" class="form-control" aria-describedby="inputGroup-sizing-default" placeholder="Type here and press space after typing for search" onChange={this.change}></input>
 
                        
                  </div>

                    </div>
 
                      <h4>Following Result Found</h4>
                       <DataTable
                 
                                 title={<h2>{this.state.continent}</h2>}
                                 columns={columns}
                                 data={this.state.searchData}
                                 highlightOnHover={true}
                                 pointerOnHover={true}
                                 fixedHeader={true}
                                 theme={'dark'}
                                
                                 subHeader={true}
                                 
                                 noDataComponent={<h1>hhhhhhh</h1>}

                                 subHeaderComponent={<h4 style={{color: "white"}}><b>Next Update In&nbsp;:&nbsp; <Countdown
                                                     date={Date.now() + 600000}           
                                                     onComplete={this.fetchDataFromBackend}
                                                     ></Countdown>
                                                     </b>
                                                     </h4>                  
                                                    }
                                subHeaderAlign={'left'}
                                
                                 //conditionalRowStyles={conditionalRowStyles}
                                 //onRowClicked={(row) => this.selectedCountry(row)}
                                 //expandableRowsHideExpander={true}
                                 //expandableRows={true}
                                 //expandOnRowClicked={true}
                                //expandableRowsComponent={<Link to={`/Country/${this.state.selectedRowCountry }/${this.state.threeLetterCode}`}><h1>{this.state.selectedRowCountry}</h1></Link>}
                              >
 
 
                      </DataTable>
 
                  </div>

                  )

          if(this.state.noResult) {
               
               
               a= ( <div className="tableSet">
                  
                      <div className="searchInput">

                       <div class="input-group mb-3">
                   
                        <input type="text" class="form-control" aria-describedby="inputGroup-sizing-default" placeholder="Type here and press space after typing for search" onChange={this.change}></input>

                    
                      </div>

                     </div>

                     <DataTable
                      noDataComponent={<h1>No Result Found</h1>}
                     >


                     </DataTable>
                   
                  </div>)  
                  
                }
              }
            }
          
        return (
            
            <div className="mainTable">
                
               <div className="continentBar"> 
                
               <nav class="nav nav-pills  nav-fill">
 
                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setWorldData} ><b>WORLD</b></a>
                     
                      {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setWorldData}>WORLD</button>*/}
                     </li>
  
                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setAsiaData} ><b>ASIA</b></a>
                      {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAsiaData}>ASIA</button>*/}
                     </li>
  
                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setAfricaData}><b>AFRICA</b></a>
                     {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAfricaData}>AFRICA</button>*/}
                     </li>
  
                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setAustraliaData} ><b>AUSTRALIA</b></a>
                     {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAustraliaData}>AUSTRALIA</button>*/}
                     </li>

                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setEuropeData}><b>EUROPE</b></a>
                     {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setEuropeData}>EUROPE</button>*/}
                     </li>

                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setNorthAmericaData} ><b>NORTH AMERICA</b></a>
                     {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setNorthAmericaData}>NORTH-AMERICA</button>*/}
                     </li>

                     <li class="nav-item">
                     <a class="flex-sm-fill text-sm-center nav-link" onClick={this.setSouthAmericaData} ><b>SOUTH AMERICA</b></a>
                     {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setSouthAmericaData}>SOUTH-AMERICA</button>*/}
                     </li>

                  </nav>
                    
                   {/*  <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setWorldData}>WORLD</button></div>
                     <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAsiaData}>ASIA</button></div>
                     <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAfricaData}>AFRICA</button></div>
                     <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAustraliaData}>AUSTRALIA</button></div>
                     <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setEuropeData}>EUROPE</button></div>
                     <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setNorthAmericaData}>NORTH AMERICA</button></div>
                     <div ><button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setSouthAmericaData}>SOUTH AMERICA</button></div>
              
        */}
              </div>   
              <hr className="rulee" ></hr>
                {a}
              
              {/*console.log(this.state)*/}
            </div>
        );
    }
}

export default MainPageTable;