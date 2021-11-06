import {combineReducers} from 'redux'
import Treatment from './Reducers/TreatmentComponent/GlobalTreatmentReducer'
import MainPageChart from './Reducers/MainPageCharts/GlobalMainPageChartReducer'
import setCountriesAndCodes from './Reducers/MainPageCountryAndCodes/MainPageCountryAndCodes'

export default combineReducers({

treatment:Treatment,
chartData:MainPageChart,
countryAndCodes:setCountriesAndCodes

})