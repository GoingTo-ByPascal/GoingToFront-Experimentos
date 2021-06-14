import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss'],
})
export class LeftSideNavComponent implements OnInit {
  constructor(private router: Router, private authService: LoginService) {}

  @Output() closeSideNav: EventEmitter<boolean> = new EventEmitter(false);
  items = [
    { name: 'Home', icon: 'home', redirect: 'home' },
    { name: 'Search', icon: 'search', redirect: 'search' },
    { name: 'Explore', icon: 'travel_explore', redirect: 'explore' },
  ];
  logIn = false;
  profileId = '';
  ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.logIn = true;
      this.profileId = this.authService.getUserId();
    }
  }

  redirectTo(uri: string, param: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri, param]));
    this.afterRedirect();
  }

  afterRedirect() {
    this.closeSideNav.emit();
  }

  cerarSesion() {
    this.authService.logOut();
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
    this.afterRedirect();
  }
}
