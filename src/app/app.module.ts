import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { GameReducer } from './core/store/board';
import { BoardModule } from './modules/board/board.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BoardModule,
    StoreModule.forRoot({ board: GameReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
