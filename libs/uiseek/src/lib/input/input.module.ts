import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { CheckboxComponent } from './checkbox.component';
import { LabelComponent } from './label.component';
import { RadioComponent } from './radio.component';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    CheckboxComponent,
    LabelComponent,
    RadioComponent,
    SwitchComponent,
    InputComponent,
  ],
  exports: [
    CheckboxComponent,
    LabelComponent,
    RadioComponent,
    SwitchComponent,
    InputComponent,
  ],
  imports: [CommonModule],
})
export class UiSeekInputModule {}
