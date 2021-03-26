import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
