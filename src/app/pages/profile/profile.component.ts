import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ActiveScreen: boolean[] = [true, false];
  constructor() {}

  ngOnInit(): void {}

  ActivateRegister() {
    this.ActiveScreen.fill(false);
    this.ActiveScreen[1] = true;
  }
  ActivateLogin() {
    this.ActiveScreen.fill(false);
    this.ActiveScreen[0] = true;
  }
}
