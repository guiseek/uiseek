import {
  Input,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InputBase } from './input-base';

@Component({
  selector: `
  'input[uiseek][type="text"],
  'input[uiseek][type="tel"],
  'input[uiseek][type="email"],
  'input[uiseek][type="number"],
  'input[uiseek][type="password"],
  'input[uiseek][type="search"],
  'input[uiseek][type="url"],
  'textarea[uiseek],
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class InputComponent extends InputBase {
  @Input()
  @HostBinding()
  placeholder = ' ';
}
