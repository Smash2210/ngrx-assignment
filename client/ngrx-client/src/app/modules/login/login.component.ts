import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Login, AppState } from "../../models/login.model";
import * as AuthAPIActions from "../../actions/auth-api.actions";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    const isLoggedIn: string | null = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);
    if(isLoggedIn === 'true'){
      router.navigate(['../home'], {relativeTo: route} );
    }
  }

  email: string;
  password: string;

  ngOnInit(): void {
    this.store.subscribe(res => {
      const { loginData } = res[0];
      if (loginData.isLoggedIn) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', loginData.token);
        this.router.navigate(['../home'], { relativeTo: this.route });
      } else if (!loginData.isLoggedIn && typeof loginData.isLoggedIn === 'boolean') {
        alert(loginData.message);
      }
    });
  }

  login(): void {
    const loginPayload: Login = {
      email: this.email,
      password: this.password
    }
    this.store.dispatch(new AuthAPIActions.SignIn(loginPayload));
  }

}
