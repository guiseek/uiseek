import { CheckboxComponent } from './checkbox/checkbox.component';
import { PlaygroundComponent } from './playground.component';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
    children: [
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'icon', component: IconComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
