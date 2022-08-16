import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighestScoresComponent } from './highest-scores.component';

@NgModule({
  declarations: [HighestScoresComponent],
  exports: [HighestScoresComponent],
  imports: [CommonModule],
})
export class HighestScoresModule {}
