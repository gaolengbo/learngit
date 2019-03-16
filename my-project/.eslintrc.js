module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  "parser": "babel-eslint",
  'extends': 'google',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    "jsx": true,
  },
  'plugins': [
    'vue',
    'html'
  ],
  'rules': {},
};
