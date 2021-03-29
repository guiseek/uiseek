import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { UiSeekButtonBase } from './../button-base';

@Component({
  selector: 'button[uiseek][outlined]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class UiSeekButtonOutlinedComponent extends UiSeekButtonBase {
  @HostBinding('class.uiseek-button-outlined')
  uiSeekButtonOutlined = true;
}
