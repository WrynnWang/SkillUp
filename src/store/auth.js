import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {

    return{
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFailed = (error) => {

    return{
        type: actionTypes.AUTH_FAILED,
        error:error
    };
};

export const auth=(email, password) => {

    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    };

    return dispatch => {
        dispatch(authStart());

        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC5srtdqmi44OR9thBcbOzUHvWHOAK_6y8'
        , authData).then(
            response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            }
        ).catch(error => {
            console.log(error);
            dispatch(authFailed(error));
        });
    };
};