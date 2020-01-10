
import { combineReducers } from 'redux';
import clientsReducer from './actions/clientReducer'
import petsReducer from './actions/petReducer'
import servicesReducer from './actions/ServiceReducer'
import modalClientReducer from './actions/clientModalReducer'
import userReducer from './actions/userReducer.js'

export default combineReducers({
    'clients': clientsReducer,
    'pets': petsReducer,
    'services': servicesReducer,
    'modalClient': modalClientReducer,
    'user': userReducer
})