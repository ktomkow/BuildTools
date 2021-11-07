var should = require('should');
var checker = require('../src/propertyChecker');

describe('Check if property exists', () => {
  it('Property exists', function () {
    const obj = { name: 'John' };
    const property = 'name';

    const result = checker.doesExist(obj, property);

    result.should.be.true();
  });

  it('Property does not exist', function () {
    const obj = { name: 'John' };
    const property = 'last_name';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });

  it('Property exists but contain null', function () {
    const obj = { name: 'John', second_name: null };
    const property = 'second_name';

    const result = checker.doesExist(obj, property);

    result.should.be.true();
  });

  it('Property exists but contain undefined', function () {
    const obj = { name: 'John', first_name: undefined };
    const property = 'first_name';

    const result = checker.doesExist(obj, property);

    result.should.be.true();
  });

  it('Property does not exists because is case sensitive', function () {
    const obj = { name: 'John' };
    const property = 'NAME';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });

  it('Nested property exists', function () {
    const obj = {
      name: 'John Doe',
      contact: {
        phone: '123 123 123',
        email: 'johndoe@email.com',
      },
    };

    const property = 'contact.phone';

    const result = checker.doesExist(obj, property);

    result.should.be.true();
  });

  it('Nested property does not exist', function () {
    const obj = {
      name: 'John Doe',
      contact: {
        phone: '123 123 123',
        email: 'johndoe@email.com',
      },
    };

    const property = 'contact.address';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });
});
