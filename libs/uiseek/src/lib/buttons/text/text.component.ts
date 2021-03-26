import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ButtonBase } from '../button-base';

@Component({
  selector: 'button[uiseek][text]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ButtonTextComponent extends ButtonBase {
  @HostBinding('class.uiseek-button-text')
  uiSeekButtonText = true;
}
