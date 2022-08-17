import { createReducer, on } from '@ngrx/store';
import {
  ResetScore,
  ResetTimer,
  StartGame,
  StartTimer,
  StopGame,
  UpdateBestScore,
  UpdateScore
} from './board.actions';
import { GameState } from './interfaces';

export const GameInitialState: GameState = {
  startGame: false,
  startTimer: false,
  bestScore: 0,
  score: 0,
};

export const GameReducer = createReducer(
  GameInitialState,
  on(StartGame, (state) => ({ ...state, startGame: true, startTimer: true })),
  on(StopGame, (state) => ({ ...state, startGame: false, startTimer: false })),
  on(StartTimer, (state) => ({ ...state, startTimer: true })),
  on(ResetTimer, (state) => ({ ...state, startTimer: false })),
  on(ResetScore, (state) => ({ ...state, score: 0 })),
  on(UpdateScore, (state, { value }) => ({
    ...state,
    score: state.score + value,
  })),
  on(UpdateBestScore, (state, { newScore }) => ({
    ...state,
    bestScore: newScore,
  }))
);
