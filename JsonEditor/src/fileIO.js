var fs = require('fs');

const read = path => {
  return fs.readFileSync(path, 'utf8');
}

module.exports = { read };