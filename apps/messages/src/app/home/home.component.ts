import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Peer } from '../shared/connection';

@Component({
  selector: 'uiseek-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  peer: Peer;
  constructor(private _http: HttpClient) {
    const healthCheck$ = this._http.get('/signaling/health-check');
    healthCheck$.subscribe((result) => {
      console.log(result);
      this.peer = new Peer({}, 'ws://localhost:3333', 'webrtc-signaling');
    });
  }

  ngOnInit(): void {}
}
