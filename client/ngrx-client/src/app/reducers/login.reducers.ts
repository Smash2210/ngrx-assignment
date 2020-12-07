import { Action } from '@ngrx/store';
import * as AuthAPIActions from '../actions/auth-api.actions';
import { Login, AppState } from '../models/login.model';

const initialState: AppState = {
    login: {
        email: null,
        password: null
    },
    loginData: {
        isLoggedIn: null,
        message: {
            stack: null,
            message: "No login found!"
        },
        token: null
    },
    userData: []
};

export function loginReducer(state: AppState = initialState, action: AuthAPIActions.Actions) {

    switch (action.type) {
        case AuthAPIActions.SIGN_IN:
            return { ...state, ...{ login: action.payload } };
        case AuthAPIActions.SIGN_OUT:
            return state;
        case AuthAPIActions.SIGN_IN_SUCCESS:
            return { ...state, ...{ loginData: action.payload } }
        case AuthAPIActions.SIGN_IN_FAILURE:
            return { ...state, ...{ loginData: action.payload } };
        case AuthAPIActions.LIST_DATA_SUCCESS:
            return { ...state, ... { userData: action.payload } };
        default:
            return state;
    }
}