export class HandshakeRequest {
  typeName: string = 'HandshakeRequest';
  constructor(public email: string, public secret: string) {}
}
