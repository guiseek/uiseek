import { HandshakeResponse } from './handshake-response';

describe('HandshakeResponse', () => {
  let instance: HandshakeResponse

  it('should create an instance', () => {
    instance = new HandshakeResponse('id', new Error)
    expect(instance).toBeTruthy();
  });

  it('should create an instance response type webr', () => {
    instance = new HandshakeResponse('id', new Error)
    expect(instance.typeName).toBe('HandshakeResponse');
  });

  it('should create an handshake response', () => {
    const error = new Error('webr error')
    instance = new HandshakeResponse('id', error)
    expect(instance.error).toBeInstanceOf(Error);
  });
});
