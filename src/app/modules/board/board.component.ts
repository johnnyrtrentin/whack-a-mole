import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  selectStartGameState,
  StartGame
} from 'src/app/core/store/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  readonly startGame$: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {
    this.startGame$ = this.store.select((state) => selectStartGameState(state));
  }

  startGame(): void {
    this.store.dispatch(StartGame());
  }
}
