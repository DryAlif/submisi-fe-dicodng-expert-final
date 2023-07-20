class skipContentApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
 

    <a
    id="skip-to-content"
    tabindex="0"
    aria-label="Skip to content"
    href="#text-context"
    class="skip-link"
    >Skip to content ?</a>
            `;
  }
}

customElements.define('skipcontent-app', skipContentApp);
