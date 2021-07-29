import React from 'react';
import './UpperNavigationLinks.css'

function UpperNavigationLinks(props) {
    return (
        <div className="upperNavigationLinks">
           <div className="container-fluid">
            <div className="setLinks">
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>All Treatment</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>FDA Approved</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>Remdesivir</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>Favipiravir</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >HydroxyChloroquine</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Ivermectin</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>Tocillizumab</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>Anakinra</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}}>Telmisartan</button>
                <button type="button" className="marginSet btn btn-dark"style={{fontWeight:'bold'}} >Hyperimmune Immunoglobium(hIVIG)</button>

            </div>
            </div>
        </div>
    );
}

export default UpperNavigationLinks;