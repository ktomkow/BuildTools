const doesExist = (object, property) => {
  const keys = Object.keys(object);

  return keys.some(x => x === property);
};

module.exports = { doesExist };
