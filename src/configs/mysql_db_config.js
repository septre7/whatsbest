const Sequelize = require("sequelize");
const database_constant = require("../constants/mysql_db_enum");

const sequelize = new Sequelize(database_constant.DATABASE, database_constant.USERNAME, database_constant.PASSWORD, {
  dialect: database_constant.DIALECT,
  host: database_constant.HOST,
});


module.exports = sequelize;