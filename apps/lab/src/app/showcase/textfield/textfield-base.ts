import { Directive } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Directive()
export class ShoelCaseTextFieldBase {
  form = this.fb.group({
    blank: ['', Validators.required]
  })
  constructor(readonly fb: FormBuilder) {}
}
