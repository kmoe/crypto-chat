const ghpages = require('gh-pages');
const path = require('path');
const config = require('./webpack.config');

function main() {
  ghpages.publish(config.output.path, console.error.bind(console));
}

main();
