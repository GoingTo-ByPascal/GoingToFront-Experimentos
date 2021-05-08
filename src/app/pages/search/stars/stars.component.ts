import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Input() starsquantity: number;
  array: any[] = [];
  constructor() {}
  star = faStar;
  ngOnInit(): void {
    this.starsquantity = Math.round(this.starsquantity);
    this.array = Array(this.starsquantity).fill('test');
  }
}
