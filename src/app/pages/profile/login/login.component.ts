import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faMailBulk, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import {LoginService} from "../../../services/login.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: any
  email: string
  password: string
  constructor(private loginService: LoginService, private router: Router) { }

  @Output() register: EventEmitter<boolean> = new EventEmitter();
  loginForm:FormGroup;
  faMail = faMailBulk;
  faPassword = faUnlock

  ngOnInit(): void {
    this.initialize();

  }
  initialize(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
  ActivateRegister($event){
    event.stopPropagation()
    this.register.emit();
  }
  onLogin(){
    this.email = this.loginForm.value.user
    this.password = this.loginForm.value.password
    this.loginService.authenticate(this.email,this.password).subscribe((response: any) => {
    this.token = response
      if (this.token){
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(['home']));
      }
    })
  }
  redirectTo(uri:string){

  }


}
