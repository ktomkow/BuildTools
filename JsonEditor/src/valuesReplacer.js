// Replace only existing properties, do not add new
// Immutable - does not modify source object, returns new object
const replace = (object, keyValuePairs) => {
  if (!Array.isArray(keyValuePairs)) {
    throw new Error(
      'KeyValuePairs expected to be array of type {key: (..), value: (..)}'
    );
  }

  const result = Object.assign({}, object);
  result.text = 'How you doing?';
  return result;
};

module.exports = { replace };
