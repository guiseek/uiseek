export class Message {
  typeName: string = 'Message';
  constructor(
    public sourceId: string,
    public targetId: string,
    public contentType: string,
    public contentJson: string | Record<string, any>
  ) {}
}
