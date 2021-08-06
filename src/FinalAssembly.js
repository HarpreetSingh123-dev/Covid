import React from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom'
import App from './App'
import Country from './Components/SpecificCountry/SpecificCountry'

import Vaccine from './Components/Vaccine/Vaccine'
import Treatment from './Components/Treatment/Treatment'
import SpecificTreatment from './Components/Treatment/SpecificTreatment/SpecificTreatment';
import Maps from './Components/Map/Maps'
import News from './Components/News/News'
import About from './Components/About/About'


const FinalAssembly = () => {
    return (

        <Router>
        <div>
            <Switch>

                <Route exact path='/' component={App}></Route>
                <Route exact path='/Country/:id/:type' component={Country}></Route>
                <Route exact path='/Vaccine' component={Vaccine}></Route>
                <Route exact path='/Treatment' component={Treatment}></Route>
                <Route exact path='/Map' component={Maps}></Route>
                <Route exact path='/News' component={News}></Route>
                <Route exact path='/Treatment-Information/:trimedCategory/:trimedName' component={SpecificTreatment}></Route>
                <Route exact path='/About' component={About}></Route>
                
            </Switch>
        </div>
        </Router>
    );
};

export default FinalAssembly;