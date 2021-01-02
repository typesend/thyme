const config = require('./config');
const HarvestService = require('./services/harvest');
const CostpointService = require('./services/costpoint');

console.log('hello');

const testRun = (new HarvestService()).run();
