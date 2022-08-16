import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  currentScore: number;

  constructor() {
    this.currentScore = 0;
  }

  ngOnInit(): void {}
}
