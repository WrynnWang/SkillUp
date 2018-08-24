import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    name:null,
    phone_number: null,
    email: null,
    university:null,
    major: null,
    error: null,
    loading: false
};

const profileStart = ( state, action ) => {
    return updateObject( state, { error: null , loading: true });
};

const profileSuccess = (state, action) => {
    return updateObject( state, {
        name: action.name,
        email: action.email,
        phone_number: action.phone_number,
        university: action.university,
        major: action.major,
        error: null,
        loading: false
    } );
};

const profileFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PROFILE_START:
            return profileStart(state, action);
        case actionTypes.PROFILE_SUCCESS:
            return profileSuccess(state, action);
        case actionTypes.PROFILE_FAIL:
            return profileFail(state, action);
        default:
            return state;
    }
};

export default reducer;