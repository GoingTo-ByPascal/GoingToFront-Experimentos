import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CityService } from '../../services/city.service';
import { PlaceService } from '../../services/place.service';
import { Country } from '../../model/Country';
import { City } from '../../model/City';
import { Place } from '../../model/Place';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../model/Favorite';
import { any } from 'codelyzer/util/function';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogforsigninComponent } from '../dialog/dialogforsignin/dialogforsignin.component';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss'],
})
export class PlaceItemComponent implements OnInit {
  constructor(
    private countryService: CountryService,
    private cityService: CityService,
    private placeService: PlaceService,
    private favoriteService: FavoriteService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  countries: Country[] = [];
  cities: City[] = [];
  places: Place[] = [];
  id: any;
  favoriteByUserId: Favorite[] = [];
  favorite: Favorite[] = [];
  ngOnInit(): void {
    this.id = sessionStorage.getItem('userid');
    this.countryService.getAllCountries().subscribe((response: any) => {
      this.countries = response;
      this.favoriteService
        .getFavoriteByUserId(this.id)
        .subscribe((response: any) => {
          this.favorite = response;
          for (let i = 0; i < this.countries.length; i++) {
            for (let j = 0; j < this.favorite.length; j++) {
              if (this.countries[i].locatable.id == this.favorite[j].id) {
                this.countries[i].isFavorite = true;
              }
            }
          }
          this.shuffleItems(this.countries);
        });
    });
    this.cityService.getAllCities().subscribe((response: any) => {
      this.cities = response;
      this.favoriteService
        .getFavoriteByUserId(this.id)
        .subscribe((response: any) => {
          this.favorite = response;
          for (let i = 0; i < this.cities.length; i++) {
            for (let j = 0; j < this.favorite.length; j++) {
              if (this.cities[i].locatable.id == this.favorite[j].id) {
                this.cities[i].isFavorite = true;
              }
            }
          }
          this.shuffleItems(this.cities);
        });
    });
    this.placeService.getAllPlaces().subscribe((response: any) => {
      this.places = response;
      this.favoriteService
        .getFavoriteByUserId(this.id)
        .subscribe((response: any) => {
          this.favorite = response;
          for (let i = 0; i < this.places.length; i++) {
            for (let j = 0; j < this.favorite.length; j++) {
              if (this.places[i].locatable.id == this.favorite[j].id) {
                this.places[i].isFavorite = true;
              }
            }
          }
          this.shuffleItems(this.places);
        });
    });
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
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri, param]));
  }

  toAssingFavorite(locatableId: string) {
    if (sessionStorage.getItem('token')) {
      this.id = sessionStorage.getItem('userid');
      console.log(this.id);
      this.favoriteService
        .getFavoriteByUserId(this.id)
        .subscribe((response: any) => {
          this.favoriteByUserId = response;
          if (this.itsIn(locatableId) == false) {
            this.favoriteService
              .addFavorite(this.id, locatableId)
              .subscribe(() => {
                this.itsfavorite();
              });
          }
        });
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogforsigninComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  itsIn(locatableId): boolean {
    for (let i = 0; i < this.favoriteByUserId.length; i++) {
      if (this.favoriteByUserId[i].id == locatableId) {
        console.log('si es favorito');
        return true;
      }
    }
    return false;
  }
  itsfavorite() {
    this.favoriteService
      .getFavoriteByUserId(this.id)
      .subscribe((response: any) => {
        this.favoriteByUserId = response;
        console.log(this.favoriteByUserId);
      });
  }
}
