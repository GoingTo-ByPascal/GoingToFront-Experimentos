import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faMailBulk,
  faUnlock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  token: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  @Output() register: EventEmitter<boolean> = new EventEmitter();
  @Output() isLogged: EventEmitter<boolean> = new EventEmitter();
  loginForm: FormGroup;
  faMail = faMailBulk;
  isLoading = false;
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
  onLogin() {
    this.isLoading = true;
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.loginService.authenticate(email, password).subscribe(
      (response: any) => {
        this.notificationService.OpenSnackbar(
          'Ha iniciado sesión correctamente'
        );
        this.isLogged.emit(true);
        this.token = response;
        if (this.token) {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['home']));
          this.isLoading = false;
          window.location.reload();
        }
      },
      (error) => {
        this.notificationService.OpenSnackbar(
          'Las credenciales ingresadas son incorrectas'
        );
        this.isLoading = false;
      }
    );
  }
  redirectTo(uri: string) {}
}
