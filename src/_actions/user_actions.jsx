import React from "react";
import axios from "axios";

import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";

export function loginUser(dataTosubmit) {
    const request = axios
        .post(`http://54.180.35.70/api/users/login`, dataTosubmit)
        .then((response) => response.data);

    return {
        type: LOGIN_USER,
        payload: request,
    };
}

export function registerUser(dataTosubmit) {
    const request = axios
        .post(`http://54.180.35.70/api/users/register`, dataTosubmit)
        .then((response) => response.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
}

export function auth(dataTosubmit) {
    const request = axios
        .post(`http://54.180.35.70/api/users/auth`, dataTosubmit)
        .then((response) => response.data);

    return {
        type: AUTH_USER,
        payload: request,
    };
}

export function logout(dataTosubmit) {
    const request = axios
        .post(`http://54.180.35.70/api/users/logout`, dataTosubmit)
        .then((response) => response.data);

    return {
        type: LOGOUT_USER,
        payload: request,
    };
}
