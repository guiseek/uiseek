import { Component, AfterViewInit } from '@angular/core';
import { findElements } from '../../utilities';

@Component({
  selector: 'uiseek-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const selector = '.checkboxes > label:last-child > input';
    findElements<HTMLInputElement>(selector).forEach(
      (item) => (item.indeterminate = true)
    );
  }
}
