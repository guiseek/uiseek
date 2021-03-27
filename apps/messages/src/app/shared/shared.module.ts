import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './navigation/navigation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationComponent],
  providers: [NavigationService],
  exports: [NavigationComponent],
})
export class SharedModule {}
