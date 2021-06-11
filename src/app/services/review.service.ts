import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  URI: string = `${environment.HOST_URL}/users`;

  constructor(private http: HttpClient) {}

  createReview(body, userProfileId, locatableId) {
    return this.http.post(
      `${this.URI}/${userProfileId}/locatables/${locatableId}/reviews`,
      body
    );
  }
  deleteReview(userProfileId, locatableId, reviewId) {
    return this.http.delete(
      `${this.URI}/${userProfileId}/locatables/${locatableId}/reviews/${reviewId}`
    );
  }
  updateReview(locatableId, reviewId, userProfileId, body) {
    return this.http.put(
      `${this.URI}/${userProfileId}/locatables/${locatableId}/reviews/${reviewId}`,
      body
    );
  }
}
