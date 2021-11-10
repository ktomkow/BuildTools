const isJson = (text) => {
  try {
    const json = JSON.parse(text);
    return true;
  } catch (e) {}

  const withoutComments = tryRemovingComments(text);
  try {
    const json = JSON.parse(withoutComments);
    return true;
  } catch (e) {
    console.debug('Given text is not a json');
    return false;
  }
};

const serialize = (object) => {
  return JSON.stringify(object, null, 4);
};

const deserialize = (json) => {
  let formattedJson = tryRemovingComments(json);

  return JSON.parse(formattedJson);
};

const tryRemovingComments = (json) => {
  const lines = splitToLines(json);
  const formattedLines = removeComments(lines);
  const joinedLines = joinLines(formattedLines);

  return joinedLines;
};

const splitToLines = (json) => {
  return json.split('\r\n');
};

const joinLines = (lines) => {
  return lines.join('');
};

const removeComments = (lines) => {
  return lines.map((x) => {
    return x.split(' // ')[0].split(' //')[0];
  });
};

module.exports = { isJson, serialize, deserialize };
