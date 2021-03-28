import { NgControl } from '@angular/forms';
import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'label[uiseek]>input[type]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class InputComponent {
  @HostBinding('placeholder')
  uiSeekPlaceholder = ' ';

  constructor(readonly ngControl: NgControl) {}
}
