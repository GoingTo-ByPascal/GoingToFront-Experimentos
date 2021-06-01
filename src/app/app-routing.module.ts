import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { LocatableDetailComponent } from './pages/explore/locatable-detail/locatable-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/profile/login/login.component';
import { ProfileDetailComponent } from './pages/profile/profile-detail/profile-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'locate/:id', component: LocatableDetailComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: '**', redirectTo: '/home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
