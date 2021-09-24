import React ,{useEffect,useState} from 'react';
import './ShowCategories.css'

function ShowCategories(props) {

    const [ allVaccinesColor , setAllVaccinesColor ] = useState('floralwhite')

     const [ fdaApprovedColor , setFdaApprovedColor ] = useState('steelblue')

     const [ rnaBasedColor , setRnaBasedColor ] = useState('steelblue')

     const [ dnaBasedColor , setDnaBasedColor ] = useState('steelblue')

     const [ inactivatedColor , setInactivatedColor ] = useState('steelblue')

     const [ attenuatedColor , setAttenuatedColor ] = useState('steelblue')

     const [ replicatingColor , setReplicatingColor ] = useState('steelblue')

     const [ nonReplicatigColor , setNonReplicatingColor ] = useState('steelblue')

     const [ subUnitColor , setSubunitColor ] = useState('steelblue')

     const [ repBacterialColor , setRepBacterialColor ] = useState('steelblue')

     const [ virusLikeColor , setVirusLikeColor ] = useState('steelblue')

       /* below states are for changing font color after click*/

       const [ allVaccinesFontColor , setAllVaccinesFontColor ] = useState('black')

       const [ fdaApprovedFontColor , setFdaApprovedFontColor ] = useState('white')
  
       const [ rnaBasedFontColor , setRnaBasedFontColor ] = useState('white')
  
       const [ dnaBasedFontColor , setDnaBasedFontColor ] = useState('white')
  
       const [ inactivatedFontColor , setInactivatedFontColor ] = useState('white')
  
       const [ attenuatedFontColor , setAttenuatedFontColor ] = useState('white')
  
       const [ replicatingFontColor , setReplicatingFontColor ] = useState('white')
  
       const [ nonReplicatigFontColor , setNonReplicatingFontColor ] = useState('white')
  
       const [ subUnitFontColor , setSubunitFontColor ] = useState('white')
  
       const [ repBacterialFontColor , setRepBacterialFontColor ] = useState('white')
  
       const [ virusLikeFontColor , setVirusLikeFontColor ] = useState('white')

    




     useEffect(()=>{

        onClickHandler(props.buttonClicked)
        colorHandler(props.buttonClicked)
   
      },[props.buttonClicked])


      function onClickHandler(value){

        switch(value){
 
             case 'ALL VACCINES':
 
                 setAllVaccinesColor('floralwhite')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'FDA APPROVED':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('floralwhite')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'RNA BASED':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('floralwhite')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'DNA BASED':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('floralwhite')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'INACTIVATED VIRUS':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('floralwhite')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'LIVE ATTENUATED VIRUS':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('floralwhite')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'REPLICATING VIRAL VECTOR':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('floralwhite')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'NON-REPLICATING VIRAL VECTOR':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('floralwhite')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'PROTIEN SUBUNIT':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('floralwhite')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'REPLICATING BACTERIAL VECTOR':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('floralwhite')
                 setVirusLikeColor('steelblue')
 
             break;
 
             case 'VIRUS-LIKE PARTICLE':
 
                 setAllVaccinesColor('steelblue')
                 setFdaApprovedColor('steelblue')
                 setRnaBasedColor('steelblue')
                 setDnaBasedColor('steelblue')
                 setInactivatedColor('steelblue')
                 setAttenuatedColor('steelblue')
                 setReplicatingColor('steelblue')
                 setNonReplicatingColor('steelblue')
                 setSubunitColor('steelblue')
                 setRepBacterialColor('steelblue')
                 setVirusLikeColor('floralwhite')
 
             break;
              
 
        }
 
    }


    function colorHandler(value){

        switch(value){
  
              case 'ALL VACCINES':
                  
                   setAllVaccinesFontColor('black')
                   setFdaApprovedFontColor('white')
                   setRnaBasedFontColor('white')
                   setDnaBasedFontColor('white')
                   setInactivatedFontColor('white')
                   setAttenuatedFontColor('white')
                   setReplicatingFontColor('white')
                   setNonReplicatingFontColor('white')
                   setSubunitFontColor('white')
                   setRepBacterialFontColor('white')
                   setVirusLikeFontColor('white')
  
  
              break;
  
              case 'FDA APPROVED':
  
                   setAllVaccinesFontColor('white')
                   setFdaApprovedFontColor('black')
                   setRnaBasedFontColor('white')
                   setDnaBasedFontColor('white')
                   setInactivatedFontColor('white')
                   setAttenuatedFontColor('white')
                   setReplicatingFontColor('white')
                   setNonReplicatingFontColor('white')
                   setSubunitFontColor('white')
                   setRepBacterialFontColor('white')
                   setVirusLikeFontColor('white')
  
              break;
  
              case 'RNA BASED':
  
                  setAllVaccinesFontColor('white')
                  setFdaApprovedFontColor('white')
                  setRnaBasedFontColor('black')
                  setDnaBasedFontColor('white')
                  setInactivatedFontColor('white')
                  setAttenuatedFontColor('white')
                  setReplicatingFontColor('white')
                  setNonReplicatingFontColor('white')
                  setSubunitFontColor('white')
                  setRepBacterialFontColor('white')
                  setVirusLikeFontColor('white')
  
              break;
  
              case 'DNA BASED':
  
                  setAllVaccinesFontColor('white')
                   setFdaApprovedFontColor('white')
                   setRnaBasedFontColor('white')
                   setDnaBasedFontColor('black')
                   setInactivatedFontColor('white')
                   setAttenuatedFontColor('white')
                   setReplicatingFontColor('white')
                   setNonReplicatingFontColor('white')
                   setSubunitFontColor('white')
                   setRepBacterialFontColor('white')
                   setVirusLikeFontColor('white')
  
              break;
  
              case 'INACTIVATED VIRUS':
  
                  setAllVaccinesFontColor('white')
                  setFdaApprovedFontColor('white')
                  setRnaBasedFontColor('white')
                  setDnaBasedFontColor('white')
                  setInactivatedFontColor('black')
                  setAttenuatedFontColor('white')
                  setReplicatingFontColor('white')
                  setNonReplicatingFontColor('white')
                  setSubunitFontColor('white')
                  setRepBacterialFontColor('white')
                  setVirusLikeFontColor('white')
  
              break;
  
              case 'LIVE ATTENUATED VIRUS':
  
                   setAllVaccinesFontColor('white')
                   setFdaApprovedFontColor('white')
                   setRnaBasedFontColor('white')
                   setDnaBasedFontColor('white')
                   setInactivatedFontColor('white')
                   setAttenuatedFontColor('black')
                   setReplicatingFontColor('white')
                   setNonReplicatingFontColor('white')
                   setSubunitFontColor('white')
                   setRepBacterialFontColor('white')
                   setVirusLikeFontColor('white')
  
              break;
  
              case 'REPLICATING VIRAL VECTOR':
  
                  setAllVaccinesFontColor('white')
                  setFdaApprovedFontColor('white')
                  setRnaBasedFontColor('white')
                  setDnaBasedFontColor('white')
                  setInactivatedFontColor('white')
                  setAttenuatedFontColor('white')
                  setReplicatingFontColor('black')
                  setNonReplicatingFontColor('white')
                  setSubunitFontColor('white')
                  setRepBacterialFontColor('white')
                  setVirusLikeFontColor('white')
  
                  
              break;
  
              case 'NON-REPLICATING VIRAL VECTOR':
  
                   setAllVaccinesFontColor('white')
                   setFdaApprovedFontColor('white')
                   setRnaBasedFontColor('white')
                   setDnaBasedFontColor('white')
                   setInactivatedFontColor('white')
                   setAttenuatedFontColor('white')
                   setReplicatingFontColor('white')
                   setNonReplicatingFontColor('black')
                   setSubunitFontColor('white')
                   setRepBacterialFontColor('white')
                   setVirusLikeFontColor('white')
  
              break;
  
              case 'PROTIEN SUBUNIT':
  
                  setAllVaccinesFontColor('white')
                  setFdaApprovedFontColor('white')
                  setRnaBasedFontColor('white')
                  setDnaBasedFontColor('white')
                  setInactivatedFontColor('white')
                  setAttenuatedFontColor('white')
                  setReplicatingFontColor('white')
                  setNonReplicatingFontColor('white')
                  setSubunitFontColor('black')
                  setRepBacterialFontColor('white')
                  setVirusLikeFontColor('white')
  
              break;
  
              case 'REPLICATING BACTERIAL VECTOR':
  
                  setAllVaccinesFontColor('white')
                   setFdaApprovedFontColor('white')
                   setRnaBasedFontColor('white')
                   setDnaBasedFontColor('white')
                   setInactivatedFontColor('white')
                   setAttenuatedFontColor('white')
                   setReplicatingFontColor('white')
                   setNonReplicatingFontColor('white')
                   setSubunitFontColor('white')
                   setRepBacterialFontColor('black')
                   setVirusLikeFontColor('white')
  
              break;
  
              case 'VIRUS-LIKE PARTICLE':
  
                  setAllVaccinesFontColor('white')
                  setFdaApprovedFontColor('white')
                  setRnaBasedFontColor('white')
                  setDnaBasedFontColor('white')
                  setInactivatedFontColor('white')
                  setAttenuatedFontColor('white')
                  setReplicatingFontColor('white')
                  setNonReplicatingFontColor('white')
                  setSubunitFontColor('white')
                  setRepBacterialFontColor('white')
                  setVirusLikeFontColor('black')
  
              break;
  
  
  
        }
  
     }

     
   
   
    return (

        <div>
            
            <div className="smallScreenSideNavigationButtons">
           
               <button type="button" class="close" aria-label="Close" onClick={props.close}>
                  <span aria-hidden="true">&times;</span>
               </button>


            <h2 className="text-center" style={{color: "white",marginTop:"12px"}}><b>Categories</b></h2>

                 <hr className="ruleTreatment"></hr>

                      
                   <div className="outerWrapper">
                        
                      <div className="innerWrapper">
              
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:allVaccinesColor,color:allVaccinesFontColor}} onClick={()=>{ props.clicked("ALL VACCINES") ; onClickHandler("ALL VACCINES") ; colorHandler("ALL VACCINES")}} >All VACCINES</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:fdaApprovedColor,color:fdaApprovedFontColor}} onClick={()=>{props.clicked("FDA APPROVED")  ; onClickHandler("FDA APPROVED") ; colorHandler("FDA APPROVED")}}>FDA APPROVED</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:rnaBasedColor,color:rnaBasedFontColor}} onClick={()=>{props.clicked("RNA BASED") ; onClickHandler("RNA BASED") ; colorHandler("RNA BASED")}}>RNA BASED</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:dnaBasedColor,color:dnaBasedFontColor}} onClick={()=>{props.clicked("DNA BASED") ; onClickHandler("DNA BASED") ; colorHandler("DNA BASED")}} >DNA BASED</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:inactivatedColor,color:inactivatedFontColor}} onClick={()=>{props.clicked("INACTIVATED VIRUS") ; onClickHandler("INACTIVATED VIRUS") ; colorHandler("INACTIVATED VIRUS")}}>INACTIVATED VIRUS</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:attenuatedColor,color:attenuatedFontColor}} onClick={()=>{props.clicked("LIVE ATTENUATED VIRUS") ; onClickHandler("LIVE ATTENUATED VIRUS") ; colorHandler("LIVE ATTENUATED VIRUS")}}>LIVE ATTENUATED VIRUS</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:replicatingColor,color:replicatingFontColor}} onClick={()=>{props.clicked("REPLICATING VIRAL VECTOR") ; onClickHandler("REPLICATING VIRAL VECTOR") ; colorHandler("REPLICATING VIRAL VECTOR")}}>REPLICATING VIRAL VECTOR</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:nonReplicatigColor,color:nonReplicatigFontColor}} onClick={()=>{props.clicked("NON-REPLICATING VIRAL VECTOR") ; onClickHandler("NON-REPLICATING VIRAL VECTOR") ; colorHandler("NON-REPLICATING VIRAL VECTOR")}}>NON-REPLICATING VIRAL VECTOR</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:subUnitColor,color:subUnitFontColor}} onClick={()=>{props.clicked("PROTIEN SUBUNIT") ; onClickHandler("PROTIEN SUBUNIT") ; colorHandler("PROTIEN SUBUNIT")}}>PROTIEN SUBUNIT</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:repBacterialColor,color:repBacterialFontColor}} onClick={()=>{props.clicked("REPLICATING BACTERIAL VECTOR") ; onClickHandler("REPLICATING BACTERIAL VECTOR") ; colorHandler("REPLICATING BACTERIAL VECTOR")}}>REPLICATING BACTERIAL VECTOR</button>
                           <button  type="button" class="btn btn-primary" style={{backgroundColor:virusLikeColor,color:virusLikeFontColor}} onClick={()=>{props.clicked("VIRUS-LIKE PARTICLE") ; onClickHandler("VIRUS-LIKE PARTICLE") ; colorHandler("VIRUS-LIKE PARTICLE")}}>VIRUS-LIKE PARTICLE</button>
           
                     </div>
                </div>
                    
         </div>
        </div>
    );
}

export default ShowCategories;