const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session')
const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.use(session({secret: 'todotopsecret'}));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended:true,
}));

app.get('/', (req,res) => {
  res.render('views/pages/index');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
});
