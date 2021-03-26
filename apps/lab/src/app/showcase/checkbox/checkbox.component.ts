import { AfterViewInit, Component } from '@angular/core';
import { CheckboxMixed } from './checkbox-mixed';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'uiseek-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    let i: number;
    const mixed = document.querySelectorAll<HTMLInputElement>(
      '[role="checkbox"]'
    );
    for (i = 0; i < mixed.length; i++) {
      const m = new CheckboxMixed(mixed[i]);
      m.init();
    }
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (i = 0; i < checkboxes.length; i++) {
      const cb = checkboxes[i];
      cb.addEventListener('focus', ({ currentTarget }) => {
        this.checkboxFocus(currentTarget as HTMLInputElement);
      });
      cb.addEventListener('blur', ({ currentTarget }) => {
        this.checkboxBlur(currentTarget as HTMLInputElement);
      });
    }
  }

  checkboxFocus(checkbox: HTMLInputElement) {
    checkbox.classList.add('focus');
  }
  checkboxBlur(checkbox: HTMLInputElement) {
    checkbox.classList.remove('focus');
  }
}
