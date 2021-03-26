export const findElement = <T extends HTMLElement>(
  selector: string,
  scope?: HTMLElement
) => {
  const element = scope ? scope : document;
  return element.querySelector<T>(selector);
};
