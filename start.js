const mongoose = require('mongoose');
const chalk = require('chalk');

// import environmental variables from variables.env file
require('dotenv').config({ path: 'variables.env' });

// connect to database and handle an bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅‍ → ${err.message}`);
});

require('./server/models/Word');

// start app
const app = require('./server/app');
app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`${chalk.bold('Local:')} http://localhost:${chalk.bold(server.address().port)}`);
});
