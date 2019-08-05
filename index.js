const express = require('express');
const path = require('path');
// const request = require('request');
const bodyParser = require('body-parser');


const colors = require('colors');
const app = express();
const port = process.env.PORT || '3000';

app.use(express.static('client'));
app.set('client', path.join(__dirname, 'client'));

app.use(bodyParser.urlencoded({ 
  limit: '5mb',
  parameterLimit: 100000,
  extended: false,
}));

app.use(bodyParser.json({
  limit: '5mb'
}));

// all in app routes defuault to react router...
app.get('/*', (req, res) => res.sendFile(__dirname + '/client/index.html'));

app.listen(port, function() {
  console.log('react app running...'.underline.cyan);
});