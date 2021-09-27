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
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/rna-based-vaccine/biontech-pfizer-fosun-pharma-rentschler-biopharma'}>Pfizer</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/rna-based-vaccine/moderna-niaid-lonza-catalent-rovi-medidata-bioqual'}>Moderna</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/non-replicating-viral-vector/university-of-oxford-oxford-biomedica,-vaccines-manufacturing-and-innovation-centre,-pall-life-sciences,-cobra-biologics,-halixbv,-advent-s.r.l.,-merck-kgaa,-the-serum-institute,-vaccitech,-catalent,-csl,-and-astrazenecaiqvia'}>Oxford</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/non-replicating-viral-vector/gamaleya-research-institute'}>Sputnik 5</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/non-replicating-viral-vector/cansino-biologics-beijing-institute-of-biotechnology-petrovax'}>CanSino Biologics</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/inactivated-virus/sinovac-instituto-butantan-bio-farma'}>Sinovac</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/protein-subunit/novavaxemergent-biosolutions-praha-vaccines-biofabri-fujifilm-diosynth-biotechnologies-fdb-serum-institute-of-india-sk-bioscience-takeda-pharmaceutical-company-limited-agc-biologics-polypeptide-group-endo'}>Noravax</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} ><Link className="setLinkColor" to={'/Vaccine-Information/inactivated-virus/beijing-institute-of-biological-products-sinopharm'}>Wuhan</Link></button>

            </div>
            </div>
        </div>
    );
}

export default UpperNavigationLinks;