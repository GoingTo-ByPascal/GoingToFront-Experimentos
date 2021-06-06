import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { ReviewService } from 'src/app/services/review.service';

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
    public dialogRef: MatDialogRef<ReviewdialogComponent>
  ) {}
  reviewForm: FormGroup;
  testvalue: number = 0;
  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      review: new FormControl('', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      stars: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
    });
  }
  createReview() {
    if (this.reviewForm.valid) {
      let date: Date = new Date();

      var body = {
        comment: this.reviewForm.get('review').value,
        stars: this.reviewForm.get('stars').value,
        reviewedAt: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      };
      this.reviewService
        .createReview(body, this.data.userId, this.data.locatableId)
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
    } else {
      this.notificationService.OpenSnackbar('Please write a correct review');
    }
  }
}
