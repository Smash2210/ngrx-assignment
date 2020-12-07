import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as AuthApiActions from '../actions/auth-api.actions';
import { ApiService } from '../services/api.service';

interface LoginResponse {
    success: boolean,
    message: string | null,
    data: {
        isLoggedIn: boolean,
        token: string
    } | null
}

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthApiActions.SIGN_IN),
            exhaustMap(action => {
                const result: AuthApiActions.SignIn = action;
                const { payload } = result;
                return this.authService.login(payload.email, payload.password).pipe(
                    map(apiResponse => {
                        const result: LoginResponse | any = apiResponse;
                        if (!result.success) {
                            throw new Error(result.message)
                        }
                        return new AuthApiActions.SignInSuccess({ isLoggedIn: true, token: result.data.token, message: null });
                    }),
                    catchError(error => of(new AuthApiActions.SignInFailure({ isLoggedIn: false, token: null, message: error }))))
            })
        )
    );

    constructor(
        private actions$: Actions,
        private authService: ApiService
    ) { }
}