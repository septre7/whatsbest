const sequelize = require("../configs/mysql_db_config");
const User = require("../models/user");
const Topic = require("../models/topic");
const Items = require("../models/items");
const Categories = require("../models/categories");

const association = () => {
  //association
  //Start of User-Topic Relatopnship Many To Many
  User.belongsToMany(Topic, {
    through: "topic_user",
    foreignKey: "user_id",
  });

  Topic.belongsToMany(User, {
    through: "topic_user",
    foreignKey: "topic_id",
  });
  //End of User-Topic Relatopnship Many To Many

  //Start of Topic-Item Relatopnship Many To Many
  Topic.belongsToMany(Items, {
    through: "topic_item",  
    foreignKey: "topic_id"
  });

  Items.belongsToMany(Topic, {
    through: "topic_item",  
    foreignKey: "item_id"
  });
  //End of Topic-Item Relatopnship Many To Many


  sequelize
    .sync({ force: true }) // if any chnages are there then have to force it
    //   .sync()  for syncing only
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {association};
