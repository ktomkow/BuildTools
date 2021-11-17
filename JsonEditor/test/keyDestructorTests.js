var should = require('should');
var destructor = require('../src/keyDestructor');

describe('Destruct', () => {
  describe('Invalid input type', () => {
    it('Input is null', () => {
      const act = () => destructor.destruct(null);
      should.throws(act);
    });
    it('Input is undefined', () => {
      const act = () => destructor.destruct(undefined);
      should.throws(act);
    });
    it('Input is an empty object', () => {
      const act = () => destructor.destruct({});
      should.throws(act);
    });
    it('Input is an object', () => {
      const act = () => destructor.destruct({ prop: 'any' });
      should.throws(act);
    });
    it('Input is an empty array', () => {
      const act = () => destructor.destruct([]);
      should.throws(act);
    });
    it('Input is an array', () => {
      const act = () => destructor.destruct([1, 2, 3]);
      should.throws(act);
    });
    it('Input is an int', () => {
      const act = () => destructor.destruct(5);
      should.throws(act);
    });
    it('Input is a float', () => {
      const act = () => destructor.destruct(172.3);
      should.throws(act);
    });
    it('Input is true', () => {
      const act = () => destructor.destruct(true);
      should.throws(act);
    });
    it('Input is false', () => {
      const act = () => destructor.destruct(false);
      should.throws(act);
    });
  });
  describe('One word key', () => {
    it('Normal one word', () => {
      const key = 'connectionString';

      const result = destructor.destruct(key);

      result.currentKey.should.be.exactly('connectionString');
      result.shortenKey.should.be.empty();
      result.sourceKey.should.be.exactly('connectionString');
      result.isTheLastOne.should.be.true();
    });
  });

  describe('Nested property key', () => {
    it('Normal one word', () => {
      const key = 'sqlSettings.connectionString';

      const result = destructor.destruct(key);

      result.currentKey.should.be.exactly('sqlSettings');
      result.shortenKey.should.be.exactly('connectionString');
      result.sourceKey.should.be.exactly('sqlSettings.connectionString');
      result.isTheLastOne.should.be.false();
    });
  });
});
