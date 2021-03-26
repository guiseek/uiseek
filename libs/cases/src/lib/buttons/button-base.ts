import { Directive, Input, ChangeDetectorRef } from '@angular/core';

@Directive()
export class ButtonBase {
  @Input() state: 'enabled' | 'disabled' = 'enabled';

  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
