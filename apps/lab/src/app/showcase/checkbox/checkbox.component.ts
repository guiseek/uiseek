import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'uiseek-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  form = this.fb.group({
    enabled: this.fb.group({
      unchecked: [],
      checked: [true],
      indeterminate: [],
    }),
    disabled: this.fb.group({
      unchecked: [{ disabled: true, value: '' }],
      checked: [{ disabled: true, value: true }],
      indeterminate: [{ disabled: true, value: '' }],
    }),
  });
  constructor(readonly fb: FormBuilder) {}
}
