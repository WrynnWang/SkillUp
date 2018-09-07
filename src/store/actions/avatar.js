import axios from 'axios';

import * as actionTypes from './actionTypes';

export const avatarStart = () => {
    return {
        type: actionTypes.AVATAR_START
    };
};

export const avatarSuccess = (avatar) => {
    return {
        type: actionTypes.AVATAR_SUCCESS,
        avatar: avatar
    };
};

export const avatarFail = (error) => {
    return {
        type: actionTypes.AVATAR_FAIL,
        error: error
    };
};

export const avatarFirstLoad = (avatar) => {
    return dispatch => {
        dispatch(avatarStart());
        dispatch(avatarSuccess(avatar));
    }
};

export const avatar = (avatar, localId, token) => {
    return dispatch => {
        dispatch(avatarStart());

        const avataData = {
            avatar: avatar
        };

        const url = 'https://skillup-53fa3.firebaseio.com/avatar/' + localId + '.json?auth=' + token;

        axios.put(url, avataData)
            .then(response => {
                console.log(response,"avatar has uploaded successfully");
                dispatch(avatarSuccess(avatar));
            })
            .catch(err => {
                console.log(err);
                dispatch(avatarFail(err.response.data.error));
            });
    };
};