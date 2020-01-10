import { createAction, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isAuthenticated: false,
    data: {}
})

const LOG_IN = "LOG_IN";
const SET_USER = "SET_USER";

export const setLogin = createAction(LOG_IN)
export const setUser = createAction(SET_USER)


export default handleActions({
    [LOG_IN] : (state, action) => state.merge({isAuthenticated: action.payload}),
    [SET_USER]: (state, action) => state.merge({data: action.payload})
}, initialState)