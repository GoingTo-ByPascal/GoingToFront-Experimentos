import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { City } from 'src/app/model/City';
import { Country } from 'src/app/model/Country';
import { Place } from 'src/app/model/Place';
import { Review } from 'src/app/model/Review';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';
import { LocatableService } from 'src/app/services/locatable.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  Subscriptions: Array<Subscription> = []
  constructor(private countryService:CountryService,private cityService:CityService,private locatableService:LocatableService) { }
  countries: Country[] = []
  cities: City[] = []
  places: Place[] = []
  reviews: Review[] = []
  tips: any[] = []
  ngOnInit(): void {
    this.initialize();
  }

  initialize(){ 
    this.Subscriptions.push(this.countryService.getAllCountries().subscribe((response:any)=>{
      this.countries = response;
    }))
  }
  getCities(countryId:string){
    this.Subscriptions.push(this.countryService.getCitiesByCountry(countryId).subscribe((response:any)=>{
      this.cities = response;
      this.places = []
    }))
  }
  getPlaces(cityId:string){
    this.Subscriptions.push(this.cityService.getPlacesByCity(cityId).subscribe((response:any)=>{
      this.places = response;
    }))
  }
  getData(locatableId:string){
    this.Subscriptions.push(this.locatableService.getReviewsByLocatableId(locatableId).subscribe((response:any)=>{
      this.reviews = response
    }),
    this.locatableService.getTipsByLocatableId(locatableId).subscribe((response:any)=>{
      this.tips = response
    }))
  }
  
}
