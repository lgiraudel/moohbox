var moohbox = require('../index');
var sinon = require('sinon');
var assert = require('chai').assert;

describe('Moohbox tests', function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should say mooh', function() {

    moohbox.mooh();
    assert.equal(console.log.callCount, 10);
    sinon.assert.calledWithMatch(console.log, 'Mooooh');
  });

  it('should say whatever I want', function() {
    moohbox.mooh('bli bla blou');

    sinon.assert.calledWithMatch(console.log, 'bli bla blou');
  });
});