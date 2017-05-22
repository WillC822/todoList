const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session')
const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.use(session({secret: 'todotopsecret'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}));

app.get('/', (req,res) => {
  res.render('pages/index');
});

exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
});
