module.exports = function({ types: babelTypes }) {
  return {
    name: "babel-simple-plugin",
    visitor: {
      Identifier(path, state) {
        if (path.node.name === 'foo') {
          path.node.name = 'bar';
        }
      }
    }
  };
};
