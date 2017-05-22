module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    console.log("route hit", req.body);
    res.json({
      healthy:true,
    })
  });


  // Routes
  router.get('/', function(req, res, next) {
    res.render('index', {condition: false });
  });

  router.use('/api/', require('./api/todoList')(express));

  return router;
}
