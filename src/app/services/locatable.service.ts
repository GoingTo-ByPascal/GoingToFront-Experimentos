import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../model/Review';

@Injectable({
  providedIn: 'root'
})
export class LocatableService {


  constructor(private http:HttpClient) { }
  URI: string = `${environment.HOST_URL}/locatables`

  getReviewsByLocatableId(locatableId:string){
    return this.http.get<Review[]>(`${this.URI}/${locatableId}/reviews`)
  }
  getTipsByLocatableId(locatableId:string){
    return this.http.get<any[]>(`${this.URI}/${locatableId}/tips`)
  }
  getPromoByLocatableId(locatableId:string){
    return this.http.get<any[]>(`${environment.HOST_URL}/locatable/${locatableId}/promos`)
  }
  getLocatableInfo(locatableId:string){
    return this.http.get<any[]>(`${this.URI}/${locatableId}`)
  }
}
