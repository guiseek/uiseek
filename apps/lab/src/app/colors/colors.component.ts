import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { formatRGB, hsl2rgb, on } from './../utilities';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'uiseek-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements AfterViewInit {
  el: HTMLElement;
  constructor(
    readonly elRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) readonly doc: Document
  ) {
    this.el = elRef.nativeElement;
  }

  ngAfterViewInit(): void {
    const style = this.doc.body.style;

    // on input event, callback value
    on('input', '#primary > input', ({ value }) => {
      // CSS variable
      const cssVariable = '--uiseek-primary-rgb';
      // CSS value
      const cssValue = formatRGB(hsl2rgb(+value, 0.897, 0.541));
      // Set property
      style.setProperty(cssVariable, cssValue);
    });

    // on input event, callback value
    on('input', '#on-primary > input', ({ value }) => {
      // CSS variable
      const cssVariable = '--uiseek-onprimary-rgb';
      // CSS value
      const cssValue = `${value}, ${value}, ${value}`;
      // Set property
      style.setProperty(cssVariable, cssValue);
    });

    on('input', '#surface > input', ({ value }) => {
      // CSS variable
      const cssVariable = '--uiseek-surface-rgb';
      // CSS value
      const cssValue = `${value}, ${value}, ${value}`;
      // Set property
      style.setProperty(cssVariable, cssValue);
    });

    on('input', '#on-surface > input', ({ value }) => {
      // CSS variable
      const cssVariable = '--uiseek-onsurface-rgb';
      // CSS value
      const cssValue = `${value}, ${value}, ${value}`;
      // Set property
      style.setProperty(cssVariable, cssValue);
    });

    on('change', '#toggle > input', ({ checked }) => {
      if (checked) {
        this.el.classList.remove('hidden');
      } else {
        this.el.classList.add('hidden');
      }
    });
  }
}
