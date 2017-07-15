const assert = require('assert');
const greeter = require('../src/greeter');

describe('greeting library', () => {
  it('greets by name', () => {
    assert.equal(greeter('Joe'),
      'Hello Joe!');
  });
});
it('defaults to stranger when no name is given', () => {
  assert.equal(greeter(), 'Hello stranger!')
})
