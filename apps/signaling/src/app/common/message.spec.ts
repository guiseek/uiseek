import { Message } from './message';

describe('Message', () => {
  let instance: Message

  it('should create an instance', () => {
    instance = new Message('', '', '', {})
    expect(instance).toBeTruthy();
  });

  it('should create an instance of Message', () => {
    instance = new Message('', '', '', {})
    expect(instance.typeName).toBe('Message');
  });

  it('should create an instance of invalid message', () => {
    instance = new Message('source', 'target', 'content', {})
    expect(instance.sourceId).toBe('source');
    expect(instance.targetId).toBe('target');
    expect(instance.contentType).toBe('content');
    expect(instance.contentJson).toStrictEqual({})
  });
});
