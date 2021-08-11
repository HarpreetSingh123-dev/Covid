import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'



import reportWebVitals from './reportWebVitals';
import FinalAssembly from './FinalAssembly'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Reducer from './Redux/CombineReducers'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
const Store = createStore(Reducer)

ReactDOM.render(
 
 <React.StrictMode>
    
    <Provider store={Store}>

       <FinalAssembly></FinalAssembly>
    
    </Provider>
  
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
