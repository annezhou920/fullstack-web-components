export class CardComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
        <span>
            <header><slot name="header"></slot></header>
            <section><slot name="content"></slot></section>
            <footer><slot name="footer"></slot></footer>
        </span>
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('in-card', CardComponent);
