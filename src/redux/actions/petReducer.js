
import { createAction, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import PetService from '../../api/services/PetsService'

const initialState = Immutable({
    data: null
});

export const SET_PETS = "SET_PETS"
export const GET_PETS = "GET_PETS"

const UNLOAD_GET_PETS = 'UNLOAD_GET_PETS';

export const getPets = createAction(GET_PETS);

export function* fetchingPets() {
    const { data } = yield select(state => state.pets );
    console.log('=================== fetching pets ==================');

    if(!data){
        try{
            const response = yield call(PetService.getPets)
            console.log("Pets ===>", response);

            yield put({
                type: SET_PETS,
                payload: response
            });

        }catch(e){
            console.log(e);
        }

    }else{
        yield put({
            type: UNLOAD_GET_PETS,
            payload: {
                clients: 'fetchingPets',
                value: false
            }
        })
    }
}

export function* PetsSagas() {
    console.log('========== pet sagas =================');

    yield all([
        takeLatest(GET_PETS, fetchingPets),
        // takeLatest(SET_PETS, saveclientsSession),
    ])
}

export default handleActions({
    [GET_PETS]: (state, action) => state.merge({ fetchingPets: true }),
    [SET_PETS]: (state, action) => state.merge({ fetchingPets: false, data: action.payload }),

    [UNLOAD_GET_PETS]: (state, {payload}) => state.merge({ [payload.clients]: payload.value })
}, initialState)