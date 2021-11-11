const clone = require('rfdc')();
var propertyChecker = require('./propertyChecker');

// Replace only existing properties, do not add new
// Immutable - does not modify source object, returns new object
const replace = (object, keyValuePairs) => {
  if (!Array.isArray(keyValuePairs)) {
    throw new Error(
      'KeyValuePairs expected to be array of type {key: (..), value: (..)}'
    );
  }

  const result = clone(object);

  for (let i = 0; i < keyValuePairs.length; i++) {
    const pair = keyValuePairs[i];
    replaceMutable(result, pair.key, pair.value);
  }

  return result;
};

// Mutates the object
const replaceMutable = (object, key, value) => {
  if (propertyChecker.doesExist(object, key)) {
    if (key.includes('.')) {
      const mainKey = key.split('.')[0];
      const otherKeys = key.split('.').slice(1).join('.');
      replaceMutable(object[mainKey], otherKeys, value);
    } else {
      object[key] = value;
    }
  }
};

module.exports = { replace };
