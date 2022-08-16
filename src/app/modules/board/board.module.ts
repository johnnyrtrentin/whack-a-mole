import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { HighestScoresModule } from './components/highest-scores/highest-scores.module';
import { ScoreModule } from './components/score/score.module';
import { TimerModule } from './components/timer/timer.module';

@NgModule({
  declarations: [BoardComponent],
  exports: [BoardComponent],
  imports: [CommonModule, HighestScoresModule, ScoreModule, TimerModule],
})
export class BoardModule {}
