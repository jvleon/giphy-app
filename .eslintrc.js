module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    "arrow-parens": 0,
    'no-console': 0,
  },
  "globals": {
    "window": true,
    "navigator": true,
    "fetch": true,
    "document": true
  },
};