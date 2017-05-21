const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session')
const app = express();

const port = process.env.PORT || 3000;

app.use(session({secret: 'todotopsecret'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}));

app.use('/', require('./routes')(express));


exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
});
