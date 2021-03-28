import { Directive, ChangeDetectorRef } from '@angular/core';

@Directive()
export class TextFieldBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
