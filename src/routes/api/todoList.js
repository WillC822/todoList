const todoList = require('../../models/todoList')


module.exports = (express) => {
  const router = express.Router();

  //Read All
  router.get('/todoList', (req, res) => {
    todoList.findAll( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });


  //Read One
  router.get('/todoList/:taskID', (req, res) => {
    req.body.taskID =req.params.taskID;
    todoList.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
      })
  });

  //Create
  router.post('/todoList', (req, res) =>{
    todoList.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
      })
    });

  //delete
  router.delete('/todoList/:taskID', (req, res) => {
    req.body.taskID =req.params.taskID;
    todoList.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
      })
  });

  //update
  router.post('/todoList/:taskID', (req, res) => {
    req.body.taskID =req.params.taskID;
    todoList.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
      })
  });

  return router;
}
