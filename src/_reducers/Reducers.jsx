import React from "react";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "../_actions/types";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
    user,
});

const Reducers = configureStore({
    reducer: rootReducer,
    middleware: [promiseMiddleware, ReduxThunk],
});

function user(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSucess: action.payload };
        case REGISTER_USER:
            return { ...state, register: action.payload };
        case AUTH_USER:
            return { ...state, auth: action.payload };
        case LOGOUT_USER:
            return { ...state, logout: action.payload };
        default:
            return state;
    }
}

export default Reducers;
