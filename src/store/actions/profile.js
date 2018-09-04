import axios from 'axios';

import * as actionTypes from './actionTypes';

export const profileStart = () => {
    return {
        type: actionTypes.PROFILE_START
    };
};

export const profileSuccess = (name, email, university, position, number, website) => {
    return {
        type: actionTypes.PROFILE_SUCCESS,
        name: name,
        email: email,
        number: number,
        position: position,
        university: university,
        website: website,
    };
};

export const profileFail = (error) => {
    return {
        type: actionTypes.PROFILE_FAIL,
        error: error
    };
};

export const profile = (name, email, university, position, number, website, userId, token) => {
    return dispatch => {
        dispatch(profileStart());
        const profileData = {
            name: name,
            email: email,
            number: number,
            position: position,
            university: university,
            website: website,
            returnSecureToken: true
        };

        console.log(profileData);
        const url = 'https://skillup-53fa3.firebaseio.com/profile/' + userId + '.json?auth=' + token;

        axios.put(url, profileData)
            .then(response => {
                console.log(response,"1111111");
                dispatch(profileSuccess(name, email, university, position, number, website));
            })
            .catch(err => {
                console.log(err);
                dispatch(profileFail(err.response.data.error));
            });
    };
};