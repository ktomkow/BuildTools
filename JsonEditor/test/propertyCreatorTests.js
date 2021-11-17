var should = require('should');
var creator = require('../src/propertyCreator');
var propertyChecker = require('../src/propertyChecker');

describe('Create property', () => {
  describe('Property not exists', () => {
    it('Returns not null and not undefined', function () {
      const obj = {};
      const property = 'anyway';

      const newObj = creator.create(obj, property);

      const objNotNull = !!newObj;
      objNotNull.should.be.true();
    });
    it('Returns object and create property', function () {
      const obj = {};
      const property = 'meme';

      const newObj = creator.create(obj, property);

      const memeExists = propertyChecker.doesExist(newObj, property);
      memeExists.should.be.true();
    });
  });
  describe('Property already exist', () => {
    it('Top level property', function () {
      const obj = { prop: 'dupa' };
      const property = 'prop';

      const newObj = creator.create(obj, property);

      const propertyNotNull = !!newObj.prop;
      const propertyExists = propertyChecker.doesExist(newObj, property);

      propertyExists.should.be.true();
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
