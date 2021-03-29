import { ChangeDetectorRef, Directive } from '@angular/core';

@Directive()
export class UiSeekButtonBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
