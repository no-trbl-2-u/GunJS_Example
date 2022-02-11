// TODO: Extend to any needed imports
const map = [
  ['features', './src/features'],
  ['theme', './src/app/theme']
];

module.exports = {
  extends: ['react-app', 'react-app/jest'],
  globals: {
    workbox: true
  },
  overrides: [],
  rules: {}

  // TODO: Implement import aliases
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       extensions: ['.js', '.jsx', '.json'],
  //       map: [
  //         ['features', './src/features'],
  //         ['theme', './src/app/theme']
  //       ]
  //     }
  //   }
  // }
};
