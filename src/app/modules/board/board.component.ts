import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { BoardFacadeService } from 'src/app/core/services/board-facade.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnDestroy {
  readonly startGame$: Observable<boolean>;
  readonly startTimer$: Observable<boolean>;
  readonly userScore$: Observable<number>;
  readonly userBestScore$: Observable<number>;

  public timer: number;

  private clearInterval!: any;
  private readonly observable$: Subject<void>;

  constructor(private readonly gameStoreService: BoardFacadeService) {
    this.startGame$ = this.gameStoreService.getGameState();
    this.startTimer$ = this.gameStoreService.getTimerState();
    this.userScore$ = this.gameStoreService.getScoreState();
    this.userBestScore$ = this.gameStoreService.getHighScoreState();

    this.timer = 30;
    this.observable$ = new Subject();
  }

  ngOnInit(): void {
    this.decreaseTimerHandler();
  }

  ngOnDestroy(): void {
    this.observable$.next();
    this.observable$.complete();
  }

  startGame(): void {
    this.gameStoreService.startGame();
  }

  molePointsHandler(visible: boolean) {
    this.gameStoreService.updateScore(visible ? 1 : -1);
  }

  decreaseTimerHandler(): void {
    const ONE_SECOND_DELAY = 1_000;
    const FINISH_TIME = 0;

    this.startTimer$
      .pipe(takeUntil(this.observable$))
      .subscribe((startTime) => {
        if (startTime) {
          this.clearInterval = setInterval(() => {
            if (this.timer !== FINISH_TIME) {
              this.timer--;
            } else if (this.timer === FINISH_TIME) {
              this.timer = 30;
              this.finishGame();
              clearInterval(this.clearInterval);
            }
          }, ONE_SECOND_DELAY);
        }
      });
  }

  finishGame(): void {
    this.gameStoreService.stopGame();
    this.gameStoreService
      .getScoreState()
      .pipe(withLatestFrom(this.gameStoreService.getHighScoreState()))
      .subscribe(([score, highestScore]) => {
        if (score) {
          const newScore = score;

          if (newScore > highestScore) {
            this.gameStoreService.updateBestScore(newScore);
          }
        }
      });
    this.gameStoreService.resetScore();
  }
}
