const clone = require('rfdc')();
var propertyChecker = require('./propertyChecker');

// Immutable
create = (object, key) => {
  const result = !!object ? clone(object) : {};

  if (propertyChecker.doesExist(object, key) === false) {
    result[key] = null;
  }

  return result;
};

module.exports = { create };
