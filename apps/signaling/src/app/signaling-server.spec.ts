import { SignalingServer } from './signaling-server';

describe('SignalingServer', () => {
  let instance: SignalingServer;
  it('should create an instance', () => {
    instance = new SignalingServer('ws://localhost', 3000);
    expect(instance).toBeTruthy();
  });
});
