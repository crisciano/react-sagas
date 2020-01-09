import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../redux/sagas'
export const sagaMiddleware = createSagaMiddleware()

export const store = createStore( 
    reducers, 
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagas)
