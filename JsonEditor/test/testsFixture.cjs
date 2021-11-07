const fs = require('fs');

const createTmpDirectory = () => {
  console.log('Creating tmp directory..');

  const dir = './tmp';
  fs.mkdir(dir, (err) => {
    if (err) {
      throw err;
    }

    console.log('Directory tmp was created.');
  });
};

const removeTmpDirectory = () => {
  console.log('Removing tmp directory..');

  const dir = './tmp';
  fs.rmdirSync(dir, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }

    console.log('Directory tmp was remnoved.');
  });

  console.log('Directory tmp was removed.');
};

exports.mochaGlobalSetup = function () {
  console.log('I am mocha setup.');
  removeTmpDirectory();
  createTmpDirectory();
  console.log('Setup done.');
};

exports.mochaGlobalTeardown = function () {
  console.log('I am mocha teardown.');
  removeTmpDirectory();
  console.log('Teardown done.');
};
