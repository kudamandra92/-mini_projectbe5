const db = require("../models");
module.exports = {
  fetchGameAll: async function () {
    try {
      const data = await db.Game.findAll({ include: db.Publisher });
      return data;
    } catch (error) {
      throw error;
    }
  },
  fetchGame: async function (payload) {
    try {
      const data = await db.Game.findOne({ where: { id: payload } });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
