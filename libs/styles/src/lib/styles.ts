export function styles(
  source?: string,
  position: InsertPosition = 'beforeend'
): void {
  if (!source) source = '~@uiseek/styles/styles.css';
  const head: HTMLHeadElement = document.head;
  const link: HTMLLinkElement = document.createElement('link');
  link.setAttribute('src', source);
  link.setAttribute('rel', 'stylesheet');
  head.insertAdjacentElement(position, link);
}
