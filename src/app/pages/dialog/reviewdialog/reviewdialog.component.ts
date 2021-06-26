import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reviewdialog',
  templateUrl: './reviewdialog.component.html',
  styleUrls: ['./reviewdialog.component.scss'],
})
export class ReviewdialogComponent implements OnInit {
  constructor(
    private reviewService: ReviewService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data,
    private userService: UserService,
    public dialogRef: MatDialogRef<ReviewdialogComponent>
  ) {}
  reviewForm: FormGroup;
  testvalue: number = 0;

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      review: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      stars: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
    });

    if (this.data.review != null) {
      this.reviewForm.setValue({
        review: this.data.review.comment,
        stars: this.data.review.stars,
      });
    }
  }
  createReview() {
    if (this.reviewForm.valid) {
      let date: Date = new Date();
      var body = {
        comment: this.reviewForm.get('review').value,
        stars: this.reviewForm.get('stars').value,
      };
      this.userService.getUserInfo(this.data.id).subscribe((response: any) => {
        var id = response.id;
        console.log(id);
        this.reviewService
          .createReview(body, id, this.data.locatableId)
          .subscribe(
            (response) => {
              this.dialogRef.close();
              this.notificationService.OpenSnackbar('You posted a review');
            },
            (error) => {
              this.notificationService.OpenSnackbar(
                'Please write a correct review'
              );
            }
          );
      });
    } else {
      this.notificationService.OpenSnackbar('Please write a correct review');
    }
  }
  editReview() {
    var body = {
      comment: this.reviewForm.get('review').value,
      stars: this.reviewForm.get('stars').value,
    };

    this.userService.getUserInfo(this.data.userId).subscribe((response) => {
      var id = response.id;
      this.reviewService
        .updateReview(
          this.data.review.locatable.id,
          this.data.review.id,
          id,
          body
        )
        .subscribe(
          (response) => {
            this.dialogRef.close();
            this.notificationService.OpenSnackbar('You edited a review');
          },
          (error) => {
            this.notificationService.OpenSnackbar(
              'Please write a correct review'
            );
          }
        );
    });
  }
}
