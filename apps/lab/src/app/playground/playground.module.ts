import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PlaygroundComponent } from './playground.component';

@NgModule({
  declarations: [PlaygroundComponent, CheckboxComponent],
  imports: [CommonModule, PlaygroundRoutingModule],
})
export class PlaygroundModule {}
