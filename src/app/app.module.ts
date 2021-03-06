import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

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
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/profile/login/login.component';
import { RegisterComponent } from './pages/profile/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { StarsComponent } from './pages/search/stars/stars.component';
import { LocatableDetailComponent } from './pages/explore/locatable-detail/locatable-detail.component';
import { SubheaderComponent } from './pages/subheader/subheader.component';
import { DialogforsigninComponent } from './pages/dialog/dialogforsignin/dialogforsignin.component';
import { RouterModule } from '@angular/router';
import { ProfileDetailComponent } from './pages/profile/profile-detail/profile-detail.component';
import { ReviewdialogComponent } from './pages/dialog/reviewdialog/reviewdialog.component';
import { LeftSideNavComponent } from './pages/shared/left-side-nav/left-side-nav.component';
import { SingleAchievementComponent } from './pages/profile/profile-detail/single-achievement/single-achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    HomeComponent,
    SingleAchievementComponent,
    ExploreComponent,
    ProfileDetailComponent,
    SearchComponent,
    PlaceItemComponent,
    RightDrawerComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    StarsComponent,
    LocatableDetailComponent,
    SubheaderComponent,
    DialogforsigninComponent,
    ReviewdialogComponent,
    LeftSideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    RouterTestingModule,
  ],
  entryComponents: [DialogforsigninComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
