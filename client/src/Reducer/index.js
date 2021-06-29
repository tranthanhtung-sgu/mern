import {combineReducers} from 'redux'
import userReducer from './userReducer'
import hobbyReducer from './hobbyReducer'
const rootReducer=combineReducers({
    hobby:hobbyReducer,
    user:userReducer,
})
export default rootReducer;