import { SignalingClient } from './signaling-client';

describe('SignalingClient', () => {
  it('should create an instance', () => {
    expect(new SignalingClient()).toBeTruthy();
  });
});
