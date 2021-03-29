import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { UiSeekProgressBase } from './../progress-base';

@Component({
  selector: 'progress[uiseek][linear]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class UiSeekProgressLinearComponent extends UiSeekProgressBase {
  @HostBinding('class.uiseek-progress-linear')
  uiseekProgressCircular = true;
}
