var should = require('should');
var creator = require('../src/propertyCreator');
var propertyChecker = require('../src/propertyChecker');

describe('PropertyCreatorTests', () => {
  describe('Property not exists', () => {
    describe('Simplest, not nested property', () => {
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

      it('Create object and create property with null', function () {
        const obj = {};
        const property = 'meme';

        const newObj = creator.create(obj, property);

        const memeExists = propertyChecker.doesExist(newObj, property);
        memeExists.should.be.true();
      });
    });
  });
  describe('Property already exist', () => {
    it('Top level property', function () {
      const obj = { prop: 'dupa' };
      const property = 'prop';

      const newObj = creator.create(obj, property);

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

  describe('Object is not an object', () => {
    it('Pass null, get object with property', function () {
      const obj = null;
      const property = 'prop';

      const newObj = creator.create(obj, property);

      const propertyExists = propertyChecker.doesExist(newObj, property);
      propertyExists.should.be.true();
    });
    it('Pass undefined, get object with property', function () {
      const obj = undefined;
      const property = 'prop';

      const newObj = creator.create(obj, property);

      const propertyExists = propertyChecker.doesExist(newObj, property);
      propertyExists.should.be.true();
    });
  })
});
