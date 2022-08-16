import { createSelector } from '@ngrx/store';
import { GameState } from './interfaces';

export interface AppState {
  board: GameState;
}

export const selectStartGame = (state: AppState) => state.board;
export const selectStartGameState = createSelector(
  selectStartGame,
  (state: GameState) => state.startGame
);
