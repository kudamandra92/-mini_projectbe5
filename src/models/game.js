"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsTo(models.Publisher, { foreignKey: "publisher_id" });
    }
  }
  Game.init(
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      publisher_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
