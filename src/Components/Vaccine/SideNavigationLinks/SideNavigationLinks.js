import React,{useState, useEffect} from 'react';
import './SideNavigationLinks.css'

function SideNavigationLinks(props) {



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
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'FDA APPROVED':

                setAllVaccinesColor('white')
                setFdaApprovedColor('floralwhite')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'RNA BASED':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('floralwhite')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'DNA BASED':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('floralwhite')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'INACTIVATED VIRUS':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('floralwhite')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'LIVE ATTENUATED VIRUS':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('floralwhite')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'REPLICATING VIRAL VECTOR':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('floralwhite')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'NON-REPLICATING VIRAL VECTOR':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('floralwhite')
                setSubunitColor('white')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'PROTIEN SUBUNIT':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('floralwhite')
                setRepBacterialColor('white')
                setVirusLikeColor('white')

            break;

            case 'REPLICATING BACTERIAL VECTOR':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('floralwhite')
                setVirusLikeColor('white')

            break;

            case 'VIRUS-LIKE PARTICLE':

                setAllVaccinesColor('white')
                setFdaApprovedColor('white')
                setRnaBasedColor('white')
                setDnaBasedColor('white')
                setInactivatedColor('white')
                setAttenuatedColor('white')
                setReplicatingColor('white')
                setNonReplicatingColor('white')
                setSubunitColor('white')
                setRepBacterialColor('white')
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

                 setVirusLikeFontColor('white')
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

                setVirusLikeFontColor('white')
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

                setVirusLikeFontColor('white')
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

                setVirusLikeFontColor('white')
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

                 setVirusLikeFontColor('white')
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

                setVirusLikeFontColor('white')
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

                setVirusLikeFontColor('white')
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

                 setVirusLikeFontColor('white')
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

                setVirusLikeFontColor('white')
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

                 setVirusLikeFontColor('white')
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
       
            <div className="vaccineSideNavigationButtons">
            
             <h2 className="text-center" style={{color: "white",marginTop:"12px"}}><b>Categories</b></h2>

                 <hr className="ruleTreatment"></hr>

                      
                   <div className="outerWrapper">
                        
                      <div className="innerWrapper">
                           
                           
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:allVaccinesColor,color:allVaccinesFontColor}}  onClick={()=>{props.clicked("ALL VACCINES") ; onClickHandler("ALL VACCINES") ; colorHandler("ALL VACCINES") }} >All VACCINES</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:fdaApprovedColor,color:fdaApprovedFontColor}} onClick={()=>{props.clicked("FDA APPROVED")   ; onClickHandler("FDA APPROVED") ; colorHandler("FDA APPROVED")}}>FDA APPROVED</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:rnaBasedColor,color:rnaBasedFontColor}} onClick={()=>{props.clicked("RNA BASED")     ; onClickHandler("RNA BASED") ; colorHandler("RNA BASED") }}>RNA BASED</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:setDnaBasedColor,color:dnaBasedFontColor}}  onClick={()=>{props.clicked("DNA BASED")     ; onClickHandler("DNA BASED") ; colorHandler("DNA BASED")}} >DNA BASED</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:inactivatedColor,color:inactivatedFontColor}} onClick={()=>{props.clicked("INACTIVATED VIRUS"); onClickHandler("INACTIVATED VIRUS") ; colorHandler("INACTIVATED VIRUS") }}>INACTIVATED VIRUS</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:attenuatedColor,color:attenuatedFontColor}} onClick={()=>{props.clicked("LIVE ATTENUATED VIRUS") ; onClickHandler("LIVE ATTENUATED VIRUS") ; colorHandler("LIVE ATTENUATED VIRUS")}}>LIVE ATTENUATED VIRUS</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:replicatingColor,color:replicatingFontColor}}onClick={()=>{props.clicked("REPLICATING VIRAL VECTOR") ; onClickHandler("REPLICATING VIRAL VECTOR") ; colorHandler("REPLICATING VIRAL VECTOR")}}>REPLICATING VIRAL VECTOR</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:nonReplicatigColor,color:nonReplicatigFontColor}}  onClick={()=>{props.clicked("NON-REPLICATING VIRAL VECTOR") ; onClickHandler("NON-REPLICATING VIRAL VECTOR") ; colorHandler("NON-REPLICATING VIRAL VECTOR")}}>NON-REPLICATING VIRAL VECTOR</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:subUnitColor,color:subUnitFontColor}} onClick={()=>{props.clicked("PROTIEN SUBUNIT") ; onClickHandler("PROTIEN SUBUNIT") ; colorHandler("PROTIEN SUBUNIT")}}>PROTIEN SUBUNIT</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:repBacterialColor,color:repBacterialFontColor}} onClick={()=>{props.clicked("REPLICATING BACTERIAL VECTOR"); onClickHandler("REPLICATING BACTERIAL VECTOR") ; colorHandler("REPLICATING BACTERIAL VECTOR") }}>REPLICATING BACTERIAL VECTOR</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:virusLikeColor,color:virusLikeFontColor}} onClick={()=>{props.clicked("VIRUS-LIKE PARTICLE") ; onClickHandler("VIRUS-LIKE PARTICLE") ; colorHandler("VIRUS-LIKE PARTICLE")}}>VIRUS-LIKE PARTICLE</button>
                           
           
                     </div>
                </div>
                   
         </div>
        
    );
}

export default SideNavigationLinks;