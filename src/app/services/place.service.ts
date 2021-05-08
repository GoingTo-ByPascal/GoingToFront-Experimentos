import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Place} from "../model/Place";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  URI: string = `${environment.HOST_URL}/places`
  constructor(private http: HttpClient) { }
  getAllPlaces() {
    return this.http.get<Place[]>(this.URI);
  }

}
