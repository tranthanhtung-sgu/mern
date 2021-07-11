import {combineReducers} from 'redux'
import quantityReducer from './quantityReducer'
const rootReducer=combineReducers({
    quantity:quantityReducer,
})
export default rootReducer;