const db = require('./db');

exports.create = (payload, err, success) => {
  db.todoList.create(payload).then(success).catch(err);

}
//findall
exports.findAll = (err, success) => {
  db.todoList.findAll().then(success).catch(err);

}
//find one
exports.find = (payload, err, success) => {
  db.todoList.find({
    where: {
      id: payload.id,
    },
    //Find the relations in sequelize
    include: [{
      all:true,
      nested: true,
    }],
  }).then(success).catch(err);
}

//Update
exports.update = (payload, err, success) => {
  db.todoList.find({
    where: {
      id: payload.id,
    }
  }).then( (previousData) => {
    previousData.updateAttributes(payload).then(success).catch(err);

  }).catch(err);
}

//delete
exports.destroy = (payload, err, success) => {
  db.todoList.find({
    where: {
      id: payload.id,
    },
    //Find the relations in sequelize
    include: [{
      all:true,
      nested: true,
    }],
  }).then(success).catch(err);
}
