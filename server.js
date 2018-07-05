const slsHttp = require('serverless-http');
const app = require('./lib/app');
module.exports.run = slsHttp(app);