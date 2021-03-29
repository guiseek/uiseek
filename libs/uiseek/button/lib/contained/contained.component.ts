import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { UiSeekButtonBase } from './../button-base';

@Component({
  selector: 'button[uiseek][contained]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSeekButtonContainedComponent extends UiSeekButtonBase {
  @HostBinding('class.uiseek-button-contained')
  uiSeekButtonContained = true;
}
