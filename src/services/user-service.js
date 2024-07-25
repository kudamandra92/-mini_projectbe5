const { where } = require("sequelize");
const db = require("../models");
module.exports = {
  fetchUserAll: async function () {
    try {
      const data = await db.User.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  },
  fetchUser: async function (payload) {
    try {
      const data = await db.User.findOne({ where: { id: payload } });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
