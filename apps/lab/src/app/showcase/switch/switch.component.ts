import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'uiseek-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  form = this.fb.group({
    off: [],
    on: [true],
    offDisabled: [{ disabled: true, value: '' }],
    onDisabled: [{ disabled: true, value: true }],
  });
  constructor(readonly fb: FormBuilder) {}

  ngOnInit(): void {}
}
