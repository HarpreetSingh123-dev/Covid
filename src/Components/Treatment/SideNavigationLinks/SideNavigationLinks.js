import React,{useState, useEffect} from 'react';

import './SideNavigationLinks.css'

function SideNavigationLinks(props) {
    
    
    const [ allTreatmentColour , setAllTreatmentColour ] = useState('paleturquoise')

    const [ fdaColour , setFdaColour] = useState('steelblue')

    const [ antibodiesColour , setAntibodiesColour] = useState('steelblue')

    const [ antiviralColour , setAntiviralColour] = useState('steelblue')

    const [ cellBasedColour , setCellBasedColour] = useState('steelblue')

    const [ rnaBasedColour , setRnaBasedColour] = useState('steelblue')

    const [ deviceColour , setDeviceColour] = useState('steelblue')

    const [ scanningColour , setScanningColour] = useState('steelblue')

    const [ clinicalColour , setClinicalColour] = useState('steelblue')

    const [ preClinicalColour , setPreClinicalColour] = useState('steelblue')


    useEffect(()=>{
        
       
        onClickHandler(props.buttonClicked)
        //console.log("triggered in side navigation")
    

    },[props.buttonClicked])


    
    
    function onClickHandler(value){

        switch (value){

             case 'ALL TREATMENTS' :

                     setAllTreatmentColour('paleturquoise')
                     setFdaColour('steelblue')
                     setAntibodiesColour('steelblue')
                     setAntiviralColour('steelblue')
                     setCellBasedColour('steelblue')
                     setRnaBasedColour('steelblue')
                     setDeviceColour('steelblue')
                     setScanningColour('steelblue')
                     setClinicalColour('steelblue')
                     setPreClinicalColour('steelblue')
             
             break;
             
             case 'FDA APPROVED' :
                   
                setFdaColour('paleturquoise')
                setAllTreatmentColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('steelblue')
                setCellBasedColour('steelblue')
                setRnaBasedColour('steelblue')
                setDeviceColour('steelblue')
                setScanningColour('steelblue')
                setClinicalColour('steelblue')
                setPreClinicalColour('steelblue')

             break;
             
             case 'Antibodies':

                 setAllTreatmentColour('steelblue')
                 setFdaColour('steelblue')
                 setAntibodiesColour('paleturquoise')
                 setAntiviralColour('steelblue')
                 setCellBasedColour('steelblue')
                 setRnaBasedColour('steelblue')
                 setDeviceColour('steelblue')
                 setScanningColour('steelblue')
                 setClinicalColour('steelblue')
                 setPreClinicalColour('steelblue')

             break;

             case 'Antivirals':
 
                setAllTreatmentColour('steelblue')
                setFdaColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('paleturquoise')
                setCellBasedColour('steelblue')
                setRnaBasedColour('steelblue')
                setDeviceColour('steelblue')
                setScanningColour('steelblue')
                setClinicalColour('steelblue')
                setPreClinicalColour('steelblue')
                

             break;

             case 'Cell-based therapies':

                 setAllTreatmentColour('steelblue')
                 setFdaColour('steelblue')
                 setAntibodiesColour('steelblue')
                 setAntiviralColour('steelblue')
                 setCellBasedColour('paleturquoise')
                 setRnaBasedColour('steelblue')
                 setDeviceColour('steelblue')
                 setScanningColour('steelblue')
                 setClinicalColour('steelblue')
                 setPreClinicalColour('steelblue')

             break;

             case 'RNA-based treatments':

                setAllTreatmentColour('steelblue')
                setFdaColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('steelblue')
                setCellBasedColour('steelblue')
                setRnaBasedColour('paleturquoise')
                setDeviceColour('steelblue')
                setScanningColour('steelblue')
                setClinicalColour('steelblue')
                setPreClinicalColour('steelblue')

             break;

             case 'Device':

                setAllTreatmentColour('steelblue')
                setFdaColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('steelblue')
                setCellBasedColour('steelblue')
                setRnaBasedColour('steelblue')
                setDeviceColour('paleturquoise')
                setScanningColour('steelblue')
                setClinicalColour('steelblue')
                setPreClinicalColour('steelblue')

             break;

             case 'Scanning compounds to repurpose':

                setAllTreatmentColour('steelblue')
                setFdaColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('steelblue')
                setCellBasedColour('steelblue')
                setRnaBasedColour('steelblue')
                setDeviceColour('steelblue')
                setScanningColour('paleturquoise')
                setClinicalColour('steelblue')
                setPreClinicalColour('steelblue')

             break;

             case 'CLINICAL' :

                setAllTreatmentColour('steelblue')
                setFdaColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('steelblue')
                setCellBasedColour('steelblue')
                setRnaBasedColour('steelblue')
                setDeviceColour('steelblue')
                setScanningColour('steelblue')
                setClinicalColour('paleturquoise')
                setPreClinicalColour('steelblue')


             break;

             case 'PRE CLINICAL':

                setAllTreatmentColour('steelblue')
                setFdaColour('steelblue')
                setAntibodiesColour('steelblue')
                setAntiviralColour('steelblue')
                setCellBasedColour('steelblue')
                setRnaBasedColour('steelblue')
                setDeviceColour('steelblue')
                setScanningColour('steelblue')
                setClinicalColour('steelblue')
                setPreClinicalColour('paleturquoise')


             break;

        }

    }
    

    
    return (
        
        <div className="sideNavigationButtons">
            
            <h2 className="text-center" style={{color: "white",marginTop:"12px"}}><b>Categories</b></h2>

                 <hr className="ruleTreatment"></hr>

                      
                   <div className="outerWrapper">
                        
                      <div className="innerWrapper">
                           
                           
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:allTreatmentColour,fontWeight:'bold'}} onClick={()=>{props.clicked("ALL TREATMENTS") ; onClickHandler("ALL TREATMENTS")  }}>ALL TREATMENTS</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:fdaColour,fontWeight:'bold'}}          onClick={()=>{props.clicked("FDA APPROVED");    onClickHandler("FDA APPROVED") }} >FDA APPROVED</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:antibodiesColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("Antibodies") ;     onClickHandler("Antibodies")}} >ANTIBODIES</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:antiviralColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("Antivirals") ;     onClickHandler("Antivirals")}} >ANTIVIRALS</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:cellBasedColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("Cell-based therapies") ; onClickHandler("Cell-based therapies")}} >CELL-BASED THERAPIES</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:rnaBasedColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("RNA-based treatments") ; onClickHandler("RNA-based treatments")}} >RNA BASED</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:deviceColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("Device") ; onClickHandler("Device")}} >DEVICE</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:scanningColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("Scanning compounds to repurpose") ; onClickHandler("Scanning compounds to repurpose")}}>SCANNING COMPOUND TO REPURPOSE</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:clinicalColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("CLINICAL") ; onClickHandler("CLINICAL")}} >CLINICAL</button>
                           <button  type="button" class="btn btn-primary"    style={{backgroundColor:preClinicalColour,fontWeight:'bold'}}        onClick={()=>{props.clicked("PRE CLINICAL") ; onClickHandler("PRE CLINICAL")}} >PRE CLINICAL</button>
           
                     </div>
                </div>
                    {console.log('just test')}
         </div>
    );
}

export default SideNavigationLinks;