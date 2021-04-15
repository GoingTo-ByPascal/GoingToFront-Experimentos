import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Output() register: EventEmitter<boolean> = new EventEmitter();
  loginForm:FormGroup;
  ngOnInit(): void {
    this.initialize();
    
  }
  initialize(){
    this.loginForm = new FormGroup({
      user: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  ActivateRegister($event){
    event.stopPropagation()
    this.register.emit();
  }
  

}
