import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialogforsignin',
  templateUrl: './dialogforsignin.component.html',
  styleUrls: ['./dialogforsignin.component.scss']
})
export class DialogforsigninComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogforsigninComponent>, private router: Router) {}

  ngOnInit(): void {
  }
  close() {
    console.log('cierracierra')
    this.dialogRef.close()
  }
  SignIn() {
    this.dialogRef.close()
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['login']));
  }
}
