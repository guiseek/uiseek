import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShowcaseComponent } from './showcase.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressComponent } from './progress/progress.component';
import { FilledComponent } from './textfield/filled/filled.component';
import { OutlinedComponent } from './textfield/outlined/outlined.component';
import { StandardComponent } from './textfield/standard/standard.component';
import { UiSeekCoreModule } from '@uiseek/webr';

@NgModule({
  declarations: [
    ShowcaseComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    SliderComponent,
    ProgressComponent,
    FilledComponent,
    OutlinedComponent,
    StandardComponent,
  ],
  imports: [
    CommonModule,
    UiSeekCoreModule,
    ReactiveFormsModule,
    ShowcaseRoutingModule,
  ],
})
export class ShowcaseModule {}
