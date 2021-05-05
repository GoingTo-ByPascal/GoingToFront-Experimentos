import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {
  background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
  constructor() {}
  @Input() image: string;
  @Input() title: String = '';
  ngOnInit(): void {}
  myStyle(): object {
    return { 'background-image': `${this.background + ',url(' + this.image}` };
  }
}
