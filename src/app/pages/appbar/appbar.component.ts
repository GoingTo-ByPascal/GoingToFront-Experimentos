import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  constructor(private router: Router, public authenticationService: LoginService) { }
  faCoffee = faUser;
  isLogged: boolean = false


  ngOnInit(): void {
  }
  logout(): void {
    sessionStorage.clear()
    this.router.navigate(['/login']).then(() => {
    });
  }





}
