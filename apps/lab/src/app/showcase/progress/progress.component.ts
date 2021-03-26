import { Component, AfterViewInit } from '@angular/core';
import { findElement } from '../../utilities';

@Component({
  selector: 'uiseek-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const selector = '.progresses > progress';
    const progress = findElement<HTMLProgressElement>(selector);
    window.setInterval(() => {
      progress.value = progress.value === 100 ? 0 : progress.value + 10;
    }, 1000);
  }
}
