import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Favorite} from "../model/Favorite";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  URI: string = `${environment.HOST_URL}/users`
  constructor(private htpp: HttpClient) { }

  getFavoriteByUserId(userId) {
   return this.htpp.get<Favorite[]>(`${this.URI}/${userId}/locatables`)
  }
  addFavorite(userId, locatableId){
    return this.htpp.post(`${this.URI}/${userId}/locatables/${locatableId}`,  '')
  }
}
