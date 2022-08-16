import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScoreComponent } from './score.component';

@NgModule({
  declarations: [ScoreComponent],
  exports: [ScoreComponent],
  imports: [CommonModule],
})
export class ScoreModule {}
