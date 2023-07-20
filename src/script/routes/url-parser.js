// eslint-disable-next-line import/no-cycle
import routes from './routes';

const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    // console.log('UrlParser>Url', url);

    const comparr = Object.keys(routes);

    if (comparr.includes(url) || url === '' || url.slice(0, 7) === '/detail') {
      const splitedUrl = this._urlSplitter(url);
      // console.log('UrlParser>splitedUrl', splitedUrl);
      // console.log('url exists!');
      return this._urlCombiner(splitedUrl);
    }

    const splitedUrl = 'not-found';
    // console.log('url dosent exists!');
    return splitedUrl;
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
    );
  },
};

export default UrlParser;
