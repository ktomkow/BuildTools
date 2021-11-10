var should = require('should');
var serializer = require('../src/serializer');

describe('Deserialize object from string', () => {
  it('One text property json', function () {
    const json = '{"someText" : "Yes this is text"}';
    const instance = serializer.deserialize(json);

    instance.should.have.property('someText', 'Yes this is text');
  });
});
