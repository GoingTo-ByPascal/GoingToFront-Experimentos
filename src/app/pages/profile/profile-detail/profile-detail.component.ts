import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/model/UserProfile';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  userData: UserProfile;
  userReviews: [any];
  userAchievements: [any];
  constructor(
    private authenticationService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
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
}
