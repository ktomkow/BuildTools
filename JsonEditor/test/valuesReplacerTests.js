var should = require('should');
var replacer = require('../src/valuesReplacer');

describe('ValuesReplacer', () => {
  describe('Replace values (immutable)', () => {
    it('Single text', function () {
      const obj = { text: 'replace me' };
      const keyValuePair = { key: 'text', value: 'How you doing?' };

      const newObj = replacer.replace(obj, [keyValuePair]);

      obj.text.should.be.exactly('replace me');
      newObj.text.should.be.exactly('How you doing?');
    });

    describe('Nested text', () => {
      it('Value in new object is replaced', function () {
        const obj = {
          name: {
            firstName: 'fName',
          },
        };
        const keyValuePair = { key: 'name.firstName', value: 'John' };

        const newObj = replacer.replace(obj, [keyValuePair]);

        newObj.name.firstName.should.be.exactly('John');
      });

      it('Value in source object is not changed', function () {
        const obj = {
          name: {
            firstName: 'fName',
          },
        };
        const keyValuePair = { key: 'name.firstName', value: 'John' };

        const newObj = replacer.replace(obj, [keyValuePair]);

        obj.name.firstName.should.be.exactly('fName');
      });
    });
  });

  describe('Replace values exceptions', () => {
    it('Key value pairs is not array - throw', function () {
      const obj = { text: 'replace me' };

      const act = () => replacer.replace(obj, { key: 'text', value: 'aaa' });

      should.throws(act);
    });
  });
});
