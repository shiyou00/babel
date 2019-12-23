const babel = require('babel-core');
const types = require('babel-types');

const plugin = ()=> {
  return ({types}) => {
    return {
      visitor: {
        Identifier(path, state){
          console.log("Visiting: " + path.node.name);
        }
      }
    }
  }
};

const visitor = plugin({types});

const code = `
    a + b + c;
`;


babel.transform(code, {
  plugins: [[visitor]]
});
