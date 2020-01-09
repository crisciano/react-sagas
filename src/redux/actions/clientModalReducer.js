import { createAction, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isModalOpen: false
})

const SET_MODAL = "SET_MODAL"

export const setModal = createAction(SET_MODAL);

export default handleActions({
    [SET_MODAL] : (state, action) => state.merge({isModalOpen: action.payload})
}, initialState)