import { Component, HostBinding, Input } from '@angular/core';

let ID = 0;

@Component({
  selector: ':not(html)[uiseek][tooltip]',
  template: `
    <span class="uiseek-tooltip" [ngClass]="tooltipPosition">
      <span [attr.id]="ariaDescribedby" aria-hidden="true">{{ text }}</span>
    </span>
    <ng-content></ng-content>
  `,
})
export class TooltipComponent {
  @Input('aria-describedby')
  @HostBinding('attr.aria-describedby')
  ariaDescribedby: string = `tooltipId${ID++}`;

  @Input()
  text: string = 'Tooltip';

  private _position: 'top' | 'bottom' = 'top';

  @Input()
  public get position(): 'top' | 'bottom' {
    return this._position;
  }
  public set position(value: 'top' | 'bottom') {
    this._position = value;
  }

  get tooltipPosition() {
    switch (this.position) {
      case 'top':
        return 'uiseek-tooltip-top';
      case 'bottom':
        return 'uiseek-tooltip-bottom';
    }
  }
}
