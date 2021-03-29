import { UiSeekSelectionModule } from '@uiseek/webr/selection';
import { UiSeekButtonModule } from '@uiseek/webr/button';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PlaygroundComponent } from './playground.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [PlaygroundComponent, CheckboxComponent, IconComponent],
  imports: [
    CommonModule,
    UiSeekSelectionModule,
    UiSeekButtonModule,
    PlaygroundRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlaygroundModule {}
