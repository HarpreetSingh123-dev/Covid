import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './UpperNavigationLinks.css'

function UpperNavigationLinks(props) {
    
    const [ allTreatmentColor , setAllTreatmentColor ] = useState('cyan')
    const [ fdaColor , setFdaColor ] = useState('')
    

    useEffect(()=>{

        changeColor(props.buttonClicked)

    },[props.buttonClicked])
    

    function changeColor(value){

        switch(value){

            case 'ALL TREATMENTS':
                setAllTreatmentColor('cyan')
                setFdaColor('white')

            break;

            case 'FDA APPROVED':
                setFdaColor('cyan')
                setAllTreatmentColor('white')

            break;

            default: 

                  setFdaColor('white')
                  setAllTreatmentColor('white')

        }


    }
    
    return (
        <div className="upperNavigationLinks">
           <div className="container-fluid">
            <div className="setLinks">
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:allTreatmentColor}} value="AllTreatments" onClick={()=>{ props.clicked('ALL TREATMENTS')    ;changeColor("ALL TREATMENTS")} }>All Treatment</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold', color:fdaColor}} value="FdaApproved" onClick={()=>{props.clicked('FDA APPROVED') ;changeColor('FDA APPROVED')}}>FDA Approved</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Remdesivir"><Link className="setLinkColor" to={'/Treatment-Information/antivirals/gilead-world-health-organization-solidarity-trial-national-institute-of-allergy-and-infectious-diseases-(niaid)s-adaptive-covid-19-treatment-trial-feinstein-institutes-i-spy-covid'}>Remdesivir</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Favipiravir"><Link className="setLinkColor" to={'/Treatment-Information/antivirals/fujifilm-toyama-chemical-zhejiang-hisun-pharmaceuticals-numerous-trials-with-global-research-sponsors-brigham-and-womens-hospital-massachusetts-general-hospital,-and-the-university-of-massachusetts-medical-school-glenmark-pharmaceuticals'}>Favipiravir</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="HydroxyChloroquine"><Link className="setLinkColor" to={'/Treatment-Information/other/numerous-trials-with-global-research-sponsors-including-world-health-organization-solidarity-trial-orchid-trial-with-national-heart-lung,-and-blood-institute-(nhlbi)-remap-cap-global-trial-novartis-principle-trial'}>HydroxyChloroquine</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Ivermectin"><Link className="setLinkColor" to={'/Treatment-Information/other/medincell-university-of-utah-surgisphere-corp-university-of-baghdad-tanta-university-other-global-research-sponsors'}>Ivermectin</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Tocillizumab"><Link className="setLinkColor" to={'/Treatment-Information/antibodies/numerous-trials-with-global-research-sponsors-roche-remap-cap-recovery'}>Tocillizumab</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Anakinra"><Link className="setLinkColor" to={'/Treatment-Information/other/swedish-orphan-biovitrum-remap-cap-global-trial-numerous-global-trial-sponsors'}>Anakinra</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Telmisartan"><Link className="setLinkColor" to={'/Treatment-Information/other/university-of-hawaii-(boehringer-ingelheim)-other-global-research-sponsors'}>Telmisartan</Link></button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="HyperimmuneImmunoglobium"><Link className="setLinkColor" to={'/Treatment-Information/antivirals/national-institute-of-allergy-and-infectious-disease-(niaid)university-of-minnesota'}>Hyperimmune Immunoglobium(hIVIG)</Link></button>

            </div>
            </div>
        </div>
    );
}

export default UpperNavigationLinks;