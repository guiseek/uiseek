import { ChangeDetectorRef, Directive } from '@angular/core';

@Directive()
export class ProgressBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
