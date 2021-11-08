const doesExist = (object, property) => {
  if (!object) {
    return false;
  }

  const propertyParts = property.split('.');
  const objectProperties = Object.keys(object);

  if (propertyParts.length > 1) {
    const currentKey = propertyParts[0];
    const directProperty = objectProperties.find((x) => x === currentKey);
    return doesExist(object[directProperty], propertyParts.slice(1).join('.'));
  } else {
    return objectProperties.some((x) => x === property);
  }
};

module.exports = { doesExist };
