import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'uiseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'lab';

  el: HTMLElement;
  constructor(
    readonly elRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) readonly doc: Document
  ) {
    this.el = elRef.nativeElement;
  }

  ngAfterViewInit(): void {

  }
}
