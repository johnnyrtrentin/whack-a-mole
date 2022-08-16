import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BoardFacadeService } from 'src/app/core/services/board-facade.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  readonly startGame$: Observable<boolean>;
  readonly startTimer$: Observable<boolean>;
  readonly userScore$: Observable<number>;
  readonly userBestScore$: Observable<number>;

  public timer: number;

  private clearInterval!: any;

  constructor(private readonly gameStoreService: BoardFacadeService) {
    this.startGame$ = this.gameStoreService.getGameState();
    this.startTimer$ = this.gameStoreService.getTimerState();
    this.userScore$ = this.gameStoreService.getScoreState();
    this.userBestScore$ = this.gameStoreService.getHighScoreState();

    this.timer = 30;
  }

  ngOnInit(): void {
    this.decreaseTimerHandler();
  }

  startGame(): void {
    this.gameStoreService.startGame();
  }

  decreaseTimerHandler(): void {
    const ONE_SECOND_DELAY = 1_000;
    const FINISH_TIME = 0;

    this.startTimer$.subscribe((startTime) => {
      if (startTime) {
        this.clearInterval = setInterval(() => {
          if (this.timer !== FINISH_TIME) {
            this.timer--;
          } else if (this.timer === FINISH_TIME) {
            this.timer = 30;
            this.gameStoreService.stopGame();
            clearInterval(this.clearInterval);
          }
        }, ONE_SECOND_DELAY);
      }
    });
  }
}
