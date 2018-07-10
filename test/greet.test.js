const assert = require('assert');
const greet = require('../lib/greet');

describe('greeting', () => {
    it('greets with name', () => {
        const greeting = greet('meow-meow');
        assert.equal(greeting, 'hello meow-meow');
    });

    it('greets with "stranger" when no name provided', () => {
        const greeting = greet();
        assert.equal(greeting, 'hello stranger');
    });

    it('uses salutation when passed as a second argument', () => {
        const greeting = greet('meow-meow', 'hola');
        assert.equal(greeting, 'hola meow-meow');
    });
});