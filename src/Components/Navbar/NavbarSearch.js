import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './NavbarSearch.css'

function NavbarSearch(props) {
   
   const [ countries , setCountries ] = useState('')

   const [ searchCountry , setSearchCountry] = useState([])

   const [ search , setSearch ] = useState(false)

    
    useEffect(()=>{

        setCountries(props.countries)

    },[props.countries])




function handleChange(value){

      //console.log(value)

      if(value === ""){

             setSearch(false)
             setSearchCountry([])
       }

    else {
     
        setSearch(true)
           
             var  a = countries.filter((data)=>{

             var k = data.Country        

               if(k.toLowerCase().includes(value.toLowerCase())){

                   // console.log(k)
                    return k
               }

           })

     setSearchCountry(a)
     console.log(a)

   }
}

var searchDisplayBox = null

 if(search === false){
      
      searchDisplayBox = <div></div>

  }

   else{

    searchDisplayBox =  <div className="searchShow">
                     
    { searchCountry.map((value)=>{


                return <ul style={{listStyle:'none'}}><li><Link  style={{color:'black'}} to={`/Country/${value.Country}/${value.ThreeLetterSymbol}`}>{value.Country}</Link></li></ul>

    })


    }
     

 </div>
}

    return (
        <div>
             <form className="form-inline my-2 my-lg-0">
                   <input className="form-control mr-sm-2" type="search" placeholder="Search Country" aria-label="Search" onChange={(event)=>{handleChange(event.target.value)}}></input>
                   
                 </form>
                  
                  {searchDisplayBox}
                 
        </div>
    );
}

export default NavbarSearch;