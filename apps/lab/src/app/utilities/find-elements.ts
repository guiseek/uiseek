export const findElements = <T extends HTMLElement>(
  selector: string,
  scope?: HTMLElement
) => {
  const element = scope ? scope : document;
  return element.querySelectorAll<T>(selector);
};
