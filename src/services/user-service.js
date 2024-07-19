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
};
