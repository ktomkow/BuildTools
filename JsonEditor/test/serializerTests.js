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

  it('Numbers', function () {
    const json = '{"int" : 5, "float": 2.3, "text: "99"}';
    const instance = serializer.deserialize(json);

    instance.int.should.be.instanceof(Number).and.be.exactly(5);
    instance.float.should.be.instanceof(Number).and.be.exactly(2.3);
    instance.float.should.be.instanceof(String).and.be.exactly("99");
  });
});

describe('Is JSON', () => {
  it('Single line json is valid json', function () {
    const json = '{"text":"aaa"}';
    const result = serializer.isJson(json);

    result.should.be.true();
  });

  it('Single line json with comment and line break is valid json', function () {
    const json = '{"text":"aaa" // comment\r\n}';
    const result = serializer.isJson(json);

    result.should.be.true();
  });

  it('Just text is not a json', function () {
    const text = 'abcdefg';
    const result = serializer.isJson(text);

    result.should.be.false();
  });

  it('Not closed json is not a json', function () {
    const text = '{"text":"aaa"';
    const result = serializer.isJson(text);

    result.should.be.false();
  });

  it('Not opened json is not a json', function () {
    const text = '"text":"aaa"}';
    const result = serializer.isJson(text);

    result.should.be.false();
  });

  it('Missing qoute is not a json', function () {
    const text = '{text":"aaa"}';
    const result = serializer.isJson(text);

    result.should.be.false();
  });
});
