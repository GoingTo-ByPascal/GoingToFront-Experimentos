import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faMailBulk,
  faUnlock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  @Output() register: EventEmitter<boolean> = new EventEmitter();
  loginForm: FormGroup;
  faMail = faMailBulk;
  faPassword = faUnlock;

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ActivateRegister($event) {
    event.stopPropagation();
    this.register.emit();
  }
}
