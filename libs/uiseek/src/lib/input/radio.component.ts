import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputBase } from './input-base';

@Component({
  selector: 'input[uiseek][type="radio"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class RadioComponent extends InputBase {}
