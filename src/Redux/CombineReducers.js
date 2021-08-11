import {combineReducers} from 'redux'
import Treatment from './Reducers/TreatmentComponent/GlobalTreatmentReducer'
import MainPageChart from './Reducers/MainPageCharts/GlobalMainPageChartReducer'

export default combineReducers({

treatment:Treatment,
chartData:MainPageChart

})