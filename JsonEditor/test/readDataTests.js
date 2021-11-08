var should = require('should');
var fileReader = require('../src/fileIO');
var serializer = require('../src/serializer');

describe('Read and deserialize object', () => {
  it('Simplest json', function () {
    const path = './test/test_data/simplest.json';
    const content = fileReader.read(path);
    const instance = serializer.deserialize(content);

    instance.should.have.property('text', 'yup this is string');
    instance.should.have.property('number', 5);
    instance.should.have.property('is_this_true', true);
  });

  it('Json with array', function () {
    const path = './test/test_data/simple_json_with_array.json';
    const content = fileReader.read(path);
    const instance = serializer.deserialize(content);

    instance.should.have.property(
      'description',
      'this json contains array of numbers'
    );
    instance.myArray.should.be.instanceof(Array).and.have.lengthOf(12);
  });

  it('Json with nested object', function () {
    const path = './test/test_data/json_with_object.json';
    const content = fileReader.read(path);
    const instance = serializer.deserialize(content);

    instance.car.should.have.property('manufacturer', 'Peugeot');
    instance.car.should.have.property('model', '208');
    instance.car.should.have.property('year', 2012);
    instance.car.should.have.property('engine', '1.0');
  });

  it('Json with nested object', function () {
    const path = './test/test_data/json_with_polish_chars.json';
    const content = fileReader.read(path);
    const instance = serializer.deserialize(content);

    instance.should.have.property('announcement', 'ęśąćź');
  });
});

describe('Read and deserialize strange json', () => {
  // I saw this example in appsettings.json file in ASP.NET project
  it('Comment in json using double slash', function () {
    const path = './test/test_data/json_with_comment.json';
    const content = fileReader.read(path);
    const instance = serializer.deserialize(content);

    instance.configuration.should.have.property('timeout', '60');
    instance.configuration.should.have.property('retryAfter', '5');
    instance.connectionStrings.should.have.property(
      'mongo',
      'mongodb://localhost:27017'
    );
    instance.connectionStrings.should.have.property(
      'logs',
      'C:\\Logs\\TheApp\\logs.log'
    );
  });
});
