import { UiSeekState } from './state';

class User {
  constructor(public items: string[]) {}
}
class UserState extends UiSeekState<User> {}

describe('UiSeekState', () => {
  let state: UserState;

  beforeEach(() => {
    state = new UserState({
      items: [],
    });
  });

  it('should work', () => {
    expect(state).toEqual('UiSeekState');
  });
});
