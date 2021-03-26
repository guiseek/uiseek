import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ProgressBase } from './../progress-base';

@Component({
  selector: 'progress[uiseek][linear]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class ProgressLinearComponent extends ProgressBase {
  @HostBinding('class.uiseek-progress-linear')
  uiseekProgressCircular = true;
}
