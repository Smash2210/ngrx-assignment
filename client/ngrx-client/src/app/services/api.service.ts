import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post('/api/login', { email, password });
  }

  logout() {
    return of({ success: true });
  }

  listStudents() {
    return this.http.get('/api/list-students');
  }

}
