import { NavigationComponent, NavigationService } from './navigation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, RouterModule],
  providers: [NavigationService]
})
export class SharedModule {}
