import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'uiseek-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  form = this.fb.group({
    enabled: [''],
    disabled: [{ disabled: true, value: '' }],
  });
  constructor(readonly fb: FormBuilder) {}
}
