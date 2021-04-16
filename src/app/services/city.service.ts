import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../model/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  URI: string = `${environment.HOST_URL}/cities`
  constructor(private http:HttpClient) { }

  getPlacesByCity(cityId:string){
    return this.http.get<City[]>(`${this.URI}/${cityId}/places`);
  }
}
