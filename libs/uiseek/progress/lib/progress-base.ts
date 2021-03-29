import { ChangeDetectorRef, Directive } from '@angular/core';

@Directive()
export class UiSeekProgressBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
