import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as ApiActions from '../actions/auth-api.actions';
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
export class ListDataEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApiActions.LIST_DATA),
            exhaustMap(action => {
                return this.authService.listStudents().pipe(
                    map(apiResponse => {
                        const result: any = apiResponse;
                        console.log(result);
                        if (!result || result.length === 0) {
                            throw new Error(result.message)
                        }
                        return new ApiActions.ListDataSuccess(result);
                    }),
                    catchError(error => of(new ApiActions.ListDataFailure())))
            })
        )
    );

    constructor(
        private actions$: Actions,
        private authService: ApiService
    ) { }
}