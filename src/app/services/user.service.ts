import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URI: string = `${environment.HOST_URL}/UserProfiles`;
  URIAchievements: string = `${environment.HOST_URL}/users`;
  constructor(private http: HttpClient) {}

  getUserInfo(userId) {
    return this.http.get<any>(`${this.URI}/${userId}`);
  }
  getUserReviews(userId) {
    return this.http.get<any>(`${this.URI}/${userId}/reviews`);
  }
  getUserAchievements(userId) {
    return this.http.get<any>(`${this.URIAchievements}/${userId}/achievements`);
  }
}
