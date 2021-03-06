import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private testing: LoginService) {}

  ngOnInit(): void {}
  Redirect(url: string) {
    window.open(url, '_blank');
  }
}
