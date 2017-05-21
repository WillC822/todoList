module.exports = (express) => {
  const router = express.Router();



  router.get('/status', (req, res) => {
    console.log("route hit", req.body);
    res.json({
      healthy:true,
    })
  });


  // Routes
  router.use('/api/', require('./api/todoList')(express));



  return router;
}
