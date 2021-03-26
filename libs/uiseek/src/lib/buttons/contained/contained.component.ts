import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ButtonBase } from './../button-base';

@Component({
  selector: 'button[uiseek][contained]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonContainedComponent extends ButtonBase {
  @HostBinding('class.uiseek-button-contained')
  uiSeekButtonContained = true;
}
