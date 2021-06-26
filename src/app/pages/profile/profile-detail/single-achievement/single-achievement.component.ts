import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Achievement } from 'src/app/model/Achievement';

@Component({
  selector: 'app-single-achievement',
  templateUrl: './single-achievement.component.html',
  styleUrls: ['./single-achievement.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SingleAchievementComponent implements OnInit {
  @Input() achievement: Achievement;
  constructor() {}

  ngOnInit(): void {}
}
