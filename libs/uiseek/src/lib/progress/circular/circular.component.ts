import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ProgressBase } from './../progress-base';

@Component({
  selector: 'progress[uiseek][circular]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class ProgressCircularComponent extends ProgressBase {
  @HostBinding('class.uiseek-progress-circular')
  uiseekProgressCircular = true;
}
