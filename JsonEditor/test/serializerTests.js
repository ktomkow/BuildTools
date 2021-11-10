var should = require('should');
var serializer = require('../src/serializer');

describe('Deserialize object from string', () => {
  it('One text property json', function () {
    const json = '{"someText" : "Yes this is text"}';
    const instance = serializer.deserialize(json);

    instance.should.have.property('someText', 'Yes this is text');
  });

  it('One number array property json', function () {
    const json = '{"arr" : [1,2,3]}';
    const instance = serializer.deserialize(json);

    instance.arr.should.be.instanceof(Array).and.have.lengthOf(3);
  });

  it('One nested number property', function () {
    const json = '{"numbers" : { "first": 1, "second": 2}}';
    const instance = serializer.deserialize(json);

    instance.numbers.first.should.be.instanceof(Number).and.be.exactly(1);
    instance.numbers.second.should.be.instanceof(Number).and.be.exactly(2);
  });
});
