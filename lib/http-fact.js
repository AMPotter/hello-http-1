const facts = [
    'The most important parts of an http request are the method and path',
    'http stands for hyper text transfer protocol',
    'http is like a letter in an envelope'
];

const randomNumber = () => {
    return Math.floor(Math.random() * facts.length);
};

module.exports = function httpFact() {
    return facts[randomNumber()];
};