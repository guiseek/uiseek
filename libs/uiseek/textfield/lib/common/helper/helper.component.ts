import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'label[uiseek]>small[uiseek]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSeekHelperComponent {}
