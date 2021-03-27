import { HandshakeRequest } from './handshake-request';

describe('HandshakeRequest', () => {
  let instance: HandshakeRequest;

  it('should create an instance', () => {
    instance = new HandshakeRequest('', '');
    expect(instance).toBeTruthy();
  });

  it('should create an instance request type', () => {
    instance = new HandshakeRequest('', '');
    expect(instance.typeName).toBe('HandshakeRequest');
  });

  it('should create an handshake request instance', () => {
    instance = new HandshakeRequest('email', 'secret');
    expect(instance.email).toBe('email');
    expect(instance.secret).toBe('secret');
  });
});
