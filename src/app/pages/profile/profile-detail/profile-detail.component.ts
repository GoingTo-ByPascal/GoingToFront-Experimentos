import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfile } from 'src/app/model/UserProfile';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';
import { ReviewdialogComponent } from '../../dialog/reviewdialog/reviewdialog.component';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  userData: UserProfile;
  userReviews: [any];
  showReviews = false;
  userAchievements: [any];
  constructor(
    private authenticationService: LoginService,
    private userService: UserService,
    private reviewService: ReviewService,
    private notificatonService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initilize();
  }
  initilize() {
    if (this.authenticationService.loggedIn()) {
      var userId = this.authenticationService.getUserId();
      this.userService.getUserInfo(userId).subscribe((response) => {
        this.userData = response;
      });
      this.userService.getUserReviews(userId).subscribe((response) => {
        this.userReviews = response;
      });
      this.userService.getUserAchievements(userId).subscribe((response) => {
        console.log(this.userAchievements);
        this.userAchievements = response;
      });
    }
  }
  showAllReviews() {
    this.showReviews = !this.showReviews;
  }
  deleteReview(reviewId, locatableId) {
    var userId = this.authenticationService.getUserId();
    this.reviewService.deleteReview(userId, locatableId, reviewId).subscribe(
      (response) => {
        this.notificatonService.OpenSnackbar('Review deleted');
        this.initilize();
      },
      (error) => {
        this.notificatonService.OpenSnackbar('Problem deleting the review');
      }
    );
  }
  editReview(review, locatableId) {
    this.dialog
      .open(ReviewdialogComponent, {
        data: {
          locatableId: locatableId,
          userId: this.authenticationService.getUserId(),
          review: review,
        },
        height: '400px',
        width: '600px',
      })
      .afterClosed()
      .subscribe(() => {
        this.userService
          .getUserReviews(this.authenticationService.getUserId())
          .subscribe((response) => {
            this.userReviews = response;
          });
      });
  }
}
