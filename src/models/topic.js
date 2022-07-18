const Sequelize = require("sequelize");
const sequelize = require("../configs/mysql_db_config");
const User = require("./user");

const Topic = sequelize.define("topic", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    flag: {
        type: Sequelize.BOOLEAN
    }

});

module.exports = Topic;