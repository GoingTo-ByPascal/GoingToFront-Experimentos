import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faBirthdayCake,
  faFlag,
  faFont,
  faMailBulk,
  faSmile,
  faTransgender,
  faUnlock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { CountryService } from 'src/app/services/country.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() login: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private countryService: CountryService,
    private notificationService: NotificationService,
    private registerService: RegisterService
  ) {}
  registerForm: FormGroup;
  faMail = faMailBulk;
  faName = faFont;
  faLastname = faSmile;
  faPassword = faUnlock;
  faBirth = faBirthdayCake;
  faGender = faTransgender;
  faCountry = faFlag;
  countries = [];
  isLoading = false;

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.getAllCountries();
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
  }
  ActivateLogin($event) {
    event.stopPropagation();
    this.login.emit();
  }
  getAllCountries() {
    this.countryService.getAllCountries().subscribe((response) => {
      this.countries = response;
    });
  }
  register() {
    if (this.registerForm.valid) {
      this.isLoading = true;

      var firstbody = {
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,
      };
      var secondbody = {
        userId: '',
        name: this.registerForm.get('name').value,
        surname: this.registerForm.get('lastname').value,
        birthDate: this.registerForm.get('birthdate').value,
        gender: this.registerForm.get('gender').value,
        countryId: this.registerForm.get('country').value.id,
      };

      this.registerService
        .firstRegister(firstbody)
        .subscribe((response: any) => {
          secondbody.userId = response.id;
          this.registerService.secondRegister(secondbody).subscribe(
            (response: any) => {
              this.notificationService.OpenSnackbar(
                'Se ha registrado correctamente'
              );
              this.registerForm.reset();
              this.login.emit();
              this.isLoading = false;
            },
            (error) => {
              this.notificationService.OpenSnackbar(
                'Ha ocurrido un error en el registro'
              );
              this.isLoading = false;
            }
          );
        });
    } else {
      this.notificationService.OpenSnackbar(
        'Por favor rellene el formulario correctamente'
      );
    }
  }
}
