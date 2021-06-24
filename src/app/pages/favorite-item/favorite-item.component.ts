import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { LocatableService } from '../../services/locatable.service';
import { Favorite } from '../../model/Favorite';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { CountryService } from '../../services/country.service';
import { CityService } from '../../services/city.service';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent implements OnInit {
  constructor(
    private router: Router,
    private favoriteService: FavoriteService,
    private locatableService: LocatableService,
    private notificationService: NotificationService
  ) {}
  id: any;
  favorite: any = [];
  isActive = true;
  locatablesids: Number[] = [];
  ngOnInit(): void {
    this.initalize();
  }
  initalize() {
    this.id = sessionStorage.getItem('userid');
    this.favoriteService
      .getFavoriteByUserId(this.id)
      .subscribe((response: any) => {
        this.favorite = response;
      });
  }
  redirectTo(uri: string, param: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri, param]));
  }
  deleteFavorite(locatableid: string) {
    this.favoriteService
      .deleteFavorite(this.id, locatableid)
      .subscribe((response: any) => {
        this.favoriteService
          .getFavoriteByUserId(this.id)
          .subscribe((response: any) => {
            this.favoriteService
              .getFavoriteByUserId(this.id)
              .subscribe((response: any) => {
                this.favorite = response;
                this.notificationService.OpenSnackbar(
                  'Se ha eliminado de favoritos correctamente'
                );
              });
          });
      });
  }
}
