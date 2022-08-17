import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-moles',
  templateUrl: './moles.component.html',
  styleUrls: ['./moles.component.scss'],
})
export class MolesComponent implements OnInit, OnDestroy {
  @Output() moleClicked: EventEmitter<any>;

  private interval!: any;
  private readonly ACTIVE_MOLE_CLASS: string;

  constructor(private readonly renderer: Renderer2) {
    this.moleClicked = new EventEmitter();
    this.ACTIVE_MOLE_CLASS = 'mole__content--active';
  }

  @HostListener('click', ['$event.target'])
  moleClickHandler(e: HTMLElement) {
    const isMoleElm = e.hasAttribute('id');

    if (isMoleElm) {
      const moleIsVisible = e.className.includes(this.ACTIVE_MOLE_CLASS);
      this.moleClicked.emit(moleIsVisible);
      this.renderer.removeClass(e, this.ACTIVE_MOLE_CLASS);
    }
  }

  ngOnInit(): void {
    this.showAndHideMoles();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  showAndHideMoles(): void {
    const MOLE_ID_QUERY = '[id^="mole-"]';

    document.querySelectorAll(MOLE_ID_QUERY).forEach((mole) => {
      this.interval = setInterval(() => {
        if (mole.className.includes(this.ACTIVE_MOLE_CLASS)) {
          this.renderer.removeClass(mole, this.ACTIVE_MOLE_CLASS);
        } else {
          this.renderer.addClass(mole, this.ACTIVE_MOLE_CLASS);
        }
      }, Number(this.randonNumberGenerator() + '000'));
    });
  }

  randonNumberGenerator(): number {
    return Number((Math.random() * (3 - 1) + 1).toFixed(0));
  }
}
