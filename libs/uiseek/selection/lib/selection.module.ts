import { UiSeekSwitchComponent } from './switch/switch.component';
import { UiSeekRadioComponent } from './radio/radio.component';
import { UiSeekCheckboxComponent } from './checkbox/checkbox.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UiSeekCheckboxComponent, UiSeekRadioComponent, UiSeekSwitchComponent],
  exports: [UiSeekCheckboxComponent, UiSeekRadioComponent, UiSeekSwitchComponent],
})
export class UiSeekSelectionModule {}
