var fs = require('fs');

const read = path => {
  return fs.readFileSync(path, 'utf8');
}

const save = (json, path) => {
  fs.writeFileSync(path, json);
}

module.exports = { read, save };