import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() login: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  registerForm:FormGroup;
  ngOnInit(): void {
    this.initialize();
  }
  initialize(){
    this.registerForm = new FormGroup({
      user: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  ActivateLogin($event){
    event.stopPropagation();
    this.login.emit()
  }

}
