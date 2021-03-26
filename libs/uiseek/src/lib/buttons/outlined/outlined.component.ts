import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ButtonBase } from './../button-base';

@Component({
  selector: 'button[uiseek][outlined]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ButtonOutlinedComponent extends ButtonBase {
  @HostBinding('class.uiseek-button-outlined')
  uiSeekButtonOutlined = true;
}
