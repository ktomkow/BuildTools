var should = require('should');var fileReader = require("../src/fileIO");
var serializer = require("../src/serializer");

describe('Read and deserialize simplest jsoin', () => {
  it('Should read and deserialize content properly', function() {
    const path = "./test/test_data/simplest.json";
    const content = fileReader.read(path);
    const instance = serializer.deserialize(content);

    instance.should.have.property('text');
    instance.should.have.property('number');
    instance.should.have.property('is_this_true');

  });
});