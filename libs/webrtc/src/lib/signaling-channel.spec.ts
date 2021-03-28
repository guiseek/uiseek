import { w3cwebsocket } from 'websocket';
import { SignalingChannel } from './signaling-channel';

describe('SignalingChannel', () => {
  it('should create an instance', () => {
    expect(new SignalingChannel(new w3cwebsocket(''))).toBeTruthy();
  });
});
