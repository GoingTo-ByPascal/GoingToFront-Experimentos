import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faFont,
  faMailBulk,
  faUnlock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() login: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
  registerForm: FormGroup;
  faMail = faMailBulk;
  faName = faFont;
  faPassword = faUnlock;
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
    });
  }
  ActivateLogin($event) {
    event.stopPropagation();
    this.login.emit();
  }
}
