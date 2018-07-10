const assert = require('assert');
const httpFact = require('../lib/http-fact');

describe('interesting http fact', () => {
    it('returns fact about http', () => {
        const fact = httpFact();
        assert.ok(/http/.test(fact), `FACT was ${fact}`);
    });
});