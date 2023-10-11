// require('db');
const server = require('./models/app');
server.listen(server.get('PORT'), server.get('RSv'));