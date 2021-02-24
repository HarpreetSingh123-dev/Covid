import React from 'react';

function Totals(props) {
    return (

       <div className="container-fluid"> 
        <div>
          
            <p><b>Cases confirmed till date: &nbsp;</b>{props.confirmed}</p>
            <p><b>Cases recovered till date: &nbsp;</b>{props.recovered}</p>
            <p><b>Crtitical cases till date: &nbsp;</b>{props.critical}</p>
            <p><b>Deaths till date: &nbsp; </b>{props.deaths}</p>
            {/*<p><b>Last change in stats: &nbsp;</b>{props.lastChange}</p>
            <p><b>Last update in stats: &nbsp;</b>{props.lastUpdate}</p>*/}
            
        </div>
       </div> 
    );
}

export default Totals;