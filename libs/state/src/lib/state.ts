import { distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export abstract class UiSeekState<T> {
  private _state$: BehaviorSubject<T>;

  protected get state(): T {
    return this._state$.getValue();
  }

  constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
  }

  protected select<K>(mapFn: (state: T) => K) {
    return this._state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>) {
    this._state$.next({
      ...this.state,
      ...newState,
    });
  }
}
