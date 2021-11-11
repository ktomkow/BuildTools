const clone = require('rfdc')();
var propertyChecker = require('./propertyChecker');

// Immutable
create = (object, key) => {
  const result = clone(object);
  if (propertyChecker.doesExist(object, key)) {
    return result;
  }
};

module.exports = { create };
