import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonBase } from '../button-base';

@Component({
  selector: 'uiseek-outlined',
  templateUrl: './outlined.component.html',
  styleUrls: ['./outlined.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonOutlinedComponent extends ButtonBase {}
