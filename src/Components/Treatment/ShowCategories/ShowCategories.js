import React ,{useEffect,useState} from 'react';
import './ShowCategories.css'

function ShowCategories(props) {
   
    const [ allTreatmentColour , setAllTreatmentColour ] = useState('floralwhite')


    const [ fdaColour , setFdaColour] = useState('steelblue')

    const [ antibodiesColour , setAntibodiesColour] = useState('steelblue')

    const [ antiviralColour , setAntiviralColour] = useState('steelblue')

    const [ cellBasedColour , setCellBasedColour] = useState('steelblue')

    const [ rnaBasedColour , setRnaBasedColour] = useState('steelblue')

    const [ deviceColour , setDeviceColour] = useState('steelblue')

    const [ scanningColour , setScanningColour] = useState('steelblue')

    const [ clinicalColour , setClinicalColour] = useState('steelblue')

    const [ preClinicalColour , setPreClinicalColour] = useState('steelblue')

    // below states for font color after click

    const [ allTreatmentFontColor , setAllTreatmentFontColor ] = useState('black')

    const [ fdaFontColor , setFdaFontColor ] = useState('white')

    const [ antibodiesFontColor , setAntibodiesFontColor ] = useState('white')

    const [ antiviralFontColor , setAntiviralFontColor ] = useState('white')

    const [ cellBasedFontColor , setCellBasedFontColor ] = useState('white')

    const [ rnaFontColor , setRnaFontColor ] = useState('white')

    const [ deviceFontColor , setDeviceFontColor ] = useState('white')

    const [ scanningFontColor , setScanningFontColor ] = useState('white')

    const [ clinicalFontColor , setClinicalFontColor ] = useState('white')

    const [ preClinicalFontColor , setPreClinicalFontColor ] = useState('white')


    useEffect(()=>{

        onClickHandler(props.buttonClicked)
        colorHandler(props.buttonClicked)
        

    },[props.buttonClicked])



    function onClickHandler(value){

        switch (value){

             case 'ALL TREATMENTS' :

                     setAllTreatmentColour('floralwhite')
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
                   
                setFdaColour('floralwhite')
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
                 setAntibodiesColour('floralwhite')
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
                setAntiviralColour('floralwhite')
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
                 setCellBasedColour('floralwhite')
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
                setRnaBasedColour('floralwhite')
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
                setDeviceColour('floralwhite')
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
                setScanningColour('floralwhite')
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
                setClinicalColour('floralwhite')
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
                setPreClinicalColour('floralwhite')


             break;

        }

    }


    function colorHandler(value){

      switch(value){

            case 'ALL TREATMENTS':
              setAllTreatmentFontColor('black')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'FDA APPROVED':
              setAllTreatmentFontColor('white')
              setFdaFontColor('black')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')
              

            break;

            case 'Antibodies':

              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('black')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'Antivirals':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('black')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'Cell-based therapies':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('black')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'RNA-based treatments':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('black')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'Device':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('black')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'Scanning compounds to repurpose':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('black')
              setClinicalFontColor('white')
              setPreClinicalFontColor('white')

            break;

            case 'CLINICAL':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('black')
              setPreClinicalFontColor('white')

            break;

            case 'PRE CLINICAL':
              setAllTreatmentFontColor('white')
              setFdaFontColor('white')
              setAntibodiesFontColor('white')
              setAntiviralFontColor('white')
              setCellBasedFontColor('white')
              setRnaFontColor('white')
              setDeviceFontColor('white')
              setScanningFontColor('white')
              setClinicalFontColor('white')
              setPreClinicalFontColor('black')

            break

            

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
              
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:allTreatmentColour,fontWeight:'bold' , color:allTreatmentFontColor}} onClick={()=>{props.clicked("ALL TREATMENTS") ; onClickHandler("ALL TREATMENTS") ; colorHandler("ALL TREATMENTS")}}  >ALL TREATMENTS</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:fdaColour,fontWeight:'bold', color:fdaFontColor}}          onClick={()=>{props.clicked("FDA APPROVED");    onClickHandler("FDA APPROVED") ; colorHandler("FDA APPROVED")}}  >FDA APPROVED</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:antibodiesColour,fontWeight:'bold', color:antibodiesFontColor}}   onClick={()=>{props.clicked("Antibodies") ;     onClickHandler("Antibodies") ; colorHandler("Antibodies")}} >ANTIBODIES</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:antiviralColour,fontWeight:'bold', color:antiviralFontColor}}    onClick={()=>{props.clicked("Antivirals") ;     onClickHandler("Antivirals"); colorHandler("Antivirals")}} >ANTIVIRALS</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:cellBasedColour,fontWeight:'bold', color:cellBasedFontColor}}    onClick={()=>{props.clicked("Cell-based therapies") ; onClickHandler("Cell-based therapies") ; colorHandler("Cell-based therapies")}}  >CELL-BASED THERAPIES</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:rnaBasedColour,fontWeight:'bold', color:rnaFontColor}}     onClick={()=>{props.clicked("RNA-based treatments") ; onClickHandler("RNA-based treatments") ; colorHandler("RNA-based treatments")}}  >RNA BASED</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:deviceColour,fontWeight:'bold', color:deviceFontColor}}       onClick={()=>{props.clicked("Device") ; onClickHandler("Device") ; colorHandler("Device")}}  >DEVICE</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:scanningColour,fontWeight:'bold', color:scanningFontColor}}     onClick={()=>{props.clicked("Scanning compounds to repurpose") ; onClickHandler("Scanning compounds to repurpose") ; colorHandler("Scanning compounds to repurpose")}}  >SCANNING COMPOUND TO REPURPOSE</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:clinicalColour,fontWeight:'bold', color:clinicalFontColor}}     onClick={()=>{props.clicked("CLINICAL") ; onClickHandler("CLINICAL") ; colorHandler("CLINICAL")}}  >CLINICAL</button>
                           <button  type="button" class="btn btn-primary"  style={{backgroundColor:preClinicalColour,fontWeight:'bold', color:preClinicalFontColor}}  onClick={()=>{props.clicked("PRE CLINICAL") ; onClickHandler("PRE CLINICAL") ; colorHandler("PRE CLINICAL")}}  >PRE CLINICAL</button>
           
                     </div>
                </div>
                    
         </div>
        </div>
    );
}

export default ShowCategories;