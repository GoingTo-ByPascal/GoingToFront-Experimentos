import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {CityService} from "../../services/city.service";
import {PlaceService} from "../../services/place.service";
import {Country} from "../../model/Country";
import {City} from "../../model/City";
import {Place} from "../../model/Place";
import {FavoriteService} from "../../services/favorite.service";
import {Favorite} from "../../model/Favorite";
import {any} from "codelyzer/util/function";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogforsigninComponent} from "../dialog/dialogforsignin/dialogforsignin.component";

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss']
})
export class PlaceItemComponent implements OnInit {

  constructor(private countryService: CountryService, private cityService: CityService, private placeService: PlaceService, private favoriteService: FavoriteService, private router: Router, public dialog: MatDialog) {
  }

  countries: Country[] = []
  cities: City[] = []
  places: Place[] = []
  favorite: Favorite[] = []

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((response: any) => {
      this.countries = response
      console.log(this.countries)
      this.shuffleItems(this.countries)
    })
    this.cityService.getAllCities().subscribe((response: any) => {
      this.cities = response
      console.log(this.cities)
      this.shuffleItems(this.cities)
      console.log(this.cities)
    })
    this.placeService.getAllPlaces().subscribe((response: any) => {
      this.places = response
      this.shuffleItems(this.places)
    })
    this.favoriteService.getFavoriteByUserId('1').subscribe((response: any) => {
      this.favorite = response
    })
  }

  shuffleItems(item: any[]) {
    let counter = item.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      [item[counter], item[index]] = [item[index], item[counter]];
    }
  }

  redirectTo(uri: string, param: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri, param]));
  }

  toAssingFavorite(locatableId: string) {
    if (sessionStorage.getItem('token')) {
      this.favoriteService.addFavorite(sessionStorage.getItem('id'), locatableId).subscribe(() => {
      })
    } else {
      this.openDialog()
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogforsigninComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}

