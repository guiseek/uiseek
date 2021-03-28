import { w3cwebsocket } from 'websocket';
import { SignalingClient } from './signaling-client';

describe('SignalingClient', () => {
  it('should create an instance', () => {
    expect(new SignalingClient(new w3cwebsocket(''), '', 'email@x.x', 'secret')).toBeTruthy();
  });
});
