import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'showcase' },
      {
        path: 'showcase',
        loadChildren: () =>
          import('./showcase/showcase.module').then((m) => m.ShowcaseModule),
      },
      { path: 'playground', loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule) },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
