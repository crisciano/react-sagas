
import { createAction, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import ClientService from '../../api/services/ClientsService'

const initialState = Immutable({
    isModalOpen: false,
    data: null
});

const SET_CLIENTS = "SET_CLIENTS"
const GET_CLIENTS = "GET_CLIENTS"
const UPDATE_CLIENTS = "UPDATE_CLIENTS"
const SET_MODAL = "SET_MODAL"

const UNLOAD_GET_CLIENTS = 'UNLOAD_GET_CLIENTS';

export const getclients = createAction(GET_CLIENTS);
export const updateClients = createAction(UPDATE_CLIENTS);
export const setModal = createAction(SET_MODAL);

export function* fetchingClients() {
    const { data } = yield select(state => state.clients );
    console.log('=================== fetching clients ==================');

    if(!data){
        try{
            const response = yield call(ClientService.getClients)
            console.log("Clients ===> ", response);

            yield put({
                type: SET_CLIENTS,
                payload: response
            });

        }catch(e){
            console.log(e);
        }

    }else{
        yield put({
            type: UNLOAD_GET_CLIENTS,
            payload: {
                clients: 'fetchingClients',
                value: false
            }
        })
    }
}

export function* fetchingUpdateClients() {
    // const { data } = yield select(state => state.clients );
    console.log('=================== fetching update clients ==================');

    try{
        const response = yield call(ClientService.getClients)
        console.log("Clients ===> ", response);

        yield put({
            type: SET_CLIENTS,
            payload: response
        });

    }catch(e){
        console.log(e);
    }
}

// function* saveclientsSession ({type, payload}) {
//     // let key = null;

//     console.log(type, payload);

//     yield put({
//         type: SET_CLIENTS,
//         payload
//     });

//     // if(type === "SET_CLIENTS")
//     //     yield store.dispatch("SET_CLIENT", payload)
//     // // if(type === "SET_CLIENTS")
//     //     yield store.set("SET_CLIENT", payload)
// }

export function* ClientsSagas() {
    console.log('========== client sagas =================');

    yield all([
        takeLatest(GET_CLIENTS, fetchingClients),
        takeLatest(UPDATE_CLIENTS, fetchingUpdateClients)
    ])
}

export default handleActions({
    [GET_CLIENTS]: (state, action) => state.merge({ fetchingClients: true }),
    [SET_CLIENTS]: (state, action) => state.merge({ fetchingClients: false, data: action.payload }),
    [UPDATE_CLIENTS] : (state, action) => state.merge({ fetchingClients: false, data: action.payload }),

    [UNLOAD_GET_CLIENTS]: (state, {payload}) => state.merge({ [payload.clients]: payload.value }),

    [SET_MODAL] : (state, action) => state.merge({isModalOpen: action.payload})
}, initialState)