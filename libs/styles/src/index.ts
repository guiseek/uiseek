export * from './lib/styles';

export function addLinkOnHead(
  source?: string,
  position: InsertPosition = 'beforeend'
) {
  if (!source) source = '~@voxel/styles/styles.css';
  const head: HTMLHeadElement = document.head;
  const link: HTMLLinkElement = document.createElement('link');
  link.setAttribute('src', source);
  link.setAttribute('rel', 'stylesheet');
  head.insertAdjacentElement(position, link);
}