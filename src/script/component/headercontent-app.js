class headerContentApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="header__nav">
      <div class="header__nav-container">
        <div class="header__logo">
        <a href="/" class="header__link" tabindex="0">
            <span class="header__span header__span--text-primary">
              Resto
            </span>
            <span class="header__span header__span--text-secondary">
              Pedia
            </span>
          </a>
       </div>

        <button
          tabindex="0"
          aria-expanded="false"
          aria-controls="menu"
          id="hamburger"
          role="button"
          class="header__toggle-button"
          >☰</button
        >

      <div class="header__navbar" role="navigation">
        <ul class="header__navbar-ulist">
          <li>
            <a href="#${'/'}" class="header__navbar-link" tabindex="0">Home</a>
          </li>
          <li>
            <a href="#/like" tabindex="0" class="header__navbar-link"
              >Liked</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="header__navbar-link"
              href="https://www.facebook.com/derry.pratama22/"
              rel="noreferrer"
              target="_blank"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <div class="header__hero">

      <picture>
					<source media="(max-width: 425px)" srcset="./images/hero-gradient-small.jpg">
				 	<source media="(max-width: 768px)" srcset="./images/hero-gradient-large.jpg">
        					<img
						class="header__hero__image lazyload" 
						data-src="./images/hero-gradient.jpg"
						alt="Hero Image" 
					/>
       </picture>
        <div class="header__hero__text">
          <h1 class="header__hero__heading">RESTOPEDIA</h1>
          </div>
     </div>

            `;
  }
}

customElements.define('headercontent-app', headerContentApp);
