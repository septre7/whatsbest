const Sequelize = require("sequelize");
const sequelize = require("../configs/mysql_db_config");

const Categories = sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    topicId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Categories;