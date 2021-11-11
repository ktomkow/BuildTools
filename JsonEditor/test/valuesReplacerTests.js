var should = require('should');
var replacer = require('../src/valuesReplacer');

describe('Replace values (immutable)', () => {
  it('Repalce single text', function () {
    const obj = { text: 'replace me' };
    const keyValuePair = { key: 'text', value: 'How you doing?' };

    const newObj = replacer.replace(obj, [keyValuePair]);

    obj.text.should.be.exactly('replace me');
    newObj.text.should.be.exactly('How you doing?');
  });
});

describe('Replace values exceptions', () => {
  it('Key value pairs is not array - throw', function () {
    const obj = { text: 'replace me' };

    const act = () => replacer.replace(obj, { key: 'text', value: 'aaa' });

    should.throws(act);
  });
});
