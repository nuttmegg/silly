const { Soup } = require('stews');

function load() {
    var stuff = new Soup(require('./stuff.json'));
    return stuff;
}

module.exports = { load };
