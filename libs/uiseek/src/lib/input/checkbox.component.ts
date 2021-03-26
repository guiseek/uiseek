import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputBase } from './input-base';

@Component({
  selector: 'input[type="checkbox"]:not([uiseek][switch])',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class CheckboxComponent extends InputBase {}
