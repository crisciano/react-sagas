
import { combineReducers } from 'redux';
import clientsReducer from './actions/clientReducer'
import petsReducer from './actions/petReducer'
import servicesReducer from './actions/ServiceReducer'
import modalClient from './actions/clientModalReducer'

export default combineReducers({
    'clients': clientsReducer,
    'pets': petsReducer,
    'services': servicesReducer,
    'modalClient': modalClient  
})