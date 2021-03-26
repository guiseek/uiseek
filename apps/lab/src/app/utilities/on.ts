import { findElement } from './find-element';

export const on = <T extends HTMLElement>(
  evt: keyof HTMLElementEventMap,
  selector: string,
  cb: (v: any) => void
) => {
  const element = findElement(selector);
  const emit = ({ target }) => cb(target as T);
  if (element) {
    element.addEventListener(evt, emit, false);
  }
};
