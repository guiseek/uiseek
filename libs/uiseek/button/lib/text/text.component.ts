import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { UiSeekButtonBase } from '../button-base';

@Component({
  selector: 'button[uiseek][text]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class UiSeekButtonTextComponent extends UiSeekButtonBase {
  @HostBinding('class.uiseek-button-text')
  uiSeekButtonText = true;
}
