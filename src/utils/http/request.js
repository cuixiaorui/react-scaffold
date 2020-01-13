// import Url from 'url-parse';
// import config from '../../../config/index.js';

export function handler(config) {
  // config.url = replaceHost(config.url);
  return config;
}

// 可以替换 host 来达到访问不同的 host
// function replaceHost(url) {
//   const urlInfo = new Url(url);
//   const host = process.env.NODE_ENV === 'development' ? config.devHost : config.prodHost;
//   urlInfo.set('host', host);
//   return urlInfo.toString();
// }
