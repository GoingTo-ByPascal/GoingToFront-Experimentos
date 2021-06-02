import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ActiveScreen: boolean[] = [true, false, false];
  userId: string;
  userName: string;
  constructor(
    private authenticationService: LoginService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.loggedIn()) {
      this.ActivateProfile();
      this.userId = this.authenticationService.getUserId();
      this.userService.getUserInfo(this.userId).subscribe((response) => {
        this.userName = response.name + ' ' + response.surname;
      });
    } else {
      this.ActivateLogin();
    }
  }
  ActivateProfile() {
    this.ActiveScreen.fill(false);
    this.ActiveScreen[2] = true;
  }

  ActivateRegister() {
    this.ActiveScreen.fill(false);
    this.ActiveScreen[1] = true;
  }
  ActivateLogin() {
    this.ActiveScreen.fill(false);
    this.ActiveScreen[0] = true;
  }
  logout(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/home']);
    this.ActivateLogin();
  }
  goProfileDetail() {
    this.router.navigate(['profile', this.userId]);
  }
}
