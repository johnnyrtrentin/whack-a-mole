import { createAction, props } from '@ngrx/store';

export const StartGame = createAction('[Board] Start Game');
export const StopGame = createAction('[Board] Stop Game');

export const StartTimer = createAction('[Board] Start Timer');
export const ResetTimer = createAction('[Board] Reset Timer');

export const ResetScore = createAction('[Board] Reset Score');

export const UpdateScore = createAction(
  '[Board] Update Score',
  props<{ value: number }>()
);

export const UpdateBestScore = createAction(
  '[Board] Update Highest Score',
  props<{ newScore: number }>()
);
