import { Component, OnInit } from '@angular/core';
import { ShoelCaseTextFieldBase } from '../textfield-base';

@Component({
  selector: 'uiseek-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss'],
})
export class StandardComponent extends ShoelCaseTextFieldBase implements OnInit {
  // constructor() {}

  ngOnInit(): void {}
}
