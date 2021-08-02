import React from 'react';
import './UpperNavigationLinks.css'

function UpperNavigationLinks(props) {
    return (
        <div className="upperNavigationLinks">
           <div className="container-fluid">
            <div className="setLinks">
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="AllTreatments">All Treatment</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="FdaApproved">FDA Approved</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Remdesivir">Remdesivir</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Favipiravir">Favipiravir</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="HydroxyChloroquine">HydroxyChloroquine</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Ivermectin">Ivermectin</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Tocillizumab">Tocillizumab</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Anakinra">Anakinra</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} value="Telmisartan">Telmisartan</button>
                <button type="button" className="marginSet btn btn-dark"style={{fontWeight:'bold'}}  value="HyperimmuneImmunoglobium">Hyperimmune Immunoglobium(hIVIG)</button>

            </div>
            </div>
        </div>
    );
}

export default UpperNavigationLinks;