import React, { Component } from 'react';
import axios from 'axios'
import DataTable from "react-data-table-component";

const columns = [
  
    {   name:  <h6 className="text-center"><b>Sr No</b> </h6>,
        selector: "number",
        center: true,
      },
  
    {
    name:  <h6 className="text-center"><b>PROVINCE</b></h6>,
    selector: "province",
    allowOverflow: "True",
    center: true,
  },

  {
    name:  <h6 className="text-center"><b>CITY</b></h6>,
    selector: "city",
    allowOverflow: "True",
    center: true,
  },

  {
    name: <h6 className="text-center">CONFIRMED</h6>,
    selector: "confirmed",
    
    center: true,
  },

  {
    name: <h6 className="text-center">RECOVERED</h6>,
    selector: "recovered",
    center: true,
  },

  {
    name: <h6 className="text-center">DEATHS</h6>,
    selector: "deaths",
    center: true,
  },

  {
    name: <h6 className="text-center">LAST UPDATE</h6>,
    selector: "update",
    center: true,
  },


];

const customStyles = {
    headCells: {
      style: {
        backgroundColor: "dimgrey",
      },
    },
  };


class SpecificUSAtable extends Component {

constructor(props){

  super(props)

  this.state={

    lastChecked:'',
    data: [],
    tableData:[],

  }

  this.fetchData = this.fetchData.bind(this)
  this.setTable = this.setTable.bind(this)
  this.pushingValues = this.pushingValues.bind(this)

}

componentDidMount(){

    console.log("in usa table mount")

   console.log(this.props.t.toLowerCase())

   this.fetchData()

}


  fetchData(){
 
   var country = this.props.t.toLowerCase()
    
   var options = {
    method: "GET",
    url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
    params: { country: country },
    headers: {
      "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
      "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  };
    axios.request(options).then(function (response) {
	
        console.log(response.data)

        var data = response.data;

        return data;
     
       }).then(this.setTable)
         .then(this.pushingValues)
         .catch(function (error) {
             console.error(error);
     
        });
      
     

  }


  setTable(data){

    var lastChecked = data.data.lastChecked
    var resData = data.data.covid19Stats;
    console.log("in set table usa")
    console.log(resData)
    this.setState({data:resData , lastChecked:lastChecked})
  
}

  pushingValues(){

    var setData = []
    var value = this.state.data

    for (var i =0;i<this.state.data.length;i++){

        var obj = {
            number:i+1,
            province:value[i].province,
            confirmed:value[i].confirmed,
            recovered:value[i].recovered,
            deaths:value[i].deaths,
            update:value[i].lastUpdate.slice(0, 10),
            city:value[i].city
           

        }

        setData.push(obj)
    }

    this.setState({tableData:setData})
  }


    render() {

        return (
            <div>
                <div>
              
              <h2 className="text-center">Region-Wise Covid Update</h2>
              <hr className="regionRule"></hr>
              <marquee>Last Updated On&nbsp;{this.state.lastChecked} </marquee>
                  <DataTable
                          
                          highlightOnHover={true}
                          
                          fixedHeader={true}
                          theme={"dark"}
                          
                          
                          fixedHeaderScrollHeight={"550px"}
                          columns={columns}
                          data={this.state.tableData}
                          customStyles={customStyles}
                  >
                </DataTable>
  
          </div>
            </div>
        );
    }
}

export default SpecificUSAtable;