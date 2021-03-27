export class RelayError {
  typeName: string = 'RelayError';
  constructor(public reason: string, public message: string) {}
}
