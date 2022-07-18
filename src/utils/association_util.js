const sequelize = require("../configs/mysql_db_config");
const User = require("../models/user");
const Topic = require("../models/topic");

const association = () => {
  //association
  User.belongsToMany(Topic, {
    through: "topic_user",
    foreignKey: "user_id",
  });
  Topic.belongsToMany(User, {
    through: "topic_user",
    foreignKey: "topc_id",
  });

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
