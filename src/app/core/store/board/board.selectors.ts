import { createSelector } from '@ngrx/store';
import { GameState } from './interfaces';

export interface AppState {
  board: GameState;
}

export const selectGameState = (state: AppState) => state.board;

export const selectStartGameState = createSelector(
  selectGameState,
  (state: GameState) => state.startGame
);

export const selectStarTimerState = createSelector(
  selectGameState,
  (state: GameState) => state.startTimer
);

export const selectScoreState = createSelector(
  selectGameState,
  (state: GameState) => state.score
);

export const selectHighScoreState = createSelector(
  selectGameState,
  (state: GameState) => state.bestScore
);
