const babel = require('babel-core');
const types = require('babel-types');

const plugin = ()=> {
  return ({types}) => {
    return {
      visitor: {
        Identifier() {
          console.log("Called!");
        }
      }
    }
  }
};

const visitor = plugin({types});

const code = `
    function square(n) {
      return n * n;
    }
`;


babel.transform(code, {
  plugins: [[visitor]]
});
