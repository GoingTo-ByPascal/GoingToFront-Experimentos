import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './pages/appbar/appbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SearchComponent } from './pages/search/search.component';
import { RightDrawerComponent } from './pages/right-drawer/right-drawer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { PlaceItemComponent } from './pages/place-item/place-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    HomeComponent,
    ExploreComponent,
    SearchComponent,
    PlaceItemComponent,
    RightDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
