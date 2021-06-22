import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  URI1: string = `${environment.HOST_URL}/UserProfiles`;
  URI2: string = `${environment.HOST_URL}/Users`;
  constructor(private http: HttpClient) {}
  firstRegister(body) {
    return this.http.post(this.URI2, body);
  }
  secondRegister(body) {
    return this.http.post(this.URI1, body);
  }
}
