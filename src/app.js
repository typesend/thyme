const config = require('./config');
const HarvestService = require('./services/harvest');
const CostpointService = require('./services/costpoint');

console.log("hello");

let testRun = (new HarvestService()).run();
