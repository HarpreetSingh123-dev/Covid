import { values } from 'ramda';
import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import './UpperNavigationLinks.css'

function UpperNavigationLinks(props) {
    
    const [ allVaccineFontColor , setAllVaccineFontColor ] = useState('cyan')

    const [ preClinicalFontColor , setPreClinicalFontColor ] = useState('')

    const [ phaseOneFontColor , setPhaseOneFontColor ] = useState('')

    const [ phaseTwoFontColor , setPhaseTwoFontColor ] = useState('')

    const [ phaseThreeFontColor , setPhaseThreeFontColor ] = useState('')

    const [ phaseFourFontColor , setPhaseFourFontColor ] = useState('')

    const [ fdaApprovedFontColor , setFdaApprovedFontColor ] = useState('')

 useEffect(()=>{

    changeColor(props.buttonClicked)

 },[props.buttonClicked])   
    


 function changeColor(value){

    switch(value){

         case 'ALL VACCINES':
             
             setAllVaccineFontColor('cyan')
             setPreClinicalFontColor('white')
             setPhaseOneFontColor('white')
             setPhaseTwoFontColor('white')
             setPhaseThreeFontColor('white')
             setPhaseFourFontColor('white')
             setFdaApprovedFontColor('white')

         break;

         case 'PRE CLINICAL':

            setAllVaccineFontColor('white')
            setPreClinicalFontColor('cyan')
            setPhaseOneFontColor('white')
            setPhaseTwoFontColor('white')
            setPhaseThreeFontColor('white')
            setPhaseFourFontColor('white')
            setFdaApprovedFontColor('white')

         break;

         case 'PHASE_1':

            setAllVaccineFontColor('white')
            setPreClinicalFontColor('white')
            setPhaseOneFontColor('cyan')
            setPhaseTwoFontColor('white')
            setPhaseThreeFontColor('white')
            setPhaseFourFontColor('white')
            setFdaApprovedFontColor('white')

         break;

         case 'PHASE_2':

             setAllVaccineFontColor('white')
             setPreClinicalFontColor('white')
             setPhaseOneFontColor('white')
             setPhaseTwoFontColor('cyan')
             setPhaseThreeFontColor('white')
             setPhaseFourFontColor('white')
             setFdaApprovedFontColor('white')

         break;

         case 'PHASE_3':

            setAllVaccineFontColor('white')
            setPreClinicalFontColor('white')
            setPhaseOneFontColor('white')
            setPhaseTwoFontColor('white')
            setPhaseThreeFontColor('cyan')
            setPhaseFourFontColor('white')
            setFdaApprovedFontColor('white')

         break;

         case 'PHASE_4':

             setAllVaccineFontColor('white')
             setPreClinicalFontColor('white')
             setPhaseOneFontColor('white')
             setPhaseTwoFontColor('white')
             setPhaseThreeFontColor('white')
             setPhaseFourFontColor('cyan')
             setFdaApprovedFontColor('white')

         break;

         case 'FDA APPROVED':
            
            setAllVaccineFontColor('white')
            setPreClinicalFontColor('white')
            setPhaseOneFontColor('white')
            setPhaseTwoFontColor('white')
            setPhaseThreeFontColor('white')
            setPhaseFourFontColor('white')
            setFdaApprovedFontColor('cyan')
            

         break;

         default: 

         setAllVaccineFontColor('white')
         setPreClinicalFontColor('white')
         setPhaseOneFontColor('white')
         setPhaseTwoFontColor('white')
         setPhaseThreeFontColor('white')
         setPhaseFourFontColor('white')
         setFdaApprovedFontColor('white')



    }




 }
    
    return (
        <div className="vaccineUpperNavigationLinks">
           <div className="container-fluid">
            <div className="setLinks">
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:allVaccineFontColor}} onClick={()=> {props.clicked("ALL VACCINES") ; changeColor("ALL VACCINES")}} >All Vaccines</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:preClinicalFontColor}} onClick={()=> {props.clicked("PRE CLINICAL") ; changeColor("PRE CLINICAL")}}>Pre Clinical</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:phaseOneFontColor}} onClick={()=> {props.clicked("PHASE_1") ; changeColor("PHASE_1")}} >Phase 1</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:phaseTwoFontColor}} onClick={()=> {props.clicked("PHASE_2") ; changeColor("PHASE_2")}}>Phase 2</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:phaseThreeFontColor}} onClick={()=>{props.clicked("PHASE_3") ; changeColor("PHASE_3")}}>Phase 3</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:phaseFourFontColor}} onClick={()=>{props.clicked("PHASE_4") ; changeColor("PHASE_4")}}>Phase 4</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold' , color:fdaApprovedFontColor}} onClick={()=>{props.clicked("FDA APPROVED") ; changeColor("FDA APPROVED")}}>FDA Approved</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("PFIZER")}>Pfizer</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("MODERNA")}>Moderna</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("OXFORD")}>Oxford</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("SPUTNIK")}>Sputnik 5</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("CASINO")}>CanSino Biologics</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("SINOVAC")}>Sinovac</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("NORAVAX")}>Noravax</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} onClick={()=>props.clicked("WUHAN")}>Wuhan</button>

            </div>
            </div>
        </div>
    );
}

export default UpperNavigationLinks;