import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonBase } from '../button-base';

@Component({
  selector: 'uiseek-contained',
  templateUrl: './contained.component.html',
  styleUrls: ['./contained.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonContainedComponent extends ButtonBase {}
