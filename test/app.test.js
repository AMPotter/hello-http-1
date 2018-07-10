const app = require('../lib/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const assert = chai.assert;
chai.use(chaiHttp);

describe('http app', () => {
    
    const server = http.createServer(app);
    const request = chai.request(server).keepOpen();
    after(done => server.close(done));

    it('GET /greeting/name responds with greeting', done => {
        const name = 'meow-meow';
        request.get(`/greeting/${name}`)
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello meow-meow');
                done();
            });
    });

    it('GET /greeting?salutation= responds with custom salutation', done => {
        request.get('/greeting?salutation=hola')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hola stranger');
                done();
            });
    });

    it('GET /fact', done => {
        request.get('/fact')
            .end((err, res) => {
                if(err) return done(err);
                assert.ok(/http/.test(res.text));
                done();
            });
    });

    it('Replies with 404 for bad path', done => {
        request.get('/bad')
            .end((err, res) => {
                if(res.status !== 404) return done('expected err response');
                assert.equal(res.status, 404);
                assert.equal(res.text, 'Cannot GET /bad');
                done();
            });
    });
});