import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Locatable } from 'src/app/model/Locatable';
import { Review } from 'src/app/model/Review';
import { FavoriteService } from 'src/app/services/favorite.service';
import { LocatableService } from 'src/app/services/locatable.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ReviewdialogComponent } from '../../dialog/reviewdialog/reviewdialog.component';

@Component({
  selector: 'app-locatable-detail',
  templateUrl: './locatable-detail.component.html',
  styleUrls: ['./locatable-detail.component.scss'],
})
export class LocatableDetailComponent implements OnInit {
  Subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private locatableService: LocatableService,
    private authService: LoginService,
    private notificationService: NotificationService,
    private favoriteService: FavoriteService,
    private dialog: MatDialog
  ) {}
  location: string;
  locatable: Locatable = new Locatable();
  promos: any[] = [];
  reviews: Review[] = [];
  isFavorite = false;
  activateReview: boolean = true;

  tips: any[] = [];
  ngOnInit(): void {
    this.location = this.route.snapshot.params.id;
    this.initialize();
  }
  initialize() {
    if (this.authService.loggedIn()) {
      this.activateReview = true;
    } else {
      this.activateReview = false;
    }

    this.Subscriptions.push(
      this.locatableService
        .getLocatableInfo(this.location)
        .subscribe((response: any) => {
          this.locatable = response;
          this.isFavoriteLocatable();
        })
    );
    this.getData();
  }

  getData() {
    this.Subscriptions.push(
      this.locatableService
        .getReviewsByLocatableId(this.location)
        .subscribe((response: any) => {
          this.reviews = response;
        }),
      this.locatableService
        .getTipsByLocatableId(this.location)
        .subscribe((response: any) => {
          this.tips = response;
        }),
      this.locatableService
        .getPromoByLocatableId(this.location)
        .subscribe((response: any) => {
          this.promos = response;
        })
    );
  }
  isFavoriteLocatable() {
    if (this.authService.loggedIn()) {
      var id = sessionStorage.getItem('userid');
      this.favoriteService
        .getFavoriteByUserId(id)
        .subscribe((response: any) => {
          var favoritos = response as Array<any>;
          var isFavorite = favoritos.find(
            (element) => element.id == this.locatable.id
          );
          if (isFavorite == undefined) {
            this.isFavorite = false;
          } else {
            this.isFavorite = true;
          }
        });
    } else {
    }
  }
  assignFavorite() {
    if (this.authService.loggedIn()) {
      var id = sessionStorage.getItem('userid');
      this.favoriteService
        .getFavoriteByUserId(id)
        .subscribe((response: any) => {
          if (this.isFavorite) {
            this.favoriteService
              .deleteFavorite(id, this.locatable.id)
              .subscribe((response) => {
                this.notificationService.OpenSnackbar(
                  'Se ha elimiado de favoritos correctamente'
                );
                this.isFavoriteLocatable();
              });
          } else {
            this.favoriteService
              .addFavorite(id, this.locatable.id)
              .subscribe((response) => {
                this.notificationService.OpenSnackbar(
                  'Se ha agregado a  favoritos correctamente'
                );
                this.isFavoriteLocatable();
              });
          }
        });
    } else {
      this.notificationService.OpenSnackbar(
        'Por favor ingrese a su cuenta para poder agregar favoritos'
      );
    }
  }
  createReview() {
    if (this.authService.loggedIn()) {
      let dialogRef = this.dialog.open(ReviewdialogComponent, {
        data: {
          locatableId: this.locatable.id,
          userId: this.authService.getUserId(),
        },
        height: '400px',
        width: '600px',
      });
    } else {
      this.notificationService.OpenSnackbar(
        'Por favor iniciar sesión para escribir una review'
      );
    }
  }
}
