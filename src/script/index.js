import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime';
import '../styles/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

// components
import './component/skipcontent-app';
import './component/headercontent-app';
import './component/footer-app';

const app = new App({
  togglebutton: document.getElementsByClassName('header__toggle-button')[0],
  navbarLinks: document.querySelector('.header__navbar'),
  navbar: document.querySelector('.header__nav'),
  header: document.querySelector('header'),
  content: document.querySelector('#template_restaurant'),
  skipContent: document.getElementById('skip-to-content'),
  textContext: 'text-context',
});

window.addEventListener('hashchange', (event) => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
