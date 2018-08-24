import axios from 'axios';

import * as actionTypes from './actionTypes';

export const profileStart = () => {
    return {
        type: actionTypes.PROFILE_START
    };
};

export const profileSuccess = (name, email, phone_number, university, major) => {
    return {
        type: actionTypes.PROFILE_SUCCESS,
        name: name,
        email: email,
        phone_number: phone_number,
        university: university,
        major: major
    };
};

export const profileFail = (error) => {
    return {
        type: actionTypes.PROFILE_FAIL,
        error: error
    };
};

export const profile = (name, email, phone_number, university, major, userId, token) => {
    return dispatch => {
        dispatch(profileStart());
        const profileData = {
            name: name,
            email: email,
            phone_number: phone_number,
            university: university,
            major: major,
            returnSecureToken: true
        };

        const url = 'https://skillup-53fa3.firebaseio.com/profile/' + userId + '.json?auth=' + token;

        axios.put(url, profileData)
            .then(response => {
                console.log(response);
                dispatch(profileSuccess(name, email, phone_number, university, major));
            })
            .catch(err => {
                console.log(err);
                dispatch(profileFail(err.response.data.error));
            });
    };
};