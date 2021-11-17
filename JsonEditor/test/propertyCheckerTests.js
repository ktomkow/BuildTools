var should = require('should');
var checker = require('../src/propertyChecker');

describe('PropertyChecker', () => {
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

  it('Double nested property does not exist', function () {
    const obj = {
      name: 'John Doe',
      contact: {
        phone: '123 123 123',
        email: 'johndoe@email.com',
      },
    };

    const property = 'contact.address.street';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });

  it('Middle property null roperty does not exist', function () {
    const obj = {
      name: 'John Doe',
      contact: {
        phone: '123 123 123',
        email: 'johndoe@email.com',
        address: null
      },
    };

    const property = 'contact.address.street';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });

  it('Middle property undefined roperty does not exist', function () {
    const obj = {
      name: 'John Doe',
      contact: {
        phone: '123 123 123',
        email: 'johndoe@email.com',
        address: undefined
      },
    };

    const property = 'contact.address.street';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });

  it('Middle property number not object roperty does not exist', function () {
    const obj = {
      name: 'John Doe',
      contact: {
        phone: '123 123 123',
        email: 'johndoe@email.com',
        address: 2
      },
    };

    const property = 'contact.address.street';

    const result = checker.doesExist(obj, property);

    result.should.be.false();
  });
});
