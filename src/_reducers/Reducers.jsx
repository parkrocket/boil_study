import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    UPDATE_USER,
    ADMIN_MENU,
    CONFIG_SET,
} from "../_actions/types";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
    user,
    adminMenu,
    configSet,
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
        case UPDATE_USER:
            return { ...state, update: action.payload };
        default:
            return state;
    }
}

function adminMenu(state = {}, action) {
    switch (action.type) {
        case ADMIN_MENU:
            return { ...state, adminMenu: action.payload };
        default:
            return state;
    }
}

function configSet(state = {}, action) {
    switch (action.type) {
        case CONFIG_SET:
            return { ...state, config: action.payload };
        default:
            return state;
    }
}

export default Reducers;
