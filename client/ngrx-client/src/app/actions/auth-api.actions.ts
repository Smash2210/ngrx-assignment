import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';
import { Login, LoginStatus, ListDataInterface } from './../models/login.model';

export const SIGN_IN = "[LOGIN] SIGN_IN";
export const SIGN_OUT = "[LOGIN] SIGN_OUT";
export const SIGN_IN_SUCCESS = "[LOGIN] SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "[LOGIN] SIGN_IN_FAILURE";
export const LIST_DATA = "[USER_DATA] LIST_DATA";
export const LIST_DATA_SUCCESS = "[USER_DATA] LIST_DATA_SUCCESS";
export const LIST_DATA_FAILURE = "[USER_DATA] LIST_DATA_FAILURE";

export class SignIn implements Action {
    readonly type = SIGN_IN;

    constructor(public payload: Login) {
    }
}

export class SignOut implements Action {
    readonly type = SIGN_OUT;
}

export class SignInSuccess implements Action {
    readonly type = SIGN_IN_SUCCESS;
    constructor(public payload: LoginStatus) { }
}

export class SignInFailure implements Action {
    readonly type = SIGN_IN_FAILURE;
    constructor(public payload: LoginStatus) { }
}

export class ListData implements Action {
    readonly type = LIST_DATA;

    constructor() {
    }
}

export class ListDataSuccess implements Action {
    readonly type = LIST_DATA_SUCCESS;

    constructor(public payload: ListDataInterface[]) {
    }
}

export class ListDataFailure implements Action {
    readonly type = LIST_DATA_FAILURE;

    constructor() {
    }
}

export type Actions = SignIn | SignOut | SignInSuccess | SignInFailure | ListData | ListDataSuccess | ListDataFailure;