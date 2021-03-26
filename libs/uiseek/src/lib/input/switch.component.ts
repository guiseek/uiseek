import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { InputBase } from './input-base';

@Component({
  selector: 'input[type="checkbox"][uiseek][switch]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class SwitchComponent extends InputBase {
  @HostBinding('attr.role')
  checkboxRole = 'switch';
}
