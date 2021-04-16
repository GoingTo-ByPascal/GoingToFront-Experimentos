import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../model/City';
import { Country } from '../model/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }
  URI: string = `${environment.HOST_URL}/countries`

  getAllCountries(){
    return this.http.get<Country[]>(this.URI);
  }

  getCitiesByCountry(countryId:string){
    return this.http.get<City[]>(`${this.URI}/${countryId}/cities`);
  }
}
