import React from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom'
import App from './App'


const FinalAssembly = () => {
    return (

        <Router>
        <div>
            <Switch>

                <Route exact path='/' component={App}></Route>
            </Switch>
        </div>
        </Router>
    );
};

export default FinalAssembly;