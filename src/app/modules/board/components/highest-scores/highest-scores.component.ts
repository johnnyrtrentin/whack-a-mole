import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highest-scores',
  templateUrl: './highest-scores.component.html',
  styleUrls: ['./highest-scores.component.scss'],
})
export class HighestScoresComponent implements OnInit {
  highestScore: number;
  
  constructor() {
    this.highestScore = 0;
  }

  ngOnInit(): void {}
}
