const Sequelize = require("sequelize");
const sequelize = require("../configs/mysql_db_config");

const Items = sequelize.define("items", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    topicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.BLOB,
        allowNull: false,
    },
    genre: {
        //I don't think there is a list type in sql. So keeping it as string. We can manage it as comma separated strings
        allowNull: false,
        type: Sequelize.STRING, 
    },
    positiveClicks: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    negativeClicks: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Items;