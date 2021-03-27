import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonBase } from '../button-base';

@Component({
  selector: 'uiseek-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTextComponent {
  @Input() state: 'enabled' | 'disabled' = 'enabled';
  @Input() disabled: boolean = false;
}
