import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        const isLoggedIn: string | null = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'true') {
            localStorage.clear();
            // this.router.navigate(['/login']);
            return false;
        }
        this.router.navigate(['/home']);
        return true;
    }

}
