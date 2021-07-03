import {combineReducers} from 'redux'
import userReducer from './userReducer'
import quantityReducer from './quantityReducer'
const rootReducer=combineReducers({
    quantity:quantityReducer,
    user:userReducer,
})
export default rootReducer;