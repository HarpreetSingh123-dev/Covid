import React from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom'
import App from './App'
import Country from './Components/SpecificCountry/SpecificCountry'


const FinalAssembly = () => {
    return (

        <Router>
        <div>
            <Switch>

                <Route exact path='/' component={App}></Route>
                <Route exact path='/Country/:id/:type' component={Country}></Route>
            </Switch>
        </div>
        </Router>
    );
};

export default FinalAssembly;