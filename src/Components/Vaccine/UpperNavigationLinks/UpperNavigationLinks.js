import React from 'react';
import {Link} from 'react-router-dom'
import './UpperNavigationLinks.css'

function UpperNavigationLinks(props) {
    return (
        <div className="vaccineUpperNavigationLinks">
           <div className="container-fluid">
            <div className="setLinks">
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >All Vaccines</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Pre Clinical</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Phase 1</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Phase 2</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Phase 3</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Phase 4</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >FDA Approved</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Pfizer</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Moderna</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Oxford</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Sputnik 5</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >CanSino Biologics</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Sinovac</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Noravax</button>
                <button type="button" className="marginSet btn btn-dark" style={{fontWeight:'bold'}} >Wuhan</button>

            </div>
            </div>
        </div>
    );
}

export default UpperNavigationLinks;