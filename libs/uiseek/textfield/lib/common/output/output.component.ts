import { AbstractControl, ControlContainer } from '@angular/forms';
import {
  Input,
  Optional,
  Component,
  HostBinding,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

export function coerceInitialError(ctrl: AbstractControl) {
  return !(ctrl.invalid && ctrl.touched);
}

@Component({
  selector: 'label[uiseek]>div>output',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSeekOutputComponent implements AfterViewInit {
  @Input() control?: AbstractControl | null;

  /**
   * Specifies controls from which the output was calculated
   */
  @Input('for') for: string = '';

  /**
   * Allowed ARIA role attribute
   * (default - do not set), Any role value.
   *
   * Allowed ARIA state and property attributes
   * Global aria-* attributes
   * Any aria-* attributes applicable to the allowed roles.
   */
  @Input() status?: string = '';

  @HostBinding('attr.aria-hidden')
  get ariaHidden() {
    return this.control ? coerceInitialError(this.control) : true;
  }

  constructor(@Optional() readonly container: ControlContainer) {}

  ngAfterViewInit(): void {

    if (this.container && this.for) {
      this.control = this.container.control?.get(this.for);
      console.log('this.for: ', this.control);
    }
  }
}
