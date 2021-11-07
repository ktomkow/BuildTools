var should = require('should');
var io = require('../src/fileIO');
var serializer = require('../src/serializer');

describe('Serialize and save object', () => {
  it('Simplest json', function () {
    const path = './test/test_data/simplest.json';
    const content = io.read(path);
    const instance = serializer.deserialize(content);

    const savePath = './tmp/simplest.json';
    const json = serializer.serialize(instance, savePath);
    io.save(json, savePath);

    const savedContent = io.read(savePath);
    const savedInstance = serializer.deserialize(savedContent);

    savedInstance.should.have.property('text', 'yup this is string');
    savedInstance.should.have.property('number');
    savedInstance.should.have.property('is_this_true');
  });
});