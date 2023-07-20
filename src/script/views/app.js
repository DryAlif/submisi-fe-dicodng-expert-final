import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    togglebutton,
    navbarLinks,
    navbar,
    header,
    content,
    skipContent,
    textContext,
  }) {
    this._togglebutton = togglebutton;
    this._navbarLinks = navbarLinks;
    this._navbar = navbar;
    this._header = header;
    this._content = content;
    this._skipContent = skipContent;
    this._textContext = textContext;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      togglebutton: this._togglebutton,
      navbarLinks: this._navbarLinks,
      navbar: this._navbar,
      header: this._header,
      skipContent: this._skipContent,
      textContext: this._textContext,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    const newarr = Object.keys(routes);

    if (newarr.includes(url)) {
      console.log('Value exists!');
      console.log('url.page', routes[url]);
      const page = routes[url];

      this._content.innerHTML = await page.render();
      setTimeout(() => {
        page.afterRender();
      }, 200);
    } else {
      console.log(`${url} Value did not exists!`);
    }
  }
}

export default App;
