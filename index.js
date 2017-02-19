const path = require('path');

// http://expressjs.com/en/4x/api.html
const express = require('express');

// https://github.com/expressjs/body-parser
const bodyParser = require('body-parser');

// const ApiRouter = require('./api/index');

// Create application
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.json());

//app.use('/api', ApiRouter);

// SPA only
// TODO add server side render
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Start application
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
