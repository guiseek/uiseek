import { NavigationService } from './shared/navigation/navigation.service';
import { environment } from './../environments/environment';
import { Navigation } from './shared/navigation/navigation';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Peer } from './shared/connection/peer';
import { SignalingClient } from '@uiseek/webrtc';
import { w3cwebsocket } from 'websocket';

@Component({
  selector: 'uiseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  peer: Peer;
  nav: Navigation;
  title = 'messages';

  constructor(
    private _http: HttpClient,
    private _navigation: NavigationService
  ) {
    const nav = new Navigation('nav', []);
    this._navigation.register(nav);
    this.nav = nav;
  }

  ngOnInit(): void {
    const healthCheck$ = this._http.get('/signaling/health-check');

    healthCheck$.subscribe(() => {
      const { host, protocol } = environment.signaling;
      this.peer = new Peer(environment.webrtc, host, protocol);
      this.nav.addItem({ route: '/', label: 'Home' });
      const socket = new w3cwebsocket(host, protocol)
      const client = new SignalingClient(socket, host, 'email@guiseek.dev', 'secret')

      console.log(client.state);

      // this.peer.signaling.
    });
  }
}
