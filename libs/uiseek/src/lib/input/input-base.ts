import { ChangeDetectorRef, Directive } from '@angular/core';

@Directive()
export class InputBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
