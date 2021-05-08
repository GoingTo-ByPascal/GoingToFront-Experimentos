import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URI: string = `${environment.HOST_URL}/users/authenticate`
  constructor(private http: HttpClient, private router: Router) { }
  authenticate(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.URI}`,{email, password}).pipe(map(response => {
      sessionStorage.setItem('userid', response.id);
      const tokenSTR = response.token;
      sessionStorage.setItem('token', tokenSTR);
      return response;
    }))

  }
  loggedIn(): boolean {
      if (sessionStorage.getItem('token')) {
        return true
      }else {
        return false
      }
  }


}
