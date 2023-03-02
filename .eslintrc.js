module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base','prettier'],
  plugins: ['prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
     camelCase: off,
     "prettier/prettier" : "error"
  },
};
