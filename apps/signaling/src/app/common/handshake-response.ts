export class HandshakeResponse {
  typeName: string = 'HandshakeResponse';
  constructor(public id: string, public error?: string | Error) {}
}
