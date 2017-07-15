// mocha test
// 1. Library with basic math functions: `add`, `subtract`, `multiple`, `divide`.
// 2. throw an error `throw new Error('your message')` when attempting to divide by 0
const assert = require('assert');
const greeter = require('../src/calculator');

// function greeter(name) {
//   return `Hello ${name}!`;
// }

describe('greeting library', () => {
  it('greets by name', () => {
    const greeting = greeter('Joe');
    assert.equal(greeting, 'Hello Joe!')
  });
});

it('defaults to stranger when no name is given', () => {

})
