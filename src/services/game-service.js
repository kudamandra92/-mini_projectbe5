const db = require("../models");
module.exports = {
  fetchGameAll: async function () {
    try {
      const data = await db.Game.findAll({
        include: db.Publisher,
        attributes: { exclude: ["createdAt", "updatedAt", "publisher_id"] },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
  fetchGame: async function (payload) {
    try {
      const data = await db.Game.findOne({
        where: { id: payload },
        include: db.Publisher,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
