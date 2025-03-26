module.exports = {
  input: [
    'src/app/**/*.{ts,tsx}',
    'src/components/**/*.{ts,tsx}',
    'src/logger/**/*.{ts,tsx}',
    'src/shared/**/*.{ts,tsx}',
  ],
  output: './',
  options: {
    debug: true,
    defaultLng: 'en',
    defaultValue: '🚨🚨🚨',
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx'],
    },
    keySeparator: false,
    lngs: ['de', 'en'],
    nsSeparator: false,
    removeUnusedKeys: true,
    resource: {
      loadPath: 'src/i18n/locales/{{lng}}.json',
      savePath: 'src/i18n/locales/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    sort: true,
  },
};
