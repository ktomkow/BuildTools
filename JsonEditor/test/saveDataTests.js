var should = require('should');
var io = require('../src/fileIO');
var serializer = require('../src/serializer');

describe('Serialize and save object', () => {
  it('Simplest json', function () {
    const path = './test/test_data/simplest.json';
    const content = io.read(path);
    const instance = serializer.deserialize(content);

    instance.text = 'this is new string';

    const savePath = './tmp/simplest.json';
    const json = serializer.serialize(instance, savePath);
    io.save(json, savePath);

    const savedContent = io.read(savePath);
    const savedInstance = serializer.deserialize(savedContent);

    savedInstance.should.have.property('text', 'this is new string');
    savedInstance.should.have.property('number', 5);
    savedInstance.should.have.property('is_this_true', true);
  });
});