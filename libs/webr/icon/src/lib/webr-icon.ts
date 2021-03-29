import { WebrView } from '@webr/core';

export class WebrIconElement extends HTMLElement {
  static get observedAttributes() {
    return ['href', 'use'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    WebrView.get('/assets/views/webr-icon.html').then((tmpl) => {
      this.shadowRoot.appendChild(tmpl);
      const useEl = this.shadowRoot.querySelector('use');
      const href = `${this['href']}#${this['use']}`;
      useEl.setAttribute('xlink:href', href);
    });
  }

  emit() {
    const evt = new CustomEvent('ops', { detail: 'wohoooo' })
    document.dispatchEvent(evt)
  }

  attributeChangedCallback(
    attrName: string,
    oldValue: string,
    newValue: string
  ) {
    if (this[attrName] !== newValue) {
      this[attrName] = newValue;
    }
  }
}


