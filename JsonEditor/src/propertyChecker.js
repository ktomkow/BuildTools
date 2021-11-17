const destructor = require('./keyDestructor');

const doesExist = (object, key) => {
  if (!object) {
    return false;
  }

  const path = destructor.destruct(key);

  const objectProperties = Object.keys(object);

  if (path.isTheLastOne === false) {
    return doesExist(object[path.currentKey], path.shortenKey);
  } else {
    return objectProperties.some((x) => x === key);
  }
};

module.exports = { doesExist };
