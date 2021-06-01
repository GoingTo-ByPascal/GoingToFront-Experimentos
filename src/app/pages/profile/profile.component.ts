import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ActiveScreen: boolean[] = [true, false, false];
  userId: string;
  constructor(
    private authenticationService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.loggedIn()) {
      this.ActivateProfile();
      this.userId = this.authenticationService.getUserId();
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
    console.log('test');
    this.router.navigate(['profile', this.userId]);
  }
}
