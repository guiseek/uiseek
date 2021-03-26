import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./showcase/showcase.module').then((m) => m.ShowcaseModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
