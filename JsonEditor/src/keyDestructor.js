const clone = require('rfdc')();

const destruct = (key) => {
  const keyNotString = typeof key !== 'string';
  if (keyNotString) {
    throw new Error('Key is not a text!');
  }

  const separator = '.';
  const keys = key.split(separator);

  return {
    currentKey: keys[0],
    shortenKey: keys.slice(1).join('.'),
    sourceKey: clone(key),
    isTheLastOne: keys.length <= 1,
  };
};

module.exports = { destruct };
