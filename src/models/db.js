const Sequelize = require('sequelize');

require('dotenv').config();

// instantiate sequelize connection, route private info through dotenv(.env)
const sequelize =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
});

// make sure sequelize is running
sequelize.authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

//sets up database
const todoList = sequelize.define('todoList',{
  taskID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  dateDue: {
    type: Sequelize.INTEGER,
  },
  taskComplete: {
    type: Sequelize.STRING,
  }
});

//syncs information above to databse
sequelize.sync();


exports.sequelize = sequelize;
exports.todoList = todoList;
