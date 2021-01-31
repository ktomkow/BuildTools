var fs = require('fs');

const loadObject = (path) => {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
};

const saveObject = (path, object) => {
  let data = JSON.stringify(object);
  fs.writeFileSync(path, data);
};

const convertToPairs = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const value = arr[++i];
    let obj = Object.create({});
    obj['key'] = key;
    obj['value'] = value;
    newArray.push(obj);
  }

  return newArray;
};

const arguments = () => {
  const inputFilePath = process.argv[2];
  let result = Object.create({});
  const pairs = process.argv.slice(3);

  if (pairs.length !== 0 && pairs.length % 2 !== 0) {
    throw new Error(
      `Wrong number of arguments (${pairs.length})! You have to specify arguments as pairs : key and value`
    );
  }

  const pairsAsObjects = convertToPairs(pairs);
  result['inputFilePath'] = inputFilePath;
  result['pairs'] = pairsAsObjects;
  return result;
};

const data = arguments();
const originalObject = loadObject(data.inputFilePath);

let result = JSON.parse(JSON.stringify(originalObject));

const replaceProperty = (obj, pair) => {
  if (pair.key.includes('.')) {
    let keys = pair.key.split('.');
    const currentKey = keys[0];
    newKey = keys.slice(1).join('.');
    const subObject = obj[currentKey];
    replaceProperty(subObject, { key: newKey, value: pair.value });
  } else {
    obj[pair.key] = pair.value;
  }
};

data.pairs.forEach((pair) => {
  replaceProperty(result, pair);
});

console.log('Original : ', originalObject);
console.log('Result   : ', result);

saveObject(data.inputFilePath, result);
