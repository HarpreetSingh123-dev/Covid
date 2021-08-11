import React, { Component } from "react";
import "./SpecificCountryTable.css";
import Skeleton from '@yisheng90/react-loading';
import ReactTimeAgo from 'react-time-ago'
import axios from "axios";
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

class SpecificCountryTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canTableBeMade: "",
      lastChecked:'',
      data: [],
      tableData:[],
      loader:true
    };

    this.fetchData = this.fetchData.bind(this);
    this.setTable = this.setTable.bind(this);
    this.pushingValues = this.pushingValues.bind(this);
  }

  ///////////////////////////////////////////////////
  componentDidMount() {
    this.fetchData();
  }
  //////////////////////////////////////////////////

  /////////////////////////////////////////////////
  componentDidUpdate(prevProps) {
    if (this.props.t != prevProps.t) {
      console.log("change detected in table ");
      this.fetchData();
    }
  }
  /////////////////////////////////////////////////

  ////////////////////////////////////////////////

  fetchData() {
    var k = this.props.t.toLowerCase();

    var t = k.charAt(0).toUpperCase() + k.slice(1);

    console.log("t below")
    console.log(t)

    var options = {
      method: "GET",
      url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      params: { country: t },
      headers: {
        "x-rapidapi-key": "92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        var data = response.data;

        return data;
      })

      .then(this.setTable)
      .then(this.pushingValues)
      .catch(function (error) {
        console.error(error);
      });
  }
  ///////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////

  setTable(data) {
    
    var length = data.data.covid19Stats.length;
    var lastChecked = data.data.lastChecked
    var message = data.message
    var resData = data.data.covid19Stats;

    if (length > 1 && message==="OK") {
      this.setState({ canTableBeMade: true , lastChecked:lastChecked});
      console.log(data.data.covid19Stats);
      this.setState({ data: resData });
    } else {
      this.setState({ canTableBeMade: false });
      console.log("table cant be made")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  pushingValues() {
   
    var setData = []

    var value = this.state.data
   
    if (this.state.canTableBeMade) {
      console.log("table made");

      var data = this.state.data;
      console.log(data);

     for (var i =0;i<this.state.data.length;i++){

      var nullValue 

      if(!value[i].recovered){  nullValue = 0 }

      else{ nullValue = value[i].recovered }    // logic for tackling null values in recovered in canada dataset
        var obj = {
            number:i+1,
            province:value[i].province,
            confirmed:value[i].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
            //recovered:value[i].recovered,
            recovered:nullValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
            deaths:value[i].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
            update:<ReactTimeAgo date={value[i].lastUpdate} locale="en-US"></ReactTimeAgo>
           

        }

        setData.push(obj)
     }
     this.setState({tableData:setData})
     this.setState({loader:false})

    } else {
        this.setState({tableData:[]})
        this.setState({loader:false})
        console.log("no table made");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  render() {
    var a = null;

    var b = null

    if(this.state.loader){

       b=(<Skeleton rows={30} height={20} color="lightgray"></Skeleton>)
    }

    else {
      if (this.state.canTableBeMade) {
        a = ( <div>
              
              <h2 className="text-center">Region-Wise Covid Update</h2>
              <hr className="regionRule"></hr>
              <marquee>Last Updated On&nbsp;{this.state.lastChecked.slice(0, 10)} </marquee>
                  <DataTable
                          title={<h3><b>Region Wise Status Of {this.props.t}</b></h3>}
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


        )
  
       
      }
      else {
        a = null;
      }

     b=a 
    }

   

    return (
    
            <div className="regionTable">
                
                
                {b} 
                
            
                
           </div>
            
            
            
            );
  }
}

export default SpecificCountryTable;
