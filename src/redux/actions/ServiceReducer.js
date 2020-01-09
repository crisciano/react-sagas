
import { createAction, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import ServiceService from '../../api/services/ServicesService'

const initialState = Immutable({
    data: null
});

export const SET_SERVICES = "SET_SERVICES"
export const GET_SERVICES = "GET_SERVICES"

const UNLOAD_GET_SERVICES = 'UNLOAD_GET_SERVICES';

export const getServices = createAction(GET_SERVICES);

export function* fetchingServices() {
    const { data } = yield select(state => state.services );
    console.log('=================== fetching services ==================');

    if(!data){
        try{
            const response = yield call(ServiceService.getServices)
            console.log("Services  ===>", response);

            yield put({
                type: SET_SERVICES,
                payload: response
            });

        }catch(e){
            console.log(e);
        }

    }else{
        yield put({
            type: UNLOAD_GET_SERVICES,
            payload: {
                clients: 'fetchingServices',
                value: false
            }
        })
    }
}

export function* ServicesSagas() {
    console.log('========== services sagas =================');

    yield all([
        takeLatest(GET_SERVICES, fetchingServices),
        // takeLatest(SET_SERVICES, saveclientsSession),
    ])
}

export default handleActions({
    [GET_SERVICES]: (state, action) => state.merge({ fetchingServices: true }),
    [SET_SERVICES]: (state, action) => state.merge({ fetchingServices: false, data: action.payload }),

    [UNLOAD_GET_SERVICES]: (state, {payload}) => state.merge({ [payload.clients]: payload.value })
}, initialState)