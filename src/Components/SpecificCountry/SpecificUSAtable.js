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
/*
  {
    name:  <h6 className="text-center"><b>CITY</b></h6>,
    selector: "city",
    allowOverflow: "True",
    center: true,
  },
*/
  {
    name: <h6 className="text-center">CONFIRMED</h6>,
    selector: "confirmed",
    
    center: true,
  },
/*
  {
    name: <h6 className="text-center">RECOVERED</h6>,
    selector: "recovered",
    center: true,
  },
*/
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


    usStates:['Alabama','Alaska']

  }

  this.fetchData = this.fetchData.bind(this)
  this.setTable = this.setTable.bind(this)
  this.pushingValues = this.pushingValues.bind(this)
 // this.test = this.test.bind(this)
 this.testTwo = this.testTwo.bind(this)

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
        // .then(this.test)
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

   var FinalArraySet = [] 

   var AlabamaTotal =[]
   var AlabamaDeaths = []

   var AlaskaTotal  = []
   var AlaskaDeaths = []

   var ArizonaTotal = []
   var ArizonaDeaths = []

   var ArkansasTotal = []
   var ArkansasDeaths = []

   var CaliforniaTotal = []
   var CaliforniaDeaths = []

   var ColoradoTotal = []
   var ColoradoDeaths = []

   var ConnecticutTotal = []
   var ConnecticutDeaths =[]

   var DelawareTotal = []
   var DelawareDeaths =[]

   var DistrictOfColumbiaTotal=[]
   var DistrictOfColumbiaDeaths =[]

   var FloridaTotal=[]
   var FloridaDeaths =[]

   var GeorgiaTotal =[]
   var GeorgiaDeaths =[]

   var GuamTotal =[]
   var GuamDeaths =[]

   var HawaiiTotal =[]
   var HawaiiDeaths=[]
  
   var IdahoTotal =[]
   var IdahoDeaths =[]

   var IllinoisTotal =[]
   var IllinoisDeaths =[]

   var IndianaTotal=[]
   var IndianaDeaths=[]

   var IowaTotal=[]
   var IowaDeaths=[]

   var KansasTotal=[]
   var KansasDeaths=[]

   var KentuckyTotal=[]
   var KentuckyDeaths=[]

   var LouisianaTotal=[]
   var LouisianaDeaths=[]

   var MaineTotal=[]
   var MaineDeaths=[]

   var MarylandTotal=[]
   var MarylandDeaths =[]

   var MassachusettsTotal=[]
   var MassachusettsDeaths=[]

   var MichiganTotal =[]
   var MichiganDeaths =[]

   var MinnesotaTotal=[]
   var MinnesotaDeaths =[]

   var MississippiTotal=[]
   var MississippiDeaths=[]

   var MissouriTotal=[]
   var MissouriDeaths=[]

   var MontanaTotal =[]
   var MontanaDeaths=[]

   var NebraskaTotal=[]
   var NebraskaDeaths=[]

   var NevadaTotal=[]
   var NevadaDeaths=[]

   var NewHampshireTotal =[]
   var NewHampshireDeaths=[]

   var NewJerseyTotal =[]
   var NewJerseyDeaths=[]

   var NewMexicoTotal=[]
   var NewMexicoDeaths=[]

   var NewYorkTotal =[]
   var NewYorkDeaths=[]

   var NorthCarolinaTotal =[]
   var NorthCarolinaDeaths=[]

   var NorthDakotaTotal=[]
   var NorthDakotaDeaths=[]

   var OhioTotal =[]
   var OhioDeaths=[]

   var OklahomaTotal=[]
   var OklahomaDeaths=[]

   var OregonTotal=[]
   var OregonDeaths=[]

   var PennsylvaniaTotal=[]
   var PennsylvaniaDeaths=[]

   var PuertoricoTotal=[]
   var PuertoricoDeaths=[]

   var RhodeIslandTotal=[]
   var RhodeIslandDeaths=[]

   var SouthCarolianaTotal=[]
   var SouthCarolianaDeaths=[]

   var SouthDakotaTotal=[]
   var SouthDakotaDeaths=[]

   var TennesseeTotal=[]
   var TennesseeDeaths=[]

   var TexasTotal=[]
   var TexasDeaths=[]

   var UtahTotal =[]
   var UtahDeaths=[]

   var VermontTotal=[]
   var VermontDeaths=[]

   var VirginiaTotal=[]
   var VirginiaDeaths=[]

   var WashingtonTotal=[]
   var WashingtonDeaths=[]

   var WestVirginiaTotal=[]
   var WestVirginiaDeaths=[]

   var WisconsinTotal=[]
   var WisconsinDeaths=[]

   var WyomingTotal=[]
   var WyomingDeaths=[]





    var data = this.state.data
    var updatedTime = this.state.lastChecked.slice(0, 10)

    var calculateTotal = (array)=>{

      
        var  c = array.reduce((a,b)=>{
     
                         return  a+b
                      
             },0)

         return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")  
      }

    var createObject = (number,province,confirmed,deaths,update)=>{

              
                return  {
                  
                  number: number,
                  province:province,
                  confirmed:confirmed,
                  deaths:deaths,
                  update:update

                }
    }  

    data.map(( value )=>{

      var province = value.province

     
      switch(province){

        case 'Alabama': 
           
             var confirmed = value.confirmed
             var deaths = value.deaths

             AlabamaTotal.push(confirmed)
             AlabamaDeaths.push(deaths)
        
          break;

       case 'Alaska':
         
          var confirmed = value.confirmed
          var deaths = value.deaths

          AlaskaTotal.push(confirmed)
          AlaskaDeaths.push(deaths)

         break; 

       case 'Arizona' :

          var confirmed = value.confirmed
          var deaths = value.deaths

          ArizonaTotal.push(confirmed)
          ArizonaDeaths.push(deaths)
         
         break;  
       
       case 'Arkansas':
           
          var confirmed = value.confirmed
          var deaths = value.deaths

          ArkansasTotal.push(confirmed)
          ArkansasDeaths.push(deaths)
 
         break;

       case 'California' :

          var confirmed = value.confirmed
          var deaths = value.deaths

          CaliforniaTotal.push(confirmed)
          CaliforniaDeaths.push(deaths)

         break; 

       case 'Colorado' :

          var confirmed = value.confirmed
          var deaths = value.deaths

          ColoradoTotal.push(confirmed)
          ColoradoDeaths.push(deaths)

          break;

       case 'Connecticut':
         
         var confirmed = value.confirmed
         var deaths = value.deaths

         ConnecticutTotal.push(confirmed)
         ConnecticutDeaths.push(deaths)

         break;

       case 'Delaware':

         var confirmed = value.confirmed
         var deaths = value.deaths

         DelawareTotal.push(confirmed)
         DelawareDeaths.push(deaths)

         break;

       case 'District of Columbia':

        var confirmed = value.confirmed
        var deaths = value.deaths

        DistrictOfColumbiaTotal.push(confirmed)
        DistrictOfColumbiaDeaths.push(confirmed)

        break;

       case  'Florida':

        var confirmed = value.confirmed
        var deaths = value.deaths

        FloridaTotal.push(confirmed)
        FloridaDeaths.push(deaths)

        break;

       case 'Georgia':

        var confirmed = value.confirmed
        var deaths = value.deaths

        GeorgiaTotal.push(confirmed)
        GeorgiaDeaths.push(deaths)

        break;

       case 'Guam':

        var confirmed = value.confirmed
        var deaths = value.deaths

        GuamTotal.push(confirmed)
        GuamDeaths.push(deaths)

        break;

       case 'Hawaii':

        var confirmed = value.confirmed
        var deaths = value.deaths

        HawaiiTotal.push(confirmed)
        HawaiiDeaths.push(deaths)

        break;

       case 'Idaho':

        var confirmed = value.confirmed
        var deaths = value.deaths

        IdahoTotal.push(confirmed)
        IdahoDeaths.push(deaths)

        break;

       case 'Illinois':

        var confirmed = value.confirmed
        var deaths = value.deaths

        IllinoisTotal.push(confirmed)
        IllinoisDeaths.push(deaths)

        break;

       case 'Indiana':

        var confirmed = value.confirmed
        var deaths = value.deaths

        IndianaTotal.push(confirmed)
        IndianaDeaths.push(deaths)

        break;

       case 'Iowa':

        var confirmed = value.confirmed
        var deaths = value.deaths

        IowaTotal.push(confirmed)
        IowaDeaths.push(deaths)

        break;

       case 'Kansas':

        var confirmed = value.confirmed
        var deaths = value.deaths

        KansasTotal.push(confirmed)
        KansasDeaths.push(deaths)

        break;

       case 'Kentucky':

        var confirmed = value.confirmed
        var deaths = value.deaths

        KentuckyTotal.push(confirmed)
        KentuckyDeaths.push(deaths)

        break;

       case 'Louisiana':

        var confirmed = value.confirmed
        var deaths = value.deaths

        LouisianaTotal.push(confirmed)
        LouisianaDeaths.push(deaths)

        break;

       case 'Maine':

        var confirmed = value.confirmed
        var deaths = value.deaths
 
        MaineTotal.push(confirmed)
        MaineDeaths.push(deaths)

        break;

       case 'Maryland':

       var confirmed = value.confirmed
       var deaths = value.deaths

       MarylandTotal.push(confirmed)
       MarylandDeaths.push(deaths)

       break;

       case 'Massachusetts':

        var confirmed = value.confirmed
        var deaths = value.deaths

        MassachusettsTotal.push(confirmed)
        MassachusettsDeaths.push(deaths)

        break;

       case 'Michigan':
    
        var confirmed = value.confirmed
        var deaths = value.deaths

        MichiganTotal.push(confirmed)
        MichiganDeaths.push(deaths)
        
        break;

       case 'Minnesota':

        var confirmed = value.confirmed
        var deaths = value.deaths

        MinnesotaTotal.push(confirmed)
        MinnesotaDeaths.push(deaths)

        break;

       case 'Mississippi':

        var confirmed = value.confirmed
        var deaths = value.deaths

        MississippiTotal.push(confirmed)
        MississippiDeaths.push(deaths)

        break;

       case 'Missouri':

        var confirmed = value.confirmed
        var deaths = value.deaths

        MissouriTotal.push(confirmed)
        MissouriDeaths.push(deaths)
  
        break;

       case 'Montana':

        var confirmed = value.confirmed
        var deaths = value.deaths

        MontanaTotal.push(confirmed)
        MontanaDeaths.push(deaths)

        break;

       case 'Nebraska':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NebraskaTotal.push(confirmed)
        NebraskaDeaths.push(deaths)

        break;

       case 'Nevada':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NevadaTotal.push(confirmed)
        NevadaDeaths.push(deaths)

        break;

       case 'New Hampshire':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NewHampshireTotal.push(confirmed)
        NewHampshireDeaths.push(deaths)

        break;

       case 'New Jersey':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NewJerseyTotal.push(confirmed)
        NewJerseyDeaths.push(deaths)

        break;

       case 'New Mexico':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NewMexicoTotal.push(confirmed)
        NewMexicoDeaths.push(deaths)

        break;

       case 'North Caroliana':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NorthCarolinaTotal.push(confirmed)
        NorthCarolinaDeaths.push(deaths)

        break;
        

       case 'North Dakota':

        var confirmed = value.confirmed
        var deaths = value.deaths

        NorthDakotaTotal.push(confirmed)
        NorthDakotaDeaths.push(deaths)

        break;

       case 'Ohio':

        var confirmed = value.confirmed
        var deaths = value.deaths

        OhioTotal.push(confirmed)
        OhioDeaths.push(deaths)

        break;

       case 'Oklahoma':

        var confirmed = value.confirmed
        var deaths = value.deaths

        OklahomaTotal.push(confirmed)
        OklahomaDeaths.push(deaths)

        break;

       case 'Oregon':

        var confirmed = value.confirmed
        var deaths = value.deaths

        OregonTotal.push(confirmed)
        OregonDeaths.push(deaths)

        break;

       case 'Pennsylvania':

        var confirmed = value.confirmed
        var deaths = value.deaths

        PennsylvaniaTotal.push(confirmed)
        PennsylvaniaDeaths.push(deaths)

        break;

       case 'Puerto Rico':

        var confirmed = value.confirmed
        var deaths = value.deaths

        PuertoricoTotal.push(confirmed)
        PuertoricoDeaths.push(deaths)

        break;

       case 'Rhode Island':

        var confirmed = value.confirmed
        var deaths = value.deaths

        RhodeIslandTotal.push(confirmed)
        RhodeIslandDeaths.push(deaths)

        break;

       case 'South Carolina':

        var confirmed = value.confirmed
        var deaths = value.deaths

        SouthCarolianaTotal.push(confirmed)
        SouthCarolianaDeaths.push(deaths)

        break;

       case 'South Dakota':

        var confirmed = value.confirmed
        var deaths = value.deaths

        SouthDakotaTotal.push(confirmed)
        SouthDakotaDeaths.push(deaths)

        break;

       case 'Tennessee':

        var confirmed = value.confirmed
        var deaths = value.deaths

        TennesseeTotal.push(confirmed)
        TennesseeDeaths.push(deaths)

        break;

       case 'Texas':

        var confirmed = value.confirmed
        var deaths = value.deaths

        TexasTotal.push(confirmed)
        TexasDeaths.push(deaths)

        break;

       case 'Utah':

        var confirmed = value.confirmed
        var deaths = value.deaths

        UtahTotal.push(confirmed)
        UtahDeaths.push(deaths)

        break;

       case 'Vermont':

        var confirmed = value.confirmed
        var deaths = value.deaths

        VermontTotal.push(confirmed)
        VermontDeaths.push(deaths)

        break;

       case 'Virginia':

        var confirmed = value.confirmed
        var deaths = value.deaths

        VirginiaTotal.push(confirmed)
        VirginiaDeaths.push(deaths)

        break;

       case 'Washington':

        var confirmed = value.confirmed
        var deaths = value.deaths

        WashingtonTotal.push(confirmed)
        WashingtonDeaths.push(deaths)

        break;

       case 'West Virginia':

        var confirmed = value.confirmed
        var deaths = value.deaths

        WestVirginiaTotal.push(confirmed)
        WestVirginiaDeaths.push(deaths)

        break;

       case 'Wisconsin':

        var confirmed = value.confirmed
        var deaths = value.deaths

        WisconsinTotal.push(confirmed)
        WisconsinDeaths.push(deaths)

        break;

       case 'Wyoming':

        var confirmed = value.confirmed
        var deaths = value.deaths

        WyomingTotal.push(confirmed)
        WyomingDeaths.push(deaths)

        break;

      }

    })


 /////////////////////////////////////////////////////////////////
    
    var totalAlabamaCases = calculateTotal(AlabamaTotal)
    var totalAlabamaDeaths= calculateTotal(AlaskaDeaths)

    var obj1 = createObject(1,'Alabama',totalAlabamaCases,totalAlabamaDeaths,updatedTime)

    FinalArraySet.push(obj1)
 ///////////////////////////////////////////////////////////////

 //////////////////////////////////////////////////////////////

   var totalAlaskaCases = calculateTotal(AlaskaTotal)
   var totalAlaskaDeaths = calculateTotal(AlaskaDeaths)

   var obj2 = createObject(2,'Alaska',totalAlaskaCases,totalAlaskaDeaths,updatedTime)

   FinalArraySet.push(obj2)

 //////////////////////////////////////////////////////////////

 //////////////////////////////////////////////////////////////

   var totalArizonaCases = calculateTotal(ArizonaTotal)
   var totalArizonaDeaths = calculateTotal(ArizonaDeaths)

   var obj3 = createObject(3,'Arizona',totalArizonaCases,totalArizonaDeaths,updatedTime)

   FinalArraySet.push(obj3)

/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

   var totalArkansasCases = calculateTotal(ArkansasTotal)
   var totalArkansasDeaths = calculateTotal(ArkansasDeaths)

   var obj4 = createObject(4,'Arkansas',totalArkansasCases,totalArkansasDeaths,updatedTime)

   FinalArraySet.push(obj4)

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

   var totalCaliforniaCases = calculateTotal(CaliforniaTotal)
   var totalCaliforniaDeaths = calculateTotal(CaliforniaDeaths)

   var obj5 = createObject(5,'California',totalCaliforniaCases,totalCaliforniaDeaths,updatedTime)

   FinalArraySet.push(obj5)

   var totalColoradoCases =calculateTotal(ColoradoTotal)
   var totalColoradoDeaths = calculateTotal(ColoradoDeaths)

   var obj6 = createObject(6,'Colorado',totalColoradoCases,totalColoradoDeaths,updatedTime)

   FinalArraySet.push(obj6)

   var totalConnecticutCases = calculateTotal(ConnecticutTotal)
   var totalConnecticutDeaths = calculateTotal(ConnecticutDeaths)

   var obj7 = createObject(7,'Connecticut',totalConnecticutCases,totalConnecticutDeaths,updatedTime)

   FinalArraySet.push(obj7)

   var totalDelawareCases = calculateTotal(DelawareTotal)
   var totalDelawareDeaths = calculateTotal(DelawareDeaths)

   var obj8 = createObject(8,'Delaware',totalDelawareCases,totalDelawareDeaths,updatedTime)

   FinalArraySet.push(obj8)




   

 this.setState({tableData:FinalArraySet})

  }

  testTwo(){

  }


    render() {

        return (
            <div>
                <div>
              
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

                          expandOnRowClicked={false}
                          onRowClicked={(row) => this.testTwo(row)}
                  >
                </DataTable>
  
          </div>
            </div>
        );
    }
}

export default SpecificUSAtable;