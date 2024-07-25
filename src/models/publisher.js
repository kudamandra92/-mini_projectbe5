"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publisher.hasMany(models.Game, { foreignKey: "publisher_id" });
    }
  }
  Publisher.init(
    {
      name: DataTypes.STRING,
      publisher_email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Publisher",
    }
  );
  return Publisher;
};
