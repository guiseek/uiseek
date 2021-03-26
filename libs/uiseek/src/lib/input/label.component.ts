import { CheckboxComponent } from './checkbox.component';
import { SwitchComponent } from './switch.component';
import { InputComponent } from './input.component';
import { RadioComponent } from './radio.component';
import {
  Input,
  Component,
  HostBinding,
  ContentChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

export type LabelAppearance = 'standard' | 'outlined' | 'filled';

@Component({
  selector: 'label[uiseek]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @ContentChild(InputComponent) inputTextTypes!: InputComponent;
  @ContentChild(CheckboxComponent) checkbox!: CheckboxComponent;
  @ContentChild(SwitchComponent) switch!: SwitchComponent;
  @ContentChild(RadioComponent) radio!: RadioComponent;

  private readonly _appearances: LabelAppearance[];
  private _appearance: LabelAppearance = 'filled';

  @Input('appearance')
  set appearance(val: LabelAppearance) {
    this._appearance = val;
  }

  get appearance() {
    return this._appearance;
  }

  @HostBinding('attr.class')
  get labelClass(): string | void {
    if (this.switch) {
      return 'uiseek-switch';
    } else if (this.radio) {
      return 'uiseek-radio';
    } else if (this.checkbox) {
      return 'uiseek-checkbox';
    } else {
      const val = this._appearance;
      // console.log(`23453 :`, val);

      // console.log(`uiseek-textfield-${val}`);

      if (this._appearances.includes(val)) {
        return `uiseek-textfield-${val}`;
      } else {
        return `uiseek-textfield-filled`;
      }
    }
  }
  constructor() {
    this._appearances = ['standard', 'outlined', 'filled'];
  }
}
