import { Directive, ChangeDetectorRef } from '@angular/core';

@Directive()
export class UiSeekTextFieldBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
