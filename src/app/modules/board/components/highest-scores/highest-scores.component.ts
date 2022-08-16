import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-highest-scores',
  templateUrl: './highest-scores.component.html',
  styleUrls: ['./highest-scores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighestScoresComponent {
  @Input() highestScore!: number | null;

  constructor() {}
}
