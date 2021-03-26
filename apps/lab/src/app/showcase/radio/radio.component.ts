import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'uiseek-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  form = this.fb.group({
    enabled: ['true'],
    disabled: [{ disabled: true, value: 'true' }],
  });
  constructor(readonly fb: FormBuilder) {}
}
