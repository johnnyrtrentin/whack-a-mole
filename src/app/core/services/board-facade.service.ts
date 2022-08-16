import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  selectHighScoreState,
  selectScoreState,
  selectStartGameState,
  selectStarTimerState,
  StartGame,
  StopGame,
  UpdateBestScore,
  UpdateScore
} from '../store/board';

@Injectable({
  providedIn: 'root',
})
export class BoardFacadeService {
  constructor(private readonly store: Store<AppState>) {}

  getGameState(): Observable<boolean> {
    return this.store.select((state) => selectStartGameState(state));
  }

  getTimerState(): Observable<boolean> {
    return this.store.select((state) => selectStarTimerState(state));
  }

  getScoreState(): Observable<number> {
    return this.store.select((state) => selectScoreState(state));
  }

  getHighScoreState(): Observable<number> {
    return this.store.select((state) => selectHighScoreState(state));
  }

  startGame(): void {
    this.store.dispatch(StartGame());
  }

  stopGame(): void {
    this.store.dispatch(StopGame());
  }

  updateScore(value: number): void {
    this.store.dispatch(UpdateScore({ value }));
  }

  updateBestScore(newScore: number): void {
    this.store.dispatch(UpdateBestScore({ newScore }));
  }
}
