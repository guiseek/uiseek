import { relayErrorReason } from './relay-error-reason';
import { RelayError } from './relay-error';

describe('RelayError', () => {
  let instance: RelayError;

  it('should create an instance', () => {
    instance = new RelayError('', '');
    expect(instance).toBeTruthy();
  });

  it('should create an instance of Relay Error', () => {
    instance = new RelayError('', '');
    expect(instance.typeName).toBe('RelayError');
  });

  it('should create an instance of invalid message', () => {
    instance = new RelayError(
      relayErrorReason.MESSAGE_INVALID,
      'Invalid message'
    );
    expect(instance.reason).toBe(relayErrorReason.MESSAGE_INVALID);
    expect(instance.message).toBe('Invalid message');
  });

  it('should create an instance', () => {
    instance = new RelayError(
      relayErrorReason.TARGET_NOT_FOUND,
      'Target not found'
    );
    expect(instance.reason).toBe(relayErrorReason.TARGET_NOT_FOUND);
    expect(instance.message).toBe('Target not found');
  });
});
