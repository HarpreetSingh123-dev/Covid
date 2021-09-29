import React, { Component } from "react";
import "./MainPageTable.css";
import DataTable from "react-data-table-component";
import Skeleton from "@yisheng90/react-loading";
import axios from "axios";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

import "./MainPageTable.css";
const R = require("ramda");
const columns = [
  {
    name: (
      <h6 className="text-center">
        <b>RANKING</b>
      </h6>
    ),
    selector: "number",
    center: true,
  },

  {
    name: <h6 className="text-center">COUNTRY</h6>,
    selector: "country",
    allowOverflow: "True",
    center: true,
  },

  {
    name: (
      <h6 className="text-center">
        TOTAL<br></br> CASES
      </h6>
    ),
    selector: "totalcases",
    center: true,
  },

  {
    name: (
      <h6 className="text-center">
        NEW <br></br>CASES
      </h6>
    ),
    selector: row => row.newcases,
    center: true,
   
    grow: 1,

    conditionalCellStyles: [

                   {      when: row => row.newcases.replace(/,/g, '') > 1000 ,

                            style:{

                              backgroundColor:'rgb(255,238,170)',
                              color:'black'
                            }
                     



                   }

                  ]
  },

  {
    name: (
      <h6 className="text-center">
        INFECTION <br></br>RISK
      </h6>
    ),
    selector: "infectionrisk",
    center: "True",
    grow: 1,
  },

  {
    name: (
      <h6 className="text-center">
        SERIOUS <br></br>CRITICAL
      </h6>
    ),
    selector: "seriouscritical",
    center: "True",
    grow: 1,
  },

  {
    name: (
      <h6 className="text-center">
        ACTIVE <br></br>CASES
      </h6>
    ),
    selector: row=> row.activecases,
    center: "True",

    grow: 1,

    conditionalCellStyles: [

      {      when: row => row.activecases.replace(/,/g, '') >= 100000 ,

               style:{

                 backgroundColor:'indianred',
                 color:'black'
               }

       }

     ]



   
  },

  {
    name: (
      <h6 className="text-center">
        TOTAL <br></br>DEATHS
      </h6>
    ),
    selector: "totaldeaths",
    center: "True",
    grow: 1,
  },

  {
    name: (
      <h6 className="text-center">
        NEW <br></br>DEATHS
      </h6>
    ),
    selector: row=> row.newdeaths,
    center: "True",
    grow: 1,

    conditionalCellStyles: [

      {      when: row => row.newdeaths.replace(/,/g, '') > 50 ,

               style:{

                 backgroundColor:'lightcoral',
                 color:'black'
               }
        



      }

     ]
  },

  {
    name: (
      <h6 className="text-center">
        CASE <br></br>FATILITY <br></br> RATE
      </h6>
    ),
    selector: "casefatilityrate",
    center: "True",
    grow: 1,
  },

  {
    name: (
      <h6 className="text-center">
        TOTAL <br></br>TESTS
      </h6>
    ),
    selector: "totaltests",
    center: "True",
    grow: 6,
  },

  {
    name: (
      <h6 className="text-center">
        TEST<br></br> PERCENTAGE
      </h6>
    ),
    selector: "testpercentage",
    center: "True",
    grow: 5,
  },

  {
    name: (
      <h6 className="text-center">
        TOTAL <br></br>RECOVERED
      </h6>
    ),
    selector: "totalrecovered",
    center: "True",
    grow: 5,
  },

  {
    name: (
      <h6 className="text-center">
        RECOVERY <br></br>PERCENTAGE
      </h6>
    ),
    selector: "recoverypercentage",
    center: "True",
    grow: 5,
  },

  {
    name: <h6 className="text-center">POPULATION</h6>,
    selector: "population",
    center: "True",
    grow: 5,
  },

  {
    name: <h6>COUNTRY CODE</h6>,
    selector: "countrycode",
    center: "True",
    grow: 5,
    omit: "True",
  },

  {
    name: <h6>S COUNTRY</h6>,
    selector: "searchcountry",
    center: "True",
    grow: 5,
    omit: "True",
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "dimgrey",
    },   
  },

  cells:{
    style: {
      //border:"0.1px solid black",
     // backgroundColor: "dimgrey",
    },
  }
};

class MainPageTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: [],
      data: [],
      loader: true,
      

      selectedRowCountry: "",

      threeLetterCode: "",

      continent: "",

      active: "active",

      search :'false',

      currentDisplayTableData:[],




      worldBackgroundColor:'gray',

      asiaBackgroundColor:'',

      africaBackgroundColor:'',

      australiaBackgroundColor:'',

      europeBackgroundColor:'',

      northAmericaBackgroundColor:'',

      southAmericaBackgroundColor:''

    };

    this.setTable = this.setTable.bind(this);
    this.pushingValues = this.pushingValues.bind(this);
    // this.selectedCountry=this.selectedCountry.bind(this)
    this.searchHandler = this.searchHandler.bind(this)

    this.setAsiaData = this.setAsiaData.bind(this);
    this.setWorldData = this.setWorldData.bind(this);
    this.setAfricaData = this.setAfricaData.bind(this);
    this.setAustraliaData = this.setAustraliaData.bind(this);
    this.setEuropeData = this.setEuropeData.bind(this);
    this.setNorthAmericaData = this.setNorthAmericaData.bind(this);
    this.setSouthAmericaData = this.setSouthAmericaData.bind(this);

    this.fetchDataFromBackend = this.fetchDataFromBackend.bind(this);
  }

  /*//////////////////////////////////////////////////////////////////////////////////*/
  fetchDataFromBackend() {
    this.setState({ loader: true });
    var options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })

      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });

    this.setState({ continent: "World Data - Live Update" });
  }

  componentDidMount() {
    this.fetchDataFromBackend();
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  setTable(tableData) {
    var a = [];

    for (var i = 0; i < tableData.length; i++) {
      var b = tableData[i];

      a.push(b);
    }

    this.setState({ table: a });
  }

  /*//////////////////////////////////////////////////////////////////////////////////// */

  pushingValues() {
    var data = [];

    var length = this.state.table.length;
    console.log("length below");

    console.log(length);
    for (var i = 0; i < length; i++) {
      var obj = {
        number: [i + 1],
        country: (
          <Link
            style={{ color: "white" }}
            to={`/Country/${this.state.table[i].Country.toUpperCase()}/${
              this.state.table[i].ThreeLetterSymbol
            }`}
          >
            {this.state.table[i].Country.toUpperCase()}
          </Link>
        ),
        searchcountry: this.state.table[i].Country.toUpperCase(),
        totalcases: this.state.table[i].TotalCases.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        newcases: this.state.table[i].NewCases.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        
        infectionrisk: this.state.table[i].Infection_Risk + "%",
        seriouscritical: this.state.table[
          i
        ].Serious_Critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        activecases: this.state.table[i].ActiveCases.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        totaldeaths: this.state.table[i].TotalDeaths.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        newdeaths: this.state.table[i].NewDeaths.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        casefatilityrate: this.state.table[i].Case_Fatality_Rate + "%",
        totaltests: this.state.table[i].TotalTests.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        testpercentage: this.state.table[i].Test_Percentage + "%",
        totalrecovered: this.state.table[i].TotalRecovered.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        recoverypercentage: this.state.table[i].Recovery_Proporation + "%",
        population: this.state.table[i].Population.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        ),
        countrycode: this.state.table[i].ThreeLetterSymbol,
        // details:<Link to={`/Country/${this.state.table[i].Country.toUpperCase() }/${this.state.table[i].ThreeLetterSymbol}`}>{this.state.table[i].Country.toUpperCase()}</Link>
      };

      data.push(obj);
    }

    this.setState({ data: data });
    this.setState({ loader: false , currentDisplayTableData:data});
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////*/
  searchHandler(event) {

     console.log(event.target.value)

       var searchTerm = event.target.value

       var currentContinentTableData = this.state.currentDisplayTableData

       if(searchTerm === ""){

           this.setState({search:false , data:currentContinentTableData})

           

       }

       else{

            this.setState({search:true})
         
            var dataToBeFiltered = this.state.data

            var a =  dataToBeFiltered.filter((data)=>{

                      var cntry = data.country.props.children      

                         console.log(data)

                         if(cntry.toLowerCase().includes(searchTerm.toLowerCase())){

                               return data
                   
                             }
               })

            this.setState({data:a})   
             
          }

  }

  /*////////////////////////////////////////////////////////////////////////////////////////////*/
  setWorldData() {
    this.setState({ loader: true });

    this.componentDidMount();

    this.setState({

      worldBackgroundColor:'gray',
      asiaBackgroundColor:'',
      africaBackgroundColor:'',
      australiaBackgroundColor:'',
      europeBackgroundColor:'',
      northAmericaBackgroundColor:'',
      southAmericaBackgroundColor:''
    })
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  setAsiaData() {

    this.setState({

      worldBackgroundColor:'',
      asiaBackgroundColor:'gray',
      africaBackgroundColor:'',
      australiaBackgroundColor:'',
      europeBackgroundColor:'',
      northAmericaBackgroundColor:'',
      southAmericaBackgroundColor:''
    })

    this.setState({ loader: true });
    this.setState({ continent: "Asia -Live Update" });
    const options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })
      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  setAfricaData() {

    this.setState({

      worldBackgroundColor:'',
      asiaBackgroundColor:'',
      africaBackgroundColor:'gray',
      australiaBackgroundColor:'',
      europeBackgroundColor:'',
      northAmericaBackgroundColor:'',
      southAmericaBackgroundColor:''
    })

    this.setState({ loader: true });
    this.setState({ continent: "Africa -Live Update" });

    const options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })

      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });
  }

  /*////////////////////////////////////////////////////////////////////////////////////////*/

  setAustraliaData() {

    this.setState({

      worldBackgroundColor:'',
      asiaBackgroundColor:'',
      africaBackgroundColor:'',
      australiaBackgroundColor:'gray',
      europeBackgroundColor:'',
      northAmericaBackgroundColor:'',
      southAmericaBackgroundColor:''
    })

    this.setState({ loader: true });
    this.setState({ continent: "Australia -Live Update" });

    const options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/australia",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })

      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////

  setEuropeData() {

    this.setState({

      worldBackgroundColor:'',
      asiaBackgroundColor:'',
      africaBackgroundColor:'',
      australiaBackgroundColor:'',
      europeBackgroundColor:'gray',
      northAmericaBackgroundColor:'',
      southAmericaBackgroundColor:''
    })

    this.setState({ loader: true });
    this.setState({ continent: "Europe -Live Update" });

    const options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })

      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////

  setNorthAmericaData() {

    this.setState({

      worldBackgroundColor:'',
      asiaBackgroundColor:'',
      africaBackgroundColor:'',
      australiaBackgroundColor:'',
      europeBackgroundColor:'',
      northAmericaBackgroundColor:'gray',
      southAmericaBackgroundColor:''
    })

    this.setState({ loader: true });
    this.setState({ continent: "North America -Live Update" });

    const options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })

      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////

  setSouthAmericaData() {

    this.setState({

      worldBackgroundColor:'',
      asiaBackgroundColor:'',
      africaBackgroundColor:'',
      australiaBackgroundColor:'',
      europeBackgroundColor:'',
      northAmericaBackgroundColor:'',
      southAmericaBackgroundColor:'gray'
    })

    this.setState({ loader: true });
    this.setState({ continent: "South America -Live Update" });

    const options = {
      method: "GET",
      url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica",
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const tableData = response.data;

        return tableData;
      })

      .then(this.setTable)

      .then(this.pushingValues)

      .catch(function (error) {
        console.error(error);
      });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    var a = null;

    if (this.state.loader) {
                a = <Skeleton rows={38} color="lightgray"></Skeleton>;
     } 
    
      else {
        
       
        a = (
          <div className="tableSet">
            <div className="searchInput">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Search based on country"
                  onChange={this.searchHandler}
                ></input>
              </div>
            </div>

            <DataTable
              title={
                <h3>
                  <b>{this.state.continent}</b>
                </h3>
              }
              columns={columns}
              data={this.state.data}
              highlightOnHover={true}
              pointerOnHover={true}
              fixedHeader={true}
              theme={"dark"}
              overflowY={true}
              subHeader={true}
              fixedHeaderScrollHeight={"800px"}
              subHeaderComponent={
                <h5 style={{ color: "white" }}>
                  Next Update In&nbsp;:&nbsp;{" "}
                  <Countdown
                    date={Date.now() + 900000}
                    onComplete={this.fetchDataFromBackend}
                  ></Countdown>
                </h5>
              }
              subHeaderAlign={"left"}
              customStyles={customStyles}

              ></DataTable>
          </div>
        );
       
    }

    return (
      
       <div className="mainTable">
        <div className="continentBar">
          <nav class="nav nav-pills  nav-fill">
            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setWorldData}
                style={{backgroundColor:this.state.worldBackgroundColor}}
              >
                <b>WORLD</b>
              </a>

              {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setWorldData}>WORLD</button>*/}
            </li>

            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setAsiaData}
                style={{backgroundColor:this.state.asiaBackgroundColor}}
              >
                <b>ASIA</b>
              </a>
              {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAsiaData}>ASIA</button>*/}
            </li>

            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setAfricaData}
                style={{backgroundColor:this.state.africaBackgroundColor}}
              >
                <b>AFRICA</b>
              </a>
              {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAfricaData}>AFRICA</button>*/}
            </li>

            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setAustraliaData}
                style={{backgroundColor:this.state.australiaBackgroundColor}}
              >
                <b>AUSTRALIA</b>
              </a>
              {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setAustraliaData}>AUSTRALIA</button>*/}
            </li>

            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setEuropeData}
                style={{backgroundColor:this.state.europeBackgroundColor}}
              >
                <b>EUROPE</b>
              </a>
              {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setEuropeData}>EUROPE</button>*/}
            </li>

            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setNorthAmericaData}
                style={{backgroundColor:this.state.northAmericaBackgroundColor}}
              >
                <b>NORTH AMERICA</b>
              </a>
              {/*<button type="button" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.setNorthAmericaData}>NORTH-AMERICA</button>*/}
            </li>

            <li class="nav-item">
              <a
                class="flex-sm-fill text-sm-center nav-link"
                onClick={this.setSouthAmericaData}
                style={{backgroundColor:this.state.southAmericaBackgroundColor}}
              >
                <b>SOUTH AMERICA</b>
              </a>
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
        <hr className="rulee"></hr>
        {a}

        {/*console.log(this.state)*/}
      </div>
    );
  }
}

export default MainPageTable;
