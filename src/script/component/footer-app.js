class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <p>Copyright &#169; 2023 - RestoPedia</p>
      </footer>
          `;
  }
}

customElements.define('footer-app', FooterApp);
