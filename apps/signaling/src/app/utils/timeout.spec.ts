import { timeout } from './timeout';

describe('timeout', () => {
  it('should create an instance', () => {
    expect(timeout(100)).toBeTruthy();
  });
});
