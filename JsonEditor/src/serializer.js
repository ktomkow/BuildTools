const serialize = (object) => {
  return JSON.stringify(object, null, 4);
};

const deserialize = (json) => {
  const lines = splitToLines(json);
  const formattedLines = removeComments(lines);
  const joinedLines = joinLines(formattedLines);

  return JSON.parse(joinedLines);
};

const splitToLines = (json) => {
  return json.split('\r\n');
};

const joinLines = (lines) => {
  return lines.join('');
};

const removeComments = (lines) => {
  return lines.map((x) => {
    return x.split(" // ")[0].split(" //")[0];
  })
};

module.exports = { serialize, deserialize };
