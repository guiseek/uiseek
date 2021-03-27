import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
