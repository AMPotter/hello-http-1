const url = require('url');
const cowsay = require('cowsay-browser');
const greet = require('./greet');
const httpFact = require('./http-fact');

module.exports = (req, res) => {

    const { pathname, query } = url.parse(req.url, true);
    const parts = pathname.slice(1).split('/');

    switch(parts[0]) {
    case 'greeting': {
        let greeting = greet(parts[1], query.salutation);
        if(query.format === 'cowsay') {
            greeting = cowsay.say({
                text: greeting,
                e: 'oO',
                T: 'U '
            });
        }
        res.end(greeting);
        break;
    }
    case 'fact': {
        res.setHeader('Content-Type', 'application/json');
        const fact = { fact: httpFact() };
        res.end(JSON.stringify(fact));
        break;
    }
    default:
        res.statusCode = 404;
        res.end(`Cannot ${req.method} ${pathname}`);
        break;
    }
};