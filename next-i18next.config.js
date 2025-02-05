// /**
//  * @type {import('next-i18next').UserConfig}
//  */

// module.exports = {
//   // debug: process.env.NODE_ENV === 'development',
//   i18n: {
//     locales: ['vn', 'en'],
//     defaultLocale: 'vn',
//     localeDetection: false,
//   },
// }

const path = require('path');

module.exports = {
  i18n: {
    locales: ['vn', 'en'],
    defaultLocale: 'vn',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
