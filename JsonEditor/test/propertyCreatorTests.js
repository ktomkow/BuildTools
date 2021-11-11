var should = require('should');
var creator = require('../src/propertyCreator');

describe('Create property', () => {
  describe('Create', () => {
    it('Simplest', function () {
      const obj = {};
      const property = 'meme';

      const newObj = creator.create(obj, property);

      const memeNotNull = !!newObj.meme;

      memeNotNull.should.be.true();
    });
  });
  describe('Property already exist', () => {
    it('Top level property', function () {
      const obj = { prop: 'dupa' };
      const property = 'prop';

      const newObj = creator.create(obj, property);

      const propertyNotNull = !!newObj.prop;

      propertyNotNull.should.be.true();
    });

    it('Top level property - immutable', function () {
      const obj = { prop: 'dupa' };
      const property = 'prop';

      const newObj = creator.create(obj, property);

      obj.prop = 'nie dupa';

      obj.prop.should.be.exactly('nie dupa');
      newObj.prop.should.be.exactly('dupa');
    });
  });
});
