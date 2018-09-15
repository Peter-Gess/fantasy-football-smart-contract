const path = require('path');
const fs = require('fs');
const solc = require('solc');

const fantasyPath = path.resolve(__dirname, 'contracts', 'Fantasy.sol');
const source = fs.readFileSync(fantasyPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':FantasyLeague'];