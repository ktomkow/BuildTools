const read = () => {
  const argv = process.argv;

  return argv.slice(2);
}

const isFlag = (text) => {
  const isString = typeof text === 'string';
  if(isString) {
    return false;
  }

};

module.exports = { read };
