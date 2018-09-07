import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

import testAvatar from '../../containers/Profile/Detail/InfoCard/testAvatar.jpg';


const initialState = {
    avatar: '',
    error: null,
    loading: false
};


const avatarStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const avatarSuccess = (state, action) => {
    return updateObject( state, {
        avatar: action.avatar,
        error: null,
        loading: false
    } );
};

const avatarFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AVATAR_START:
            return avatarStart(state, action);
        case actionTypes.AVATAR_SUCCESS:
            return avatarSuccess(state, action);
        case actionTypes.AVATAR_FAIL:
            return avatarFail(state, action);
        default:
            return state;
    }
};

export default reducer;