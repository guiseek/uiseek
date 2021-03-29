import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { UiSeekProgressBase } from './../progress-base';

@Component({
  selector: 'progress[uiseek][circular]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class UiSeekProgressCircularComponent extends UiSeekProgressBase {
  @HostBinding('class.uiseek-progress-circular')
  uiseekProgressCircular = true;
}
