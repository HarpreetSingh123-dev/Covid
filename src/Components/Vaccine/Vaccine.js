import React, { Component } from 'react';
import './Vaccine.css'
import Navbar from '../Navbar/Navbar'


class Vaccine extends Component {
    render() {
        return (
            <div>
             <Navbar></Navbar>   
             <div className="row ll">

                 <div className="col-lg-3">
                   <h1>Categories here</h1>
                 </div>

                 <div className="col-lg-9">
                   <h1>All other stuff here</h1>
                 </div>


             </div>
            </div>
        );
    }
}

export default Vaccine;