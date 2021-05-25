const Sequelize = require('sequelize')
const db = {}

const config = {
  "username": "menu",
  "password": "riceburger",
  "database": "menupan",
  "host": "localhost",
  "dialect": "mysql",
  "define": {
    "underscored": false,
    "freezeTableName": false,
    "charset": "utf8",
    "dialectOptions": {
      "collate": "utf8_general_ci"
    },
    "timestamps": true,
    "paranoid": true
  } 
}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})
db.Room = require('./room')(sequelize, Sequelize)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db