import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  constructor() { }
  faCoffee = faUser;

  ngOnInit(): void {
  }

}
