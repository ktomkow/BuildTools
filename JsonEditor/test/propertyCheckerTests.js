var should = require('should');
var checker = require('../src/propertyChecker');

describe('Check if property exists', () => {
  it('Property exists', function () {
    const obj = { name: 'John' };
    const property="name";

    const result = checker.doesExist(obj, property);

    result.should.be.true();
  });

  it('Property does not exist', function () {
    const obj = { name: 'John' };
    const property="last_name";

    const result = checker.doesExist(obj, property);
    
    result.should.be.false();
  });

  it('Property exists but contain null', function () {
    const obj = { name: 'John', second_name: null };
    const property="second_name";

    const result = checker.doesExist(obj, property);
    
    result.should.be.true();
  });
});
