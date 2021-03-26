import { ChangeDetectorRef, Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive()
export class TextFieldBase {
  constructor(cdr: ChangeDetectorRef, readonly ngControl: NgControl) {
    cdr.detach();
  }
}
